// storing all the questions and answers in an Array

const quizDB = [
    {
        question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
        a: "2005",
        b: "2008",
        c: "2010",
        d: "2012",
        correct: "ans2",
    },
    {
        question: "What is the name of Thor's hammer?",
        a: "Vanir",
        b: "Mjolnir",
        c: "Aesir",
        d: "Norn",
        correct: "ans2",
    },
    {
        question: "What is Captain America's shield made of?",
        a: "Adamantium",
        b: "Vibranium",
        c: "Promethium",
        d: "Carbonadium",
        correct: "ans2",
    },
    {
        question: " Before becoming Vision, what is the name of Iron Man's A.I. butler?",
        a: "H.O.M.E.R.",
        b: "J.A.R.V.I.S.",
        c: "A.L.F.R.E.D.",
        d: "M.A.R.V.I.N.",
        correct: "ans2",
    },
    {
        question: "What type of doctor is Stephen Strange?",
        a: "Neurosurgeon",
        b: "Cardiothoracic Surgeon",
        c: "Trauma Surgeon",
        d: "Plastic Surgeon",
        correct: "ans1",
    },
    {
        question: "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
        a: "Thor",
        b: "Loki",
        c: "The Collector",
        d: "Tony Stark",
        correct: "ans2",
    },

];


// Initializing all the variables or defining the refrences

const quiz= document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questions = document.getElementById('question')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const submit = document.getElementById('submit')
const winSound= document.getElementById('sound1')
const lostSound= document.getElementById('sound2')
const countSound= document.getElementById('sound3')
let questionCount = 0
let score = 0;

// setting the timer
var count = 31;
console.log(count);
var interval = setInterval(function(){
count--;
countSound.play();
document.getElementById('count').innerHTML="Remaining Time: "+count;
if (count < 0 ){
    lostSound.play();
    clearInterval(interval);
    alert("You ran out of TIME...!");
    document.getElementById('count').innerHTML='Not so easy to win Marvel Super-Fan🏆Award🏆, TRY AGAIN...!';
    clearInterval(interval) 
    submit.style.display="none"
}
  
else if(score==quizDB.length){
    clearInterval(interval)
    winSound.play()
    document.getElementById('count').innerHTML='You have WON Marvel Super-Fan🏆Award🏆';
    quiz.innerHTML = `
    <h2 style="color:chartreuse">You have answered ${score}/${quizDB.length} questions correctly</h2>
 
    
    <button onclick="location.reload()">Reload</button>
    `
    }
}, 1200);


// storing the questions and options
function loadQuiz() {

    const questionList = quizDB[questionCount]

    questions.innerText = questionList.question
    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d

    deselectAnswers()
}

// Calling the loadQuiz Function
loadQuiz()

function deselectAnswers() {
    answers.forEach(currentAns => currentAns.checked = false)
}

// defining the function getSelected

function getSelected() {
    let answer
    answers.forEach(currentAns => {
        if(currentAns.checked) {
            
            // storing the currentAns id in answer variabale
            answer = currentAns.id
        }
    })
    return answer
}

// collecting the data or the answer from the user when the answer has been submitted by clicking sybmit button

submit.addEventListener('click', () => {
    const answer = getSelected()

    // checking the answer id is matching with the actual answers

    if(answer) {
       if(answer === quizDB[questionCount].correct) {
           score++
       }

    // incrementing the scores and questions respectively

       questionCount++

       if(questionCount < quizDB.length) {
           loadQuiz()
        } 
       else {
           quiz.innerHTML = `
           <h2 style="color:white">You have answered ${score}/${quizDB.length} questions correctly.</h2>
        
           
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
    
})

// reload2 button
function reload2()
{
    location.href="./quiz.html";
}