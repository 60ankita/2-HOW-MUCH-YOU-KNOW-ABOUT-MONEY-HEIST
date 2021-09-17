var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var userName = readlineSync.question(chalk.bold.rgb(255, 51, 204)("May i have your name? "));
console.log(chalk.magenta(chalk.bold.rgb(255, 255, 0)("Welcome " + userName + " Lets see how much you know about ")) + '\n',   chalk.bold.underline.rgb(0, 204, 0)("\t\t\t💸💸💸Money Heist!💸💸💸"));

console.log(chalk.bgRed(chalk.bold.black('\n',"RULES :-" , '\n' , "1) Total Number of Question 10 ." ,'\n' ,"2) Every Right Answer You will get +1 ." , '\n' , "3) There is no Negative marks.")));



var highScores = [{
  name : "Ankita" ,
  score : 10
}]


var queBank = [
    {
        question: `
    Q1) What was the Professor real name ?
    a: Ricardo Ramos
    b: Sergio Marquina
    c: Andres de Fonollosa
    d: Agustin Ramos \n`,

    answer: "b"
    },
    {
    question: `
    Q2) Who planned the Bank of Spain heist?
    a: The Professor father
    b: the Professor
    c: Palermo
    d: Berlin\n`,
    answer: "d"
    },{
    question :`
    Q3) What was the relation between Berlin and The Professor?
    a: Best Friend
    b: Friend's Brother
    c: Real Brother
    d: Lovers \n`,
    answer: "c"
    },{
    question :`
    Q4) Where did Raquel find The Professor after the first heist?
    a: Sri Lanka
    b: Maldives
    c: Indonesia
    d: Thailand\n`,
    answer: "d"
    },{
    question :`
    Q5) Which disease does Raquel's mother had?
    a: Parkinson's disease
    b: Alzheimer's disease
    c: Huntington's disease
    d: Congestive heart failure\n`,
    answer: "b"
    },{
    question :`
    Q6) Who was Gandia?
    a: Hostage
    b: Robber
    c: S.W.A.T
    d: Personal Security Guard\n`,
    answer: "d"
    },{
    question :`
    Q7) With whom does Berlin get married?
    a: Nairobi
    b: Tatiana
    c: Ariadna
    d: Palermo\n`,
    answer: "b"
    },{
    question :`
    Q8) What was the name of Stockholm's son?
    a: Ohio
    b: Miami
    c: Cincinnati
    d: Lisbon\n`,
    answer: "c"
    },{
    question :`
    Q9) How many robbers died till the 2nd heist?
    a: Three
    b: Four 
    c: Five
    d: Six\n`,
    answer: "b"
    },{
    question :`
    Q10) How does Professor tell Raquel that he knows she is alive?
    a: He sent a letter to her.
    b: He calls her.
    c: He surrender himself.
    d: He sent his watch.\n`,
    answer: "d"
    }];





    function play(question , correctAns){
      var userAns = readlineSync.question(question);

      if(userAns === correctAns){
        console.log(chalk.bold.rgb(255, 255, 0)("You are right"));
        score = score + 1;
        console.log(chalk.bold.rgb(0, 255, 0)("Correct! Nice😊😊"));
      }else{
        console.log(chalk.bold.rgb(255, 0, 0)(" You are wrong 😞😞"));
      }
      console.log(chalk.bold.rgb(193, 70, 255)("score is: ") , chalk.bold.rgb(204, 255, 204)(score));
      console.log(chalk.bold.rgb(0, 240, 222)("----------------------------------------------------------------------------------------------"));
    }
  




     for(var i=0 ; i<queBank.length;i++){
      var currentQuestion=queBank[i];
      var check=play(chalk.bold.rgb(0, 0, 255)(currentQuestion.question) , currentQuestion.answer);
    }
    //console.log(chalk.bold.rgb(255, 153, 153)("WOW") , score);

    function showScores() {
  console.log(chalk.red.bold("\t\t\t\t FINAL SCORE IS:") + score);
  console.log(chalk.bold.rgb(0, 240, 222)("------------------------------------------------------------------------------------------------------"));
  console.log('\n' ,"✨✨✨✨✨✨✨✨✨✨✨✨✨" ,chalk.greenBright.bold("THANKS FOR PLAYING"),"✨✨✨✨✨✨✨✨✨✨");
  console.log(chalk.bold.rgb(255, 51, 204)("Check out the high scores, if you should be there take screenshot and send , I'll update it"));

  highScores.map(score => console.log(score.name, " : ", score.score));
}

showScores();