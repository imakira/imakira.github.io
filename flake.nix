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
        deps = with pkgs; [
          clojure
          nodejs
          emacs-nox
          git
          babashka-unwrapped
        ];
        deps-cache = pkgs.mk-deps-cache { lockfile = ./deps-lock.json; };
        make-docker =
          { extra-deps }:
          (pkgs.dockerTools.buildImage {
            name = "cerulean";
            # fromImage = (
            #   pkgs.dockerTools.pullImage {
            #     imageName = "alpine";
            #     imageDigest = "sha256:ea71a031ed91cd46b00d438876550bc765da43b4ae40f331a12daf62f0937758";
            #     sha256 = "sha256-WIoHQRU1jwIgLNzGIzxVgLsf+0geDbhx9MqrsB9/K9c=";
            #   }
            # );
            copyToRoot = [
              (pkgs.buildEnv {
                name = "image-root";
                paths = deps ++ extra-deps;
                pathsToLink = [
                  "/bin"
                  "/usr/bin/"
                ];
              })
              pkgs.dockerTools.binSh
              pkgs.dockerTools.usrBinEnv
            ];
            runAsRoot = ''
              mkdir -p /root/.m2/
              ln -s "${deps-cache}/.m2/repository" /root/.m2/repository
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
                pkgs.bash
                pkgs.coreutils
              ];
            }
          );
        };
      }
    );
}
