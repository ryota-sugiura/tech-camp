'use strict';

const express = require('express') ;
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.static('public'));

app.get('/',  (req, res)  => res.send('Hello World'));
app.get('/sugiura',  (req, res)  => res.send('エンジニアすごい'));
app.get('/shibayama',  (req, res)  => res.send('フットサルしたい'));

app.get('/login',  (req, res)  => res.sendFile(__dirname+'/public/index.html'));
app.post('/post',  (req, res)  => {
  // console.log(req.body);
  // console.log("-----");
  // console.log(req.body.userid);
  // console.log(req.body.password);
  if(req.body.userid === 'shaaaaampoo' && req.body.password === 'ryotaryota'){
    console.log("おめでとう！ログイン成功だよ！");
    res.send("おめでとう！ログイン成功だよ！");
    // console.log(req.body);
    // res.send(req.body);
  }else{
    console.log("ID、パスワードが違います。");
    res.send("ID、パスワードが違います。");
  }

});

app.listen(PORT);
console.log(`listening on *: ${PORT}`);
