> 打包镜像

docker build --rm -t moudicat/node4 .

> 运行镜像（包含数据卷）

docker run \
        -d \
        -p 2233:2233 \
        --name=node4  \
        moudicat/node4