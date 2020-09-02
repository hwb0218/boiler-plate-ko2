// npm 패키지를 만들기 위해 npm init
// mongoose는 mongoDB를 편하게 쓸 수 있게 하는 tool
// git bash를 통해서 ssh 유무 확인 ls -a ~/.ssh
// git init 후 add(add 전에 .gitignore 작업), commit -m "~~"
// ssh 발급한 후 push origin master
// express require
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require('./models/User');
const mongoose = require("mongoose");

// bodyParser 두 개는 클라이언트에서 온 정보를 서버에서 분석하여 가져올 수 있게 하는 것
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 이것들을 처리해야 오류가 뜨지 않음
// 잘 실행된다면 then 아니면 catch
// user.js 파일을 만들고 model 을 생성한다.
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('ㅋㅋ루삥뽕~'));

// register route 만들기
app.post('/api/users/register', (req, res) => {
    // 회원 가입할 때 필요한 정보들을 client 에서 가져오면 그것들을 DB에 넣어준다.
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if (err) {
            return res.json({ success : false, err });
        }
        return res.status(200).json({
            success : true
        });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
