const quizData = [
    {
        question: 'How many time zones are there in Russia ?',
        a: '8',
        b: '11',
        c: '10',
        d: '9',
        correct: 'b'
    },
    {
        question: 'Name the longest river in the World',
        a: 'Amazon river',
        b: 'Yellow river',
        c: 'Nile river',
        d: 'Ganges river',
        correct: 'c'
    },
    {
        question: 'How many keys does a classic piano have ?',
        a: '88',
        b: '77',
        c: '66',
        d: '55',
        correct: 'a'
    },
    {
        question: 'When was Netflix founded?',
        a: '1995',
        b: '1997',
        c: '2000',
        d: '2002',
        correct: 'b'
    },
    {
        question: 'What was the most watched series on Netflix in 2019 ?',
        a: 'The Society',
        b: 'The Witcher',
        c: 'Another life',
        d: 'Stranger Things',
        correct: 'd'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");



const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;    
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



submitBtn.addEventListener ("click", () => {
    //check to see the answer
    
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct ){
            score++;
        }
        currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else {
               quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} question .</h2>`;
            }
    } 
});