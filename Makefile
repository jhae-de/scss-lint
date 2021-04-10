include .env

RUN := @docker-compose run --rm --name ${DOCKER_CONTAINER_NAME} app

.PHONY: shell
shell:
	$(RUN) bash

.PHONY: install
install:
	$(RUN) yarn install

.PHONY: build
build:
	$(RUN) yarn run build

.PHONY: lint
lint:
	$(RUN) yarn run lint

.PHONY: test
test:
	$(RUN) yarn run test

.PHONY: test-watch
test-watch:
	$(RUN) yarn run test:watch

.PHONY: test-coverage
test-coverage:
	$(RUN) yarn run test:coverage

.PHONY: test-watch-coverage
test-watch-coverage:
	$(RUN) yarn run test:watch:coverage
