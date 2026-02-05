const intro = document.getElementById("intro");
const app = document.getElementById("app");
const finalScreen = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionEl = document.getElementById("question");
const subText = document.getElementById("subText");
const music = document.getElementById("bgMusic");
const finalImg = document.getElementById("finalImg");

const questions = [
  {
    text: "Do you like surprises? 😏",
    yes: "Obviously 😎",
    sub: "Because I may have one right now…",
  },
  {
    text: "Do I make you smile? 😊",
    yes: "Always 💕",
    sub: "Even on your bad days",
  },
  {
    text: "Can you imagine growing old with me? 👵👴",
    yes: "I already do 🥺",
    sub: "Wrinkles, laughs & endless memories",
  },
  {
    text: "Will you hold my hand forever? 🤝",
    yes: "Never letting go ❤️",
    sub: "Through everything",
  },
  {
    text: "So… will you marry me? 💍❤️",
    yes: "YESSS 😭💍",
    sub: "This is me asking with all my heart",
  },
];

let current = 0;

/* INTRO */
startBtn.addEventListener("click", () => {
  music.play();
  intro.classList.remove("active");
  app.classList.add("active");
  showQuestion();
});

/* SHOW QUESTION */
function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.text;
  yesBtn.textContent = q.yes;
  subText.textContent = q.sub;

  yesBtn.classList.remove("pulse");

  if (current === questions.length - 1) {
    noBtn.style.display = "block";
    yesBtn.classList.add("pulse");
  } else {
    noBtn.style.display = "none";
  }
}

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    app.classList.remove("active");
    finalScreen.classList.add("active");
    finalImg.src = "assets/yes.JPG";
    launchConfetti();
  }
});

/* NO BUTTON ESCAPES 😈 */
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* CONFETTI 🎉 */
function launchConfetti() {
  import("https://cdn.skypack.dev/canvas-confetti").then((module) => {
    module.default({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
    });
  });
}
