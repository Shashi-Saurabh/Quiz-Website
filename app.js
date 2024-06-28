const questions=[
    {
        question:"Which of the below is the abbreviation of CSS ?",
        answer:[
            { text:'Color ad style sheets',correct:false},
            { text:'Cascading style sheets',correct:true},
            { text:'Cascade sheets style',correct:false},
            { text:'Coded style sheet',correct:false},
        ]
    },
    {
        question:"Which element is used to represent the transparency of an element in CSS ?",
        answer:[
            { text:'Hover',correct:false},
            { text:'Transparent',correct:false},
            { text:'Overlay',correct:false},
            { text:'Opacity',correct:true},
        ]
    },
    {
        question:"Which of the below is the correct syntax to put a line over text in CSS?",
        answer:[
            { text:'text-decoration: line',correct:false},
            { text:'text-decoration: none',correct:false},
            { text:'text-decoration: overline',correct:true},
            { text:'text-decoration: underline',correct:false},
        ]
    },
    {
        question:"Which below property of CSS is used to set the indentation of the first line in a block of text ?",
        answer:[
            { text:'text-indent property',correct:true},
            { text:'text-underlne-property',correct:false},
            { text:'text-decoration none',correct:false},
            { text:'text-overflow property',correct:false},
        ]
    },
    {
        question:"Which of the below CSS properties is used to change the background color of CSS ?",
        answer:[
            { text:'bg color',correct:false},
            { text:'color-background',correct:false},
            { text:'background-color',correct:true},
            { text:'color',correct:false},
        ]
    },
];
const ques=document.querySelector("#question");
const ansBtns=document.querySelector("#answer-buttons");
const nxtBtn=document.querySelector("#next-btn");

let currQuestionIdx=0;
let score=0;
function startQuiz(){
    currQuestionIdx=0;
    score=0;
    nxtBtn.innerHTML='Next';
    showQuestion();
}
function showQuestion(){
    resetState();
    let currQuestion=questions[currQuestionIdx];
    let quesNo=currQuestionIdx+1;
    ques.innerHTML=quesNo+'.'+currQuestion.question;

    currQuestion.answer.forEach(answer=>{
        const button =document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        ansBtns.appendChild(button);
        if(answer.correct)
            {
                button.dataset.correct=answer.correct;
            }
        button.addEventListener('click',selectAnswer);
    })
}
function resetState(){
    nxtBtn.style.display='none';
    while(ansBtns.firstChild)
        {
            ansBtns.removeChild(ansBtns.firstChild);
        }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==='true';
    if(isCorrect)
        {
            selectedBtn.classList.add('correct');
            score++;
        }
    else
    {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(ansBtns.children).forEach(button=>{
        if(button.dataset.correct==='true')
            {
                button.classList.add('correct');
            }
            button.disabled=true;
    });
    nxtBtn.style.display='block';
}

function showScore(){
    resetState();
    ques.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nxtBtn.innerHTML='Play Again';
    nxtBtn.style.display='block';
}

function handleNextButton(){
    currQuestionIdx++;
    if(currQuestionIdx<questions.length)
        {
            showQuestion();
        }
        else
        {
            showScore();
        }
}

nxtBtn.addEventListener('click',()=>{
    if(currQuestionIdx<questions.length){
        handleNextButton();

    }
    else
    {
        startQuiz();
    }
})

startQuiz();


