FROM node:latest

# 给镜像添加工作目录 /app
RUN mkdir -p /app

# 设定默认工作路径
WORKDIR /app

# 复制应用进入到镜像中
COPY ./ /app

# 对外开放的服务接口为 3000
EXPOSE 2580

# 容器运行时默认调用的启动命令
CMD ["node","/app/index.js"]
