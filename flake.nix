{
  description = "A clj-nix flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    clj-nix.url = "github:jlesquembre/clj-nix";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      clj-nix,
    }:

    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [
            clj-nix.overlays.default
          ];
        };
        clj-bin = pkgs.mkCljBin {
            projectSrc = ./.;
            name = "net.coruscation/cerulean";
            main-ns = "net.coruscation.cerulean.build";
            version = "1.0";
            jdkRunner = pkgs.jdk25_headless;
            buildCommand = ''
            clj -X:uberjar'';
          };
        deps-cache = pkgs.mk-deps-cache { lockfile = ./deps-lock.json; };
        deps = with pkgs; [
          (nodejs-slim.override {
            enableNpm = true;
          })
          (emacs-nox.override {
            withNativeCompilation=false;
            withMailutils=false;
            withSQLite3=false;
            withDbus=false;
            withSystemd=false;
            withGpm=false;
            withToolkitScrollBars=false;
            withTreeSitter=false;
            withWebP=false;
          })
          gitMinimal
          babashka-unwrapped
          pkgs.dockerTools.binSh
          pkgs.dockerTools.usrBinEnv
        ];

        npmDeps = pkgs.buildNpmPackage(finalAttrs: {
          src = self;
          pname = "cerulean-npm-deps";
          version = "0.0";
          dontNpmBuild = true;
          npmDepsHash = (builtins.readFile ./npm-deps.sha256);
          installPhase = ''
          mkdir $out
          cp -r ./node_modules $out/node_modules
          '';
        });

        cerulean-src = pkgs.stdenv.mkDerivation {
          name = "cerulean";
          src = self;
          installPhase = ''
          mkdir -p $out
          cp -r * $out/
          cp -r ${npmDeps}/node_modules $out/node_modules
          '';
        };

        make-docker =
          { extra-deps }:
          (pkgs.dockerTools.buildLayeredImage {
            name = "cerulean";
            fromImage = (
              pkgs.dockerTools.pullImage {
                imageName = "clojure";
                imageDigest = "sha256:3326eef6fdb2089c7cb10c330076e8d7b22d1c0d4fd670dad6077789f34d7d66";
                sha256 = "sha256-qYyLGRF80yBOLKOdaS0r4nbqd+/FuqkXZFS55me5xLM=";
              }
            );
            created = "now";
            contents = [
              deps-cache
              self
              (pkgs.buildEnv {
                name = "image-root";
                paths = deps  ++ extra-deps;
                pathsToLink = [
                  "/bin"
                  "/usr/bin/"
                ];
              })
            ];
            enableFakechroot = true;
            fakeRootCommands = ''
              echo ${deps-cache} > /path
              mkdir -p /root
              ln -s "${deps-cache}/.m2" /root/.m2
              ln -s "${cerulean-src}" /cerulean
            '';
            config = {
              Cmd = [
                "/usr/bin/env"
                "bash"
              ];
            };
          });
      in
      {
        packages = {

          # Not ready to use
          uberjar = clj-bin;
          build = (
            pkgs.writeShellApplication {
              name = "build";
              runtimeInputs = deps;
              text = ''
                npm i
                clj -X:build-full
              '';
            }
          );
          docker = (make-docker { extra-deps = [ ]; });
          docker-dev = (
            make-docker {
              extra-deps = [
              ];
            }
          );
        };
      }
    );
}
