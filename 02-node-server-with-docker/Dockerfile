FROM  node:lts-alpine

# 拷贝文件至docker内部
COPY . /app

# 设定工作区
WORKDIR /app

# 声明作用 还需要外部-p进行端口映射
EXPOSE 2233

CMD node index