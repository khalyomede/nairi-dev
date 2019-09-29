.PHONY: install up down start

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
	docker-compose exec node npm run adonis -- migration:run
	docker-compose exec node npm run adonis -- seed

up:
	docker-compose up --detach

down:
	docker-compose down --remove-orphans --volumes

start: up
	docker-compose exec node npm start
