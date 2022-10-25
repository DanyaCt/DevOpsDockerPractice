# Docker
### Було створений додаток node.js, та Dockerfile
## Білд зображення
```
docker build . -t sebtec1212/node-web-app:0.2
```
## Запуск контейнеру 
```
docker run -p 80:80 -d --memory="20m" --cpus=1.5 sebtec1212/node-web-app:0.2
```
### Після запуску контейнеру заходимо на http://localhost/ і дивимось на результат
