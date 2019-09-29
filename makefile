.PHONY: install up down

install: up
	docker-compose exec node npm install
	docker-compose exec node cp .env.example .env
	docker-compose exec node sed -i 's/^HOST=.*/HOST=0.0.0.0/' .env
	docker-compose exec node sed -i 's/^DB_CONNECTION=.*/DB_CONNECTION=pg/' .env
	docker-compose exec node sed -i 's/^DB_HOST=.*/DB_HOST=pg/' .env
	docker-compose exec node sed -i 's/^DB_PORT=.*/DB_PORT=5432/' .env
	docker-compose exec node sed -i 's/^DB_USER=.*/DB_USER=nairi.dev/' .env
	docker-compose exec node sed -i 's/^DB_PASSWORD=.*/DB_PASSWORD=nairi.dev/' .env
	docker-compose exec node sed -i 's/^DB_DATABASE=.*/DB_DATABASE=nairi.dev/' .env
	docker-compose down --remove-orphans --volumes
	docker-compose up --detach

up:
	docker-compose up --detach
	docker-compose exec node npm run adonis -- migration:run
	docker-compose exec node npm run adonis -- seed
	docker-compose exec --detach node npm start
	docker-compose exec --detach node npm run rollup -- --config rollup.config.js --watch

down:
	docker-compose down
