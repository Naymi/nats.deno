.PHONY: build test bundle lint

build: test

lint:
	deno lint --ignore=docs/,debug/

test: clean
	deno test --allow-all --parallel --reload --quiet --coverage=coverage nats-base-client/tests/ jetstream/tests kv/tests/ os/tests/ service/tests/
	deno test --allow-all --parallel --reload --quiet --unsafely-ignore-certificate-errors --coverage=coverage nats-base-client/unsafe_tests/


testw: clean
	deno test --allow-all --unstable --reload --parallel --watch --fail-fast tests/ jetstream/ kv/tests/ os/tests/ service/tests/

cover:
	deno coverage --unstable ./coverage --lcov > ./coverage/out.lcov
	genhtml -o ./coverage/html ./coverage/out.lcov
	open ./coverage/html/index.html

clean:
	rm -rf ./coverage

bundle:
	deno bundle --log-level info --unstable src/mod.ts ./nats.js
	deno bundle --log-level info --unstable jetstream/mod.ts ./jetstream.js
	deno bundle --log-level info --unstable kv/mod.ts ./kv.js
	deno bundle --log-level info --unstable os/mod.ts ./os.js
	deno bundle --log-level info --unstable service/mod.ts ./svc.js


fmt:
	deno fmt src/ doc/ bin/ nats-base-client/ examples/ tests/ debug/ unsafe_tests/ jetstream/ nuid/ kv/ os/ service/ jetstream.md README.md migration.md services.md
