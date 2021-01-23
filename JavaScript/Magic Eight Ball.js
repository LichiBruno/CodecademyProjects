// fill 'userName' with your name
let userName ='Lichi';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
// write your question here
let userQuestion ='Yes, here';
console.log(`${userName} asked: "${userQuestion}"`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall ='';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
  break;
  case 1:
    eightBall = 'It is decidedly so';
  break;
  case 2:
    eightBall = 'Reply haz try again';
  break;
  case 3:
    eightBall = 'Cannot predict now';
  break;
  case 4:
    eightBall = 'Do not count on it';
  break;
  case 5:
    eightBall = 'My sources say no';
  break;
  case 6:
    eightBall = 'Outlook not so good';
  break;
  case 7:
    eightBall = 'Pedazo de puto';
}
console.log(`The eight ball answered: ${eightBall}`); 