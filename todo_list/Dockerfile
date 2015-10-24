FROM node:slim

MAINTAINER DaoCloud <example@daocloud.io>

RUN apt-get update \
    && apt-get install -y git ssh-client ca-certificates --no-install-recommends \
    && rm -r /var/lib/apt/lists/*

RUN echo "Asia/Shanghai" > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata


# 给镜像添加工作目录 /app
RUN mkdir -p /app

# 设定默认工作路径
WORKDIR /app

# 复制应用进入到镜像中
COPY ./ /app

# 对外开放的服务接口为 8080
EXPOSE 3000

# 容器运行时默认调用的启动命令
CMD ["node /app/http_get_post.js"]
