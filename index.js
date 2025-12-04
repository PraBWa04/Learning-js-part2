const state = ["a", "b", "c"];

function saveState() {
  localStorage.setItem("state", JSON.stringify(state));
}

function loadState() {
  const data = localStorage.getItem("state");
  return data ? JSON.parse(data) : [];
}

saveState();
console.log("LOADED:", loadState());

// const tasks = [];

// function render() {
//   console.clear();
//   tasks.forEach((t, i) => {
//     console.log(`${i + 1}. ${t.text} - ${t.done ? "DONE" : "TODO"}`);
//   });
// }

// function addTask(text) {
//   tasks.push({ text, done: false });
//   render();
// }

// function toggleTask(i) {
//   tasks[i].done = !tasks[i].done;
//   render();
// }

// function removeTask(i) {
//   tasks.splice(i, 1);
//   render();
// }

// addTask("Встати");
// addTask("Піти в зал");
// toggleTask(1);
// removeTask(0);

// const taskInputEl = document.querySelector("#task-input");
// const addBtn = document.querySelector("#add-btn");
// const taskListEl = document.querySelector("#task-list");

// const tasks = [];

// // 1. Функція, яка малює список з масиву
// function renderTasks() {
//   taskListEl.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = task.done;

//     const textSpan = document.createElement("span");
//     textSpan.textContent = task.text;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";

//     li.appendChild(checkbox);
//     li.appendChild(textSpan);
//     li.appendChild(deleteBtn);

//     if (task.done) {
//       li.classList.add("done");
//     }

//     checkbox.addEventListener("change", () => {
//       task.done = checkbox.checked;
//       renderTasks();
//     });

//     deleteBtn.addEventListener("click", () => {
//       tasks.splice(index, 1);
//       renderTasks();
//     });

//     taskListEl.appendChild(li);
//   });
// }

// // 2. Обробник кнопки Add
// addBtn.addEventListener("click", () => {
//   const input = taskInputEl.value;

//   if (input.trim() === "") return;

//   tasks.push({
//     text: input,
//     done: false,
//   });

//   taskInputEl.value = "";
//   taskInputEl.focus();

//   renderTasks();
// });

// const countEl = document.querySelector("#count");
// const plusBtn = document.querySelector("#plus");
// const resetBtn = document.querySelector("#reset");

// let count = 0;

// plusBtn.addEventListener("click", () => {
//   count++;
//   countEl.textContent = count;
// });

// resetBtn.addEventListener("click", () => {
//   count = 0;
//   countEl.textContent = count;
// });

// const toggleBtn = document.querySelector("#toggle");
// const detailsEl = document.querySelector("#details");

// toggleBtn.addEventListener("click", () => {
//   if (detailsEl.style.display === "none" || detailsEl.style.display === "") {
//     detailsEl.style.display = "block";
//     toggleBtn.textContent = "Сховати деталі";
//   } else {
//     detailsEl.style.display = "none";
//     toggleBtn.textContent = "Показати деталі";
//   }
// });

// const statusEl = document.querySelector("#status");
// const toggleBtn = document.querySelector("#toggle");

// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   if (document.body.classList.contains("dark")) {
//     statusEl.textContent = "dark";
//   } else {
//     statusEl.textContent = "white";
//   }
// });

// const numberEl = document.querySelector("#number");
// const randomBtn = document.querySelector("#random");

// randomBtn.addEventListener("click", () => {
//   const randomValue = Math.floor(Math.random() * 100) + 1;
//   numberEl.textContent = randomValue;
// });

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
