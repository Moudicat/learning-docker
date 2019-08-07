> 本地运行一个redis服务

docker pull redis:3.2-alpine

docker run -d -p 6379:6379 --name=redis redis:3.2-alpine


> 打包镜像

docker build --rm -t moudicat/node4 .

> 运行镜像（包含数据卷）

docker run \
        -d \
        -p 2233:2233 \
        --name=node5  \
        moudicat/node5

