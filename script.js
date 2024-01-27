// theres a bug i cant figure out at the last minute so im waiting until tomorrow 
// to fix it with the instructors because im pretty sure i am only missing one thing



let questions = [
  {question: 'What’s the diameter of a basketball hoop in inches?',
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
answer: 'the philippines'}

]


let questionDom = document.querySelector(".questions")


// selects a question
function getRandomQuestion(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

// 
let randomQuestionsPair = getRandomQuestions(questions);
console.log('random question', randomQuestionsPair.questions)
console.log('random answer', randomQuestionsPair.answer)


let randomQuestionsDom = function(){
  return questionsDom.innerHTML = `<h1>${questionsPair.questions}</h1>`
}
// randomQuestionDom(); // BUG


let userAnswer = document.querySelector('#answers');
document.querySelector('.sub').addEventListener('click', function(){

  if (userAnswer.value.toLowerCase() == questionsPair.answer) {
    console.log('you got it')
    userAnswer.value = '';
    document.querySelector('.winner').textContent = 'you are right';
  
  } else {

    console.log(`try again`)
    document.querySelector('.winner').textContent = 'you are wrong'
  
  }
})


