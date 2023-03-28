## 做一个移动OA办公系统（Vue + Node + Mongodb）

### 说明
前端采用 vue2全家桶 + vant + vuesocket.io

后端采用express + MongoDB + socket

### 项目启动
> 注意必须要有node、npm以及mongodb，项目默认mongodb IP地址为127.0.0.1:27017，可以在配置文件中修改。（oaServer\utils\database.js）
```
项目启动的流程：

    cd oaSystem
    npm install 安装前端依赖
    npm run build 编译前端代码
    cd ..
    cd oaServer
    npm install 安装后端依赖
    npm run create 初始化数据库
    npm start 启动服务
    在浏览器中打开 localhost:9988 即可
```

### 相关阅读
* [socket.io文档](https://www.w3cschool.cn/socket/socket-buvk2eib.html)
* [Mongoose基础入门](http://www.cnblogs.com/xiaohuochai/p/7215067.html?utm_source=itdadao&utm_medium=referral)


 
