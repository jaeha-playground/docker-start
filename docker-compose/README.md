### docker-compose.yml

```yaml
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    build: ./
    ports:
      - '4000:4000'
```

### `docker-compose up`

### docker compose 컨테이너 멈추기

`docker compose down`작동 시킨 컨테이너들을 한 번에 중단 시키려면

1.`docker compose up —build`: 이미지 유무에 관계없이 이미지를 빌드하고 컨테이너 시작

2.`docker-compose up`: 이미지가 없을 때 이미지를 빌드하고 컨테이너 시작
