MAKEFLAGS += --always-make

watch:
	clj -X:watch

build:
	clj -X:build

styles-dev:
	npx @tailwindcss/cli -i ./resources/main.css -o ./public/main.css --watch

styles-release:
	npx @tailwindcss/cli -m -i ./resources/main.css -o ./public/main.css

docker-build-and-load:
	nix build .#docker
	docker load < result

docker-build-and-load-dev:
	nix build .#docker-dev
	docker load < result

nix-deps-lock:
	nix run github:jlesquembre/clj-nix#deps-lock

nix-npm-deps-lock:
	nix run nixpkgs#prefetch-npm-deps package-lock.json > npm-deps.sha256

live-static-site:
	cd docs && python -m http.server

uberjar:
	clj -X:uberjar

test:
	clj -M:uberjar:kaocha --skip-meta slow

test-all:
	clj -M:uberjar:kaocha

npm-update:
	npm update

clj-deps-update:
	neil dep update

update-dependencies: | npm-update clj-deps-update nix-deps-lock nix-npm-deps-lock
