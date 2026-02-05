const intro = document.getElementById("intro");
const app = document.getElementById("app");
const finalScreen = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionEl = document.getElementById("question");
const music = document.getElementById("bgMusic");
const finalImg = document.getElementById("finalImg");

const questions = [
  "Do you like surprises? 😏",
  "Do I make you smile? 😊",
  "Can you imagine growing old with me? 👵👴",
  "Will you hold my hand forever? 🤝",
  "So… will you marry me? 💍❤️"
];

let current = 0;

// INTRO BUTTON
startBtn.addEventListener("click", () => {
  music.play();
  intro.classList.remove("active");
  app.classList.add("active");
  showQuestion();
});

// SHOW QUESTIONS
function showQuestion() {
  questionEl.textContent = questions[current];

  if (current === questions.length - 1) {
    noBtn.style.display = "block";
  } else {
    noBtn.style.display = "none";
  }
}

// YES CLICK
yesBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    app.classList.remove("active");
    finalScreen.classList.add("active");
    finalImg.src = "assets/yes.JPG";
    confetti();
  }
});

// NO BUTTON RUNS AWAY 😈
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// CONFETTI 🎉
function confetti() {
  import("https://cdn.skypack.dev/canvas-confetti").then(module => {
    module.default({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 }
    });
  });
}
