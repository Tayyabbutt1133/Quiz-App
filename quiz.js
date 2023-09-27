const { array } = require("yargs");

const questions = [
    {
        question: "What is the full form of HTML?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Makeup Language", correct: false },
            { text: "Hyper Tuff Markeup Language", correct: false },
            { text: "Hypo Text Mark Language", correct: false }
        ]
    },
    {
        question: "What we use Javascript?",
        answers: [
            { text: "To style a webpage", correct: false },
            { text: "To make a webpage interactive", correct: true },
            { text: "To make a webpage beautiful", correct: false },
            { text: "To make a webpage ugly", correct: false }
        ]
    },
    {
        question: "Css is the short form of?",
        answers: [
            { text: "Cascading Style Sheet", correct: true },
            { text: "Cascading Style Sheep", correct: false },
            { text: "Cascading Style Sheet", correct: false },
            { text: "Cascading Style Sheet", correct: false }
        ]
    }
    ,
    {
        question: "What is the frontend developer role?",
        answers: [
            { text: "To make a webpage interactive", correct: false },
            { text: "To make a webpage beautiful", correct: true },
            { text: "To make a webpage ugly", correct: false },
            { text: "To make a webpage interactive", correct: false }
        ]
    }
]

// we are accessing the question div and setting the innerHTML to the first question
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    //Function calling 
    Showquestions();
}
function Showquestions() {
    let currentquestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentquestion.question;
    answerElement.innerHTML = "";

    currentquestion.answers.forEach((answers) => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
    }
    else {
        selectedBtn.classList.add("Incorrect");
    }
//     array.from(answerButtons.children).forEach(button =>{
//            if(button.dataset.correct=== "true")
//            {
//                button.classList.add("correct");
//            }
//            button.disabled=true;
//          });
//    nextButton.style.display="block";
}

//Function calling
startQuiz();






