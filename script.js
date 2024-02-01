let questions = [
  {question: 'what’s the diameter of a basketball hoop in inches?',
    answer: '18 inches'},
    {question: 'The Olympics are held every how many years?',
    answer: '4 years'},
    {question: 'What sport is best known as the ‘king of sports?',
answer: 'soccer'},
{question: 'What’s the national sport of Canada?',
answer: 'lacrosse'},
{question: 'How many dimples does an average golf ball have?',
answer: '336'},
{question: 'What country has competed the most times in the Summer Olympics yet hasn’t won a gold medal?', 
answer: 'the philippines'},
{question: 'In motor racing, what color is the flag they wave to indicate the winner?',
answer: 'Checkered flag'},
{question: 'How many holes are played in an average round of golf?',
answer: '18'},
{question: 'What color are the goalposts in football?',
answer: 'Yellow'},
{question: 'How long is a marathon?',
answer: '26.2 miles'},
{question: 'In what game is “love” a score?',
answer: 'Tennis'},
{question: 'What sport is a lot like softball?',
answer: 'Baseball'},
{question: 'In meters, how big is an Olympic-sized swimming pool?',
answer: '50 meters long and 25 meters wide'},
{question: 'In football, how many points does a touchdown hold?',
answer: '6 points'},
{question: 'How many players are on a baseball team?',
answer: '9 players'},
{question: ' In soccer, what body part can’t touch the ball?',
answer: 'Hands'},
{question: 'What sporting equipment is used for striking a tennis ball?',
 answer: 'Tennis racquet'},
{question: 'Which sport uses a net, a racket, and a shuttlecock?',
answer: 'Badminton'},
{question: 'Which of the following sports does not use a ball? Golf, tennis, hockey, or polo?',
answer: 'Hockey'},
{question: 'What type of race is the Tour de France?',
answer: 'Bicycle race'},
{question: 'How many sports were included in the 2008 Summer Olympics?',
answer: '28'},
{question: 'A sporting event is held every year on Memorial Day. What is it?',
answer: 'Indianapolis 500'},
{question: 'What number sets to the right of the number ‘20’ on a standard dartboard?',
answer: '1'},
{question: 'In what year were women allowed to compete in the modern Olympic games and in what sport?',
answer: '1900, tennis'},
{question: 'Basketball player, Scottie Pippen, has a word tattooed on his forearm. What does it say?',
answer: 'Pip'},
{question: 'What sport is Bela Karolyi known for coaching?',
answer: 'Women’s gymnastics'},
{question: 'What is the only sport to be played on the moon?',
answer: 'A round of golf'},
{question: 'How old was Tiger Woods when he won the Masters?',
answer: '21'},
{question: 'In which winter sport are the terms “stale fish” and “mule kick” used?',
answer: 'Snowboarding'},
{question: 'How long is the free skate in figure skating?',
answer: 'Four and a half minutes for men, four minutes for women'},
{question: 'Who was the first president to throw the ceremonial first pitch at a Major League Baseball game?',
answer: 'William Howard Taft'},
{question: 'How many minutes was the longest recorded point in the history of tennis?',
answer: '29 minutes'},
{question: 'During the first-ever modern Olympics, what were the first placers awarded with?',
answer: 'Silver medals'},
{question: 'How many Olympic games were held in countries that no longer exist?',
answer: '3'},
{question: 'What NFL team was originally called the ‘New York Titans’?',
answer: 'The New York Jets'},
{question: 'What is the only team in the NFL to neither host nor play in the Super Bowl?',
answer: 'Cleveland Browns'},
{question: 'How much does an NFL football weigh?',
answer: '1 pound'},
{question: 'This player was the first-ever openly gay person to be drafted by an NFL team. What was his name?',
answer: 'Michael Sam'},
{question: 'What NFL team lost the first Super Bowl in 1970',
answer: 'Minnesota Vikings'},
{question: 'What team is considered the oldest in the NFL?',
answer: 'Green Bay Packers'},
{question: 'What team won 3 Super Bowls in the 1990s?',
answer: 'The Dallas Cowboys'},
{question: 'What team won the very first NBA game in 1946?',
answer: 'The New York Knicks'},
{question: 'Who was the first WNBA player to dunk in a playoff game?',
answer: 'Brittney Griner'},
{question: 'Who was the first NBA player to test positive for COVID-19?',
answer: 'Rudy Gobert'},
{question: 'Who was the first NBA player to shatter a backboard?',
answer: 'Chuck Connors'},
{question: 'What material was first used to cover baseballs?',
answer: 'Cowhide'},
{question: 'What team gets the advantage of the first bat?',
answer: 'The visiting team'},
{question: 'What female pitcher once struck out Babe Ruth and Lou Gehrig?',
answer: 'Jackie Mitchell'},
{question: 'What is the most stolen base?',
answer: 'Second base'},
{question: 'What are the Minnesota Twins named after?',
answer: 'The Twin Cities'},
{question: ' What is a soccer field called?',
answer: 'A pitch'}
]

let questionDom = document.querySelector(".questions")



// selects a question
function getRandomQuestion(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

// random queston and answer pairs
let randomQuestionsPair = getRandomQuestion(questions);
console.log('random question', randomQuestionsPair.question);
console.log('random answer', randomQuestionsPair.answer);

// questionDom.innerHTML = `<h1>${randomQuestionsPair.question}</h1>`


let randomQuestionsDom = function(randomQuestionsPair){
  // generating question in DOM: web page
  return questionDom.innerHTML = `<h1>${randomQuestionsPair.question}</h1>`
}
 randomQuestionsDom(randomQuestionsPair); 

 let score = 0;

// submit button that will either show right or wrong
const gameAnswer = document.querySelector('#answers');

const submit = document.querySelector('.sub');
submit.addEventListener('click', function() {

  console.log(`///////////////////`)





  // shows if the player is right
 if (gameAnswer.value.toLowerCase() == randomQuestionsPair.answer.toLowerCase()) {
  
score ++

  document.querySelector('.winner').textContent = `Yay you are right!!`;

// else if the player is wrong
 } else {
  console.log('try again')
  document.querySelector('.winner').textContent = `try again`;

 }


 randomQuestionsPair = getRandomQuestion(questions) 
randomQuestionsDom(randomQuestionsPair);


})

// submit.addEventListener('click', randomQuestionsDom)

// let userAnswer = document.querySelector('#answers');
// document.querySelector('.sub').addEventListener('click', function(){

//   if (userAnswer.value.toLowerCase() == questionsPair.answer) {
//     console.log('You got it!')
//     userAnswer.value = '';
//     document.querySelector('.winner').textContent = 'You are right!';
  
//   } else {

//     console.log(`Try again`)
//     document.querySelector('.winner').textContent = 'You are wrong'
  
//   }
// })

