// ターミナルに「こんにちは」と表示するプログラム

// console.log("こんにちは"); //文字を表示する

// const x = 1; //定数：再代入ができない
// const y = 2;
// const z = x + y;
//
// console.log(z); //変数の展開、表示

// const hour = process.argv[2];
// let message = "";
//
// if(hour === "8"){
//   message = "おはよう";
// }else{
//   message = "こんにちは";
// }
// console.log(message);

// const hour = Number(process.argv[2]);
// let message = "";
//
// if(hour >= 5 && hour <= 10){
//     message = "おはよう";
// }else if(hour >=11 && hour <=17){
//     message = "こんにちは";
// }else if(hour >=18 || hour <=4){
//   message = "こんばんは";
// }
// console.log(message);

'use strict'

const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

  console.log(req.url);
  if(req.url === '/shibayama'){
    res.end('フットサルやりたい\n');
  }else if(req.url === '/jo'){
    res.end('のり弁うまい\n');
  }else{
    res.end('プレイドへようこそ！！！\n');
  }

}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}`);
