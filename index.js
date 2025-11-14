const numberEl = document.querySelector("#number");
const randomBtn = document.querySelector("#random");

randomBtn.addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 100) + 1;
  numberEl.textContent = randomValue;
});

// const textBtn = document.querySelector("#text");
// const changeBtn = document.querySelector("#change");

// changeBtn.addEventListener("click", () => {
//   textBtn.textContent = "я прокинувся";
// });

// console.log(textBtn);

// let count = 0;
// let history = [];

// console.log(count);
// console.log(history);

// const countEl = document.querySelector("#count");
// const incBtn = document.querySelector("#inc");
// const decBtn = document.querySelector("#dec");
// const resetBtn = document.querySelector("#reset");
// const historyEl = document.querySelector("#history");
// const clearHistoryBtn = document.querySelector("#clearHistory");

// function renderHistory() {
//   historyEl.innerHTML = "";
//   history.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     historyEl.appendChild(li);
//   });
// }

// console.log(countEl, incBtn, decBtn, resetBtn, historyEl, clearHistoryBtn);

// incBtn.addEventListener("click", () => {
//   count++;
//   countEl.textContent = count;
//   history.push(`+1 → ${count}`);
//   renderHistory();
// });

// const Elcount = document.querySelector("#count");
// const incBtn = document.querySelector("#inc");
// const decBtn = document.querySelector("#dec");
// const resetBtn = document.querySelector("#reset");

// let value = 0;

// function updateDisplay() {
//   Elcount.textContent = value;
// }
// incBtn.addEventListener("click", () => {
//   value += 1;
//   updateDisplay();
// });

// decBtn.addEventListener("click", () => {
//   value -= 1;
//   updateDisplay();
// });

// resetBtn.addEventListener("click", () => {
//   value = 0;
//   updateDisplay();
// });

// const userInput = document.querySelector("#userInput");
// const greetBtn = document.querySelector("#greetBtn");
// const output = document.querySelector("#output");

// userInput.addEventListener("click", () => {
//   userInput.value = "";
// });

// greetBtn.addEventListener("click", () => {
//   const name = userInput.value.trim();

//   if (!name) {
//     alert("Input value!");
//   } else {
//     output.textContent = `Hello, ${name}!`;
//     output.style.color = "green";
//   }
// });

// const clickButton = document.querySelector("#clickBtn");
// const message = document.querySelector("#message");

// clickButton.addEventListener("click", () => {
//   message.style.color = "green";
//   message.textContent = "зміна тексту";
// });

// const box = document.querySelector("#box");

// function getRandomColor() {
//   const r = Math.floot(Math.random() * 256);
//   const g = Math.floot(Math.random() * 256);
//   const b = Math.floot(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// box.addEventListener("mouseover", () => {
//   box.style.backgroundColor = getRandomColor();
// });

// box.addEventListener("mouseout", () => {
//   box.style.backgroundColor = "lightgray";
// });
