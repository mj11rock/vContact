.PHONY: run-docker dev

run:
	docker build . -t vcontact && docker run --detach -p 3000:3000 --env-file .env vcontact

dev:
	npm run dev
