FROM  node:lts-alpine

# 拷贝package.json/package-lock.json至docker内部
COPY package*.json /app/

# 设定工作区
WORKDIR /app

# 安装依赖
RUN npm install

# 复制文件
COPY . /app

# 声明作用 还需要外部-p进行端口映射
EXPOSE 2233

CMD npm run start