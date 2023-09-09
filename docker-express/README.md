## 실행중인 컨테이너에 명령어 전달

### `docker exec <CONTAINER ID>`

terminal 1: `docker run alpine ping localhost`

## terminal 2 `docker exec cd4203915e55 ls`: 컨테이너가 잘 작동하고 있는지 확인하고 다른 명령어를 전달

## docker image 이름 주는 방법

`docker build -t <docker ID>/<저장소/프로젝트 이름>:버전`

`docker build -t jaehafe/hello:latest ./`

![스크린샷 2023-09-07 오후 8.26.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d6f12d0f-6a9c-4d93-96ae-1acd359569bf/642d9862-af72-4587-818f-d0806621e28a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.26.50.png)

writing image sha256:1e6f23c2bb6f66a55b7fc0cc811e95e555effc31c0b6ba35f5880dbe440d7 0.0s
=> => naming to [docker.io/jaehafe/hello:latest](http://docker.io/jaehafe/hello:latest)

`docker run -it jaehafe/hello`

---

```docker
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD ["node", "main.js"]
```

1. **`FROM node:16`**
   - Node.js 16 버전을 기본 이미지로 사용합니다. 이 라인은 기본 이미지로 Node.js 16을 사용하겠다고 선언하는 부분입니다.
2. **`WORKDIR /usr/src/app`**
   - 작업 디렉토리를 **`/usr/src/app`**으로 설정합니다. 이 디렉토리는 컨테이너 내부에서 작업 디렉토리로 사용될 것입니다.
3. **`COPY package*.json ./`**
   - 호스트 시스템에서 컨테이너 내부의 현재 작업 디렉토리로 **`package.json`** 및 **`package-lock.json`** 파일을 복사합니다. 이것은 종속성 설치를 위해 필요한 파일들입니다.
4. **`RUN yarn install`**
   - Yarn을 사용하여 종속성을 설치합니다. **`package.json`** 및 **`package-lock.json`** 파일을 기반으로 필요한 노드 패키지를 설치하는 명령입니다.
5. **`COPY . .`**
   - 현재 디렉토리의 모든 파일과 하위 디렉토리를 컨테이너 내부의 현재 작업 디렉토리로 복사합니다. 이것은 소스 코드 및 애플리케이션 파일을 컨테이너로 가져올 때 사용됩니다.
6. **`EXPOSE 8080`**
   - 컨테이너 내부에서 8080 포트를 노출시킵니다. 이것은 컨테이너 내부에서 실행 중인 애플리케이션이 외부와 통신할 때 사용될 수 있습니다.
7. **`CMD ["node", "main.js"]`**
   - 컨테이너가 시작될 때 실행할 명령을 정의합니다. 이 경우, Node.js 애플리케이션을 실행하고 **`main.js`** 파일을 시작 스크립트로 사용합니다.

이 Dockerfile은 Node.js 애플리케이션을 Docker 컨테이너로 패키징하고 실행하는 데 필요한 기본적인 설정을 제공합니다. 컨테이너 내부에서 Node.js 애플리케이션이 실행되며, 외부로 8080 포트를 노출하여 해당 포트로 액세스할 수 있게 합니다.

---

## docker image에 tag 부여

### `docker build -t jaeha-docer/express ./`

- **`docker build`**: Docker 이미지를 빌드하는 명령어입니다.
- **`t jaehafe/nodejs`**: **`t`** 옵션은 이미지에 이름과 태그를 부여하는 옵션입니다. **`jaehafe/nodejs`**는 이미지의 이름과 태그로 사용됩니다. 이미지 이름은 보통 **`{사용자명}/{이미지명}`** 형식으로 지정하며, 여기서는 **`jaehafe`** 사용자의 **`nodejs`** 이미지를 빌드하고 있습니다.
- **`./`**: 마지막에 **`./`**는 Dockerfile을 찾을 경로를 나타냅니다. 현재 디렉토리에서 Dockerfile을 찾아 이미지를 빌드하게 됩니다.

요약하면, 위 명령어는 현재 디렉토리에서 Dockerfile을 찾아 **`jaehafe/nodejs`**라는 이름과 태그를 가진 Docker 이미지를 빌드하게 됩니다. 이 이미지는 나중에 Docker 컨테이너로 실행하거나 Docker Hub와 같은 Docker 레지스트리에 푸시할 수 있습니다.

---

### `docker run -p 4000:4000 jaeha/express1`

### `docker run -it node ls`

1. **`docker run`**: Docker 컨테이너를 실행하는 명령어입니다.
2. **`it`**: 이 옵션은 Docker 컨테이너와 상호작용할 수 있도록 터미널 세션을 활성화합니다. **`i`**는 표준 입력(stdin)을 유지하고 **`t`**는 유사한 터미널 환경을 제공하므로 컨테이너 내에서 명령을 실행하고 결과를 확인할 수 있게 합니다.
3. **`node`**: 실행할 Docker 이미지의 이름 또는 ID입니다. 여기서는 **`node`**라는 이미지를 사용하고 있습니다.
4. **`ls`**: 컨테이너 내에서 실행할 명령어입니다. **`ls`**는 파일 및 디렉토리 목록을 나열하는 Unix/Linux 명령어입니다. 따라서 이 명령을 실행하면 컨테이너 내에서 파일 및 디렉토리 목록을 확인할 수 있게 됩니다.

요약하면, 위 명령어는 Docker 컨테이너를 시작하고 해당 컨테이너 내에서 **`ls`** 명령을 실행하여 파일 및 디렉토리 목록을 출력합니다.

### `docker run -it jaeha/express1 sh`

1. **`docker run`**: Docker 컨테이너를 실행하는 명령어입니다.
2. **`it`**: 이 옵션은 Docker 컨테이너와 상호작용할 수 있도록 터미널 세션을 활성화합니다. **`i`**는 표준 입력(stdin)을 유지하고 **`t`**는 유사한 터미널 환경을 제공하므로 컨테이너 내부의 셸에 입력하고 출력을 확인할 수 있게 합니다.
3. **`jaeha/express1`**: 실행할 Docker 이미지의 이름 또는 ID입니다. 여기서는 **`jaeha/express1`**라는 이미지를 사용하고 있습니다.
4. **`sh`**: 컨테이너 내에서 실행할 명령어입니다. **`sh`**는 Unix/Linux 시스템에서 사용되는 셸 (shell) 중 하나로, 이 명령어를 사용하면 컨테이너 내부로 들어가 셸 환경을 시작할 수 있습니다. **`sh`** 셸을 실행하면 컨테이너 내에서 셸 명령어를 입력하고 실행할 수 있게 됩니다.

이렇게 실행하면 **`jaeha/express1`** 이미지의 컨테이너가 시작되며, 컨테이너 내에서 **`sh`** 셸이 실행됩니다. 이제 컨테이너 내에서 파일 및 명령어를 확인하고 실행할 수 있습니다. 컨테이너에서 빠져나오려면 **`exit`** 명령어를 입력하고 엔터 키를 누르면 됩니다.

---

`docker build -t jaeha/express ./`

`docker run -d -p 4000:4000 jaeha/express`

---
