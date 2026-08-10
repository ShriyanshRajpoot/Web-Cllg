// Random Quote Generator

const quotes = ["JavaScript is the duct tape of the Internet.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "In JavaScript, truth can be stranger than fiction.",
  "First, solve the problem. Then, write the code.",
  "JavaScript: where undefined is not an error, it’s a feature.",
  "Programming isn’t about typing, it’s about thinking.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "JavaScript is everywhere—love it or hate it.",
  "Don’t just code, craft.",
  "Debugging is like being the detective in a crime movie where you are also the murderer.",
  "Simplicity is the soul of efficiency.",
  "JavaScript teaches patience through async/await.",
  "Code is poetry written in logic.",
  "The best error message is the one that never shows up.",
  "JavaScript: turning coffee into web apps since 1995.",
  "Good code is its own best documentation.",
  "Without bugs, programmers would be unemployed.",
  "JavaScript is proof that chaos can be structured.",
  "Every great developer you know got there by solving problems they didn’t know they could solve.",
  "Keep calm and console.log."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})