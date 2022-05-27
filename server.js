const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/winpage') {
    fs.readFile('winpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/losepage') {
    fs.readFile('losepage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('userChoice' in params){
      if(params['userChoice']== 'rock' || 'paper' || 'scissors'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const choice = Math.ceil(Math.random()*3)
        let userChoice = params['userChoice']
        //let chance = Math.ceil(Math.random() * 3)
    //let flipRes = chance <=  1 ? "paper" : chance <= 2 ? 'scissors : 'rock' ;
        let botChoice = choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors";
        const objToJson = {
          botOutcome: botChoice
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
       else if(params['userChoice'] != 'rock' || 'paper' || 'scissors'){
         res.writeHead(200, {'Content-Type': 'application/json'});
         const objToJson = {
           botOutcome: 'unknown'
         }
         res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);


//function rockPaperScissors() {
//  let random = Math.random();
//  if (random < 0.33) {
//    return "rock";
//  } else if (random < 0.66) {
//    return "paper";
//  } else {
//    return "scissors";
//  }
//}

//let botChoice = rockPaperScissors();
//  if (botChoice === playerChoice) {
//    console.log("tie game");
//  } else if (
//    (botChoice == "rock" && playerChoice == "scissors") ||
//    (botChoice == "scissors" && playerChoice == "paper") ||
//    (botChoice == "paper" && playerChoice == "rock")
//  ) {
//    console.log("you lose");
//  } else if (
//    (botChoice == "rock" && playerChoice == "paper") ||
//    (botChoice == "paper" && playerChoice == "scissors") ||
//    (botChoice == "scissors" && playerChoice == "rock")
//  ) {
//    console.log("you win");
//  }
//}
//rockPaperScissorsCheck("rock");

let userChoice = 
let botChoice = Math.ceil(Math.random()*3)
let num = Math.ceil(Math.random()*3)
let winner = ''
let loser1 = ''
let loser2 = ''
userChoice == botChoice ? winner = 'NOBODY': (userChoice == 'rock' && botChoice == 'paper') || (userChoice == 'paper' && botChoice == 'scissors') || (userChoice == 'scissors' && botChoice == 'rock') ? winner = botChoice : winner = userChoice


if(winner == 'rock'){
  loser1 = 'paper';
  loser2 = 'scissors'
}
else if(winner == 'paper'){
  loser1 = 'rock'
  loser2 = 'scissors'
}
else{
  loser1 = 'rock'
  loser2 = 'paper'
}
let returnObj = {
  winner: true,
  loser1: false,
  loser2: false
}