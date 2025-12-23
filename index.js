function validateForm(fields) {
  const errors = {};

  for (const key in fields) {
    if (!fields[key]) {
      errors[key] = "Required";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// function deepClone(value) {
//   if (value === null || typeof value !== "object") {
//     return value;
//   }

//   if (Array.isArray(value)) {
//     return value.map(deepClone);
//   }

//   const result = {};
//   for (const key in value) {
//     result[key] = deepClone(value[key]);
//   }

//   return result;
// }

// function groupBy(items, key) {
//   return items.reduce((result, item) => {
//     const groupKey = item[key];

//     if (!result[groupKey]) {
//       result[groupKey] = [];
//     }

//     result[groupKey].push(item);
//     return result;
//   }, {});
// }

// function throttle(fn, delay) {
//   let isThrottled = false;

//   return function (...args) {
//     if (isThrottled) return;

//     fn.apply(this, args);
//     isThrottled = true;

//     setTimeout(() => {
//       isThrottled = false;
//     }, delay);
//   };
// }

// function createTaskManager(initialTasks = []) {
//   let tasks = [...initialTasks];

//   function getAll() {
//     return [...tasks];
//   }

//   function addTask(text) {
//     tasks = [...tasks, { text, done: false }];
//   }

//   function toggleTask(index) {
//     tasks = tasks.map((task, i) =>
//       i === index ? { ...task, done: !task.done } : task
//     );
//   }

//   function removeTask(index) {
//     tasks = tasks.filter((_, i) => i !== index);
//   }

//   return {
//     getAll,
//     addTask,
//     toggleTask,
//     removeTask,
//   };
// }

// function paginate(items, page, pageSize) {
//   const start = (page - 1) * pageSize;
//   const end = start + pageSize;

//   return {
//     data: items.slice(start, end),
//     totalPages: Math.ceil(items.length / pageSize),
//     currentPage: page,
//   };
// }

// function debounce(fn, delay) {
//   let timeoutId;

//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// function findById(items, id) {
//   return items.find((item) => item.id === id) || null;
// }

// function calculateTotal(items) {
//   return items.reduce((total, item) => {
//     return total + item.price * item.quantity;
//   }, 0);
// }

// function toggleUserActive(users, index) {
//   return users.map((user, i) =>
//     i === index ? { ...user, active: !user.active } : user
//   );
// }

// const tasks = [
//   { text: "JS", done: false },
//   { text: "Gym", done: true },
//   { text: "React", done: false },
// ];

// function getDoneTasks(tasks) {
//   return tasks.filter((task) => task.done === true);
// }

// function getUndoneTasks(tasks) {
//   return tasks.filter((task) => task.done === false);
// }

// function toggleTask(tasks, index) {
//   return tasks.map((task, i) => {
//     if (i !== index) {
//       return task;
//     }

//     return {
//       ...task,
//       done: !task.done,
//     };
//   });
// }

// const updatedTasks = toggleTask(tasks, 1);

// console.log("Done:", getDoneTasks(tasks));
// console.log("Undone:", getUndoneTasks(tasks));
// console.log("Updated:", updatedTasks);
// console.log("Original (unchanged):", tasks);

// const users = [
//   { name: "Ivan", active: true },
//   { name: "Anna", active: false },
//   { name: "Oleh", active: true },
// ];

// function getActiveUsers(users) {
//   return users.filter((user) => user.active === true);
// }

// console.log(getActiveUsers(users));

// function countWords(text) {
//   return text.trim().split(/\s+/).length;
// }

// function formatPrice(value) {
//   return `${value.toFixed(2)} $`;
// }

// function findMax(numbers) {
//   return Math.max(...numbers);
// }

// function isArrayEmpty(arr) {
//   return Array.isArray(arr) && arr.length === 0;
// }

// function capitalize(word) {
//   if (!word) return "";
//   return word[0].toUpperCase() + word.slice(1);
// }

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers));

// function toggleFlag(value) {
//   return !value;
// }

// console.log(toggleFlag(true));
// console.log(toggleFlag(false));

// function countCompleted(tasks) {
//   return tasks.filter((task) => task.done).length;
// }

// const tasks = [
//   { text: "JS", done: true },
//   { text: "Gym", done: false },
//   { text: "React", done: true },
// ];

// console.log(countCompleted(tasks)); // 2

// export function getUserNames(users) {
//   return users.map(({ name }) => name);
// }

// const users = [{ name: "Ivan" }, { name: "Anna" }, { name: "Oleh" }];
// console.log(getUserNames(users));

// function fakeRequest(success = true) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       success ? resolve("OK") : reject("ERROR");
//     }, 500);
//   });
// }

// fakeRequest().then(console.log).catch(console.error);

// function sumPositive(numbers) {
//   return numbers.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
// }
// console.log(sumPositive([-2, 5, 3, -1, 4]));

// function isPositive(num) {
//   return num > 0;
// }

// console.log(isPositive(5));
// console.log(isPositive(-2));

// function saveValue(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// function loadValue(key) {
//   const raw = localStorage.getItem(key);
//   return raw === null ? null : JSON.parse(raw);
// }

// function removeValue(key) {
//   localStorage.removeItem(key);
// }

// saveValue("user", { name: "Ivan" });
// console.log(loadValue("user"));
// removeValue("user");

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// export async function runDemo() {
//   console.log("Start");
//   await delay(1000);
//   console.log("End");
// }

// runDemo();

// function getActiveUsers(users) {
//   return users.filter((user) => user.active === true);
// }

// const users = [
//   { name: "Ivan", active: true },
//   { name: "Anna", active: false },
//   { name: "Oleh", active: true },
// ];
// console.log(getActiveUsers(users));

// function doubleEvens(numbers) {
//   return numbers.filter((n) => n % 2 === 0).map((n) => n * 2);
// }

// // Generates a random HEX color like #A1F3CC
// export function generateHexColor() {
//   const chars = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * chars.length);
//     color += chars[randomIndex];
//   }

//   return color;
// }

// // Example usage
// console.log(generateHexColor());

// export function isPalindrome(str) {
//   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversed = cleaned.split("").reverse().join("");

//   return cleaned === reversed;
// }

// console.log(isPalindrome("Racecar")); // true
// console.log(isPalindrome("Hello")); // false

// export function countWords(text) {
//   if (!text.trim()) return 0;

//   return text.trim().split(/\s+/).length;
// }

// console.log(countWords("Hello nice world"));

// export function generatePassword(length = 8) {
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";

//   for (let i = 0; i < length; i++) {
//     const random = Math.floor(Math.random() * chars.length);
//     result += chars[random];
//   }

//   return result;
// }

// console.log(generatePassword(10));

// const tasks = ["gym", "study", "clean"];

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function loadTasks() {
//   const data = localStorage.getItem("tasks");
//   return data ? JSON.parse(data) : [];
// }

// saveTasks();
// console.log("Loaded tasks:", loadTasks());

// const user = {
//   name: "Ivan",
//   age: 21,
//   address: {
//     street: "Czajkowskiego",
//     city: "Wroclaw",
//   },
// };

// const deepCopy = JSON.parse(JSON.stringify(user));
// deepCopy.address.street = "Nowa 1";

// console.log("Original:", user);
// console.log("Deep copy:", deepCopy);

// async function getWeather(city) {
//   try {
//     const res = await fetch(
//       `https://api.open-meteo.com/v1/forecast?latitude=51.1&longitude=17.0&current_weather=true`
//     );

//     const data = await res.json();
//     console.log("CURRENT WEATHER:", data.current_weather);
//   } catch (err) {
//     console.error("ERROR:", err);
//   }
// }

// getWeather("Wroclaw");

// let count = 0;
// let history = [];

// function inc() {
//   count++;
//   history.push(`+1 → ${count}`);
// }

// function dec() {
//   count--;
//   history.push(`-1 → ${count}`);
// }

// function reset() {
//   count = 0;
//   history.push(`RESET → ${count}`);
// }

// inc();
// inc();
// dec();
// reset();

// console.log("COUNT:", count);
// console.log("HISTORY:", history);

// const state = ["a", "b", "c"];

// function saveState() {
//   localStorage.setItem("state", JSON.stringify(state));
// }

// function loadState() {
//   const data = localStorage.getItem("state");
//   return data ? JSON.parse(data) : [];
// }

// saveState();
// console.log("LOADED:", loadState());

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
