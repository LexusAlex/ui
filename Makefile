######################################
# Общее
up: docker-up
down: docker-down
# Очистка от мусора
clear:
	docker-compose run --rm node-debian-cli /bin/bash -c 'rm -rf build'
######################################
# Девелоперские вещи
# Собрать образы
docker-build:
	docker-compose build
# Собрать образы + проверить на наличие новых версии образов
docker-build-pull:
	docker-compose build --pull
# Запуск контейнеров в фоновом режиме
docker-up:
	docker-compose up -d
# Перезапуск контейнеров
docker-restart:
	docker-compose restart
# Остановить контейнеры поднятые командой docker-compose up
docker-down:
	docker-compose down --remove-orphans
# Остановить контейнеры а также удалить тома
docker-down-clear:
	docker-compose down -v --remove-orphans
##################################
# NPM
# Установка проекта с нуля
npm-install:
	docker-compose run --rm node-debian-cli npm install
# Обновление зависимостей
npm-update:
	docker-compose run --rm node-debian-cli npm update --save
# Проверка обновлений зависимостей
npm-outdated:
	docker-compose run --rm node-debian-cli npm outdated
# сборка проекта
npm-build:
	docker-compose run --rm node-debian-cli npm run build
####################################
