
const url = "mongodb+srv://Agry:asd45628@cluster0.qexcdld.mongodb.net/?retryWrites=true&w=majority";

///引入套件
const express = require('express');
const app = express();
const mongoose = require("mongoose");

///與資料庫連線
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});
const db = mongoose.connection;

///與資料庫連線發生錯誤時
db.on('err', err => console.log(err));

///與資料庫連線成功連線時
db.once('open', () => console.log('connected to database'));

///重要!! 要加這行才可以讓req.json讀的到資料
app.use(express.json());

///引入Router 一個Router基本上處理一個資料表
const todoRouter = require("./routes/todo");
///此處的/todo代表連線到該Router的基本路徑為 http://localhost:3000/todo
app.use("/todo", todoRouter);

///設定Server的Port
app.listen(3000, () => console.log("server started"))

