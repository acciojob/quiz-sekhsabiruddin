obj = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let submit = document.getElementById("submit");
let question = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");

// let a = document.getElementById("a");
// let b = document.getElementById("b");
// let c = document.getElementById("c");
// let d = document.getElementById("d");

let marks = 0;
var questionTracker = 0;
submit.addEventListener("click", () => {
  var ele = document.querySelector('input[name="option"]:checked');
  if (ele.id == obj[questionTracker].correct) {
    marks++;
  }
  questionTracker++;

  ele.checked = false;
  if (obj.length > questionTracker) {
    displayQuestion(questionTracker);
  } else {
    question.innerHTML = `You ansered ${marks}/4 questions correctly`;
    let option_box = document.getElementById("option-box");
    option_box.style.cssText = "display: none;";
  }
});

function displayQuestion(questionTracker) {
  //it use for showing the qustion
  question.innerHTML = obj[questionTracker].question;
  a_text.innerHTML = obj[questionTracker].a;
  b_text.innerHTML = obj[questionTracker].b;
  c_text.innerHTML = obj[questionTracker].c;
  d_text.innerHTML = obj[questionTracker].d;
}

let btn = document.getElementById("startBtn");
let quz = document.getElementById("quiz");
btn.addEventListener("click", () => {
  quz.style.cssText = "display: block;";
  btn.style.cssText = "display: none;";

  displayQuestion(questionTracker);
});

// https://tally.so/r/3xV96r?email=piyush@acciojob.com
