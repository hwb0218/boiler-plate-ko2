// npm 패키지를 만들기 위해 npm init
// mongoose는 mongoDB를 편하게 쓸 수 있게 하는 tool

// express require
const express = require('express');
const app = express();
const port = 5000;

const mongoose = require("mongoose");
// 이것들을 처리해야 오류가 뜨지 않음
// 잘 실행된다면 then 아니면 catch
// user.js 파일을 만들고 model을 생성한다.
mongoose.connect('mongodb+srv://woobeen:abcd1234@boilerplate.fc499.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('ㅋㅋ루삥뽕'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));