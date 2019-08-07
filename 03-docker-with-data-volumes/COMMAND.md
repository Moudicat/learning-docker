> 打包镜像

docker build --rm -t moudicat/node3 .

> 运行镜像（包含数据卷）

docker run \
        -d \
        -p 2233:2233 \
        -v /Users/moudicat/Code/docker-demo/03-docker-with-data-volumes/data:/app/data \
        --name=node3  \
        moudicat/node3