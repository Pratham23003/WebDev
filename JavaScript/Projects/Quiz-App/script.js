////get DOM Elements
//main screens
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
//btns
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
//question text i.e where the question goes
const questionText = document.getElementById('question-text');
//quiz screen spans
let currentQuestionSpan = document.getElementById('current-question');
let totalQuestionsSpan = document.getElementById('total-questions');
let scoreSpan = document.getElementById('score');
//result screen spans
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
//progress bar
const progressBar = document.getElementById('progress');
//others
const answersContainer = document.getElementById('answers-container');
const resultMessage = document.getElementById('result-message');

// //temp
// const screen = document.querySelector('#start-screen');

// quiz Questions
const quizQuestions = [
    {
        question: "What is the capital of Japan?",
        answers: [
            {text: "Seoul", correct: false},
            {text: "Beijing", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Bangkok", correct: false}
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Venus", correct: false}
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "HyperText Markup Language", correct: true},
            {text: "Hyperlinks and Text Markup Language", correct: false},
            {text: "Home Tool Markup Language", correct: false},
            {text: "HyperText Markdown Language", correct: false}
        ]
    },
    {
        question: "Which of these is NOT a JavaScript framework?",
        answers: [
            {text: "React", correct: false},
            {text: "Angular", correct: false},
            {text: "Vue", correct: false},
            {text: "Django", correct: true} // Django is a Python framework
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ]
    },
    {
        question: "What keyword is used to declare a constant in JavaScript?",
        answers: [
            {text: "var", correct: false},
            {text: "let", correct: false},
            {text: "const", correct: true},
            {text: "static", correct: false}
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            {text: "background-color", correct: false},
            {text: "font-color", correct: false},
            {text: "color", correct: true},
            {text: "text-style", correct: false}
        ]
    }
];

//quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
//total questions = length of the array (quizQuestions)
totalQuestionsSpan.textContent = (quizQuestions.length);
maxScoreSpan.textContent = (quizQuestions.length);

////event listeners
//this piece of code switches to the next screen when start button is clicked
const startQuiz = startButton.addEventListener('click', (event) => {
    //reset variables
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    console.log("Quiz Started");
    alert("Quiz Starts Now");

    console.log("Before Removing :",startScreen.classList);
    console.log("Removing Now: ");
    startScreen.classList.remove("active");
    console.log(startScreen.classList);
    
    
    quizScreen.classList.add("active");
    console.log(quizScreen.classList);
    // quizScreen.classList.add('active');
});
//showquestions 
function showQuestions(){
    answersDisabled = 0;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    console.log(currentQuestion);
    currentQuestionSpan.textContent = currentQuestionIndex+1;
    //update progress bar
    const progressPercent = (currentQuestionIndex / (quizQuestions.length))*100;
    progressBar.style.width = (progressPercent + "%"); //if the progressPercent = 50 then width will be set as 50%
    //update Question Text 
    questionText.textContent = currentQuestion.question;
    //this will clear the questions on the next go.
    answersContainer.innerHTML = " ";
    //print the answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    })
}
showQuestions();
function selectAnswer(event){
    if(answersDisabled) return

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        else if(button === selectedButton)
        {
            button.classList.add("incorrect");
        }
    })

    //update the score if correct
    if(isCorrect){
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        //check if there are more questions or if the quiz is over
        if(currentQuestionIndex < quizQuestions.length){
            showQuestions();
        }
        else{
            showResults();
        }
    },1000);

}

function showResults(){
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    
    finalScoreSpan.textContent = score;
    const percentage = (score/quizQuestions.length) * 100;

    if(percentage === 100) {
        resultMessage.textContent = "Perfect! You're an expert.";
    }
    else if(percentage >= 80){
        resultMessage.textContent = "Good Effort! Keep Learning";
    }
    else if(percentage >= 60){
        resultMessage.textContent = "Not Bad! Try again to improve!";
    }
    else{
        resultMessage.textContent = "Keep Studying! You'll get better!";
    }
}
function restartQuiz(){
    console.log("Quiz Restarted!");
    res.addEventListener("click",(event) =>{
        console.log(event.target);
        resultScreen.classList.remove("active");
    })
}
