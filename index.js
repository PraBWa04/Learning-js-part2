const cartCountEl = document.querySelector("#cart-count");

function getTotalQty() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCounter() {
  cartCountEl.textContent = getTotalQty();
}

updateCartCounter();

// const addBtn = document.querySelector("#add");
// const PRODUCT_ID = 1;

// addBtn.addEventListener("click", () => {
//   addToCart(PRODUCT_ID);
// });

// function addToCart(productId) {
//   const cart = getCart();

//   const item = cart.find((p) => p.id === productId);

//   if (item) {
//     item.qty += 1;
//   } else {
//     cart.push({ id: productId, qty: 1 });
//   }

//   saveCart(cart);
// }

// const CART_KEY = "cart";

// function getCart() {
//   return JSON.parse(localStorage.getItem(CART_KEY)) || [];
// }

// function saveCart(cart) {
//   localStorage.setItem(CART_KEY, JSON.stringify(cart));
// }

// const buyBtn = document.querySelector("#buy");
// const countEl = document.querySelector("#count");

// let count = 0;

// buyBtn.addEventListener("click", () => {
//   count++;

//   if (count === 5) {
//     buyBtn.disabled = true;
//     countEl.textContent = "Limit reached";
//     return;
//   }

//   countEl.textContent = count;
// });

// const products = [
//   { id: 1, name: "Lamp", price: 120, inStock: true },
//   { id: 2, name: "Cable", price: 40, inStock: false },
//   { id: 3, name: "Battery", price: 300, inStock: true },
// ];

// function highPrice(products) {
//   return products
//     .filter((product) => product.inStock === true && product.price > 100)
//     .map((product) => product.name);
// }

// console.log(highPrice(products));

// const orders = [
//   { id: 1, status: "completed", total: 200 },
//   { id: 2, status: "pending", total: 150 },
//   { id: 3, status: "completed", total: 100 },
//   { id: 4, status: "completed", total: 50 },
// ];

// function getCompletedOrdersTotal(orders) {
//   return orders
//     .filter((order) => order.status === "completed")
//     .reduce((sum, order) => sum + order.total, 0);
// }

// console.log(getCompletedOrdersTotal(orders));

// const orders = [
//   { id: 1, user: "Ivan", total: 200, status: "completed" },
//   { id: 2, user: "Anna", total: 150, status: "pending" },
//   { id: 3, user: "Ivan", total: 100, status: "completed" },
//   { id: 4, user: "Anna", total: 50, status: "completed" },
//   { id: 5, user: "Oleh", total: 300, status: "completed" },
// ];

// function analyzeOrders(orders) {
//   return orders.reduce(
//     (acc, order) => {
//       acc.ordersCount += 1;

//       if (order.status === "completed") {
//         acc.completedCount += 1;
//         acc.totalRevenue += order.total;

//         if (!acc.revenueByUser[order.user]) {
//           acc.revenueByUser[order.user] = 0;
//         }
//         acc.revenueByUser[order.user] += order.total;
//       }

//       return acc;
//     },
//     {
//       totalRevenue: 0,
//       ordersCount: 0,
//       completedCount: 0,
//       revenueByUser: {},
//     },
//   );
// }

// console.log(analyzeOrders(orders));

// const inputEl = document.querySelector("#input");
// const addBtn = document.querySelector("#add");
// const listEl = document.querySelector("#list");

// let notes = JSON.parse(localStorage.getItem("notes")) || [];

// function save() {
//   localStorage.setItem("notes", JSON.stringify(notes));
// }

// function render() {
//   listEl.textContent = "";

//   if (notes.length === 0) {
//     const p = document.createElement("p");
//     p.textContent = "No notes yet";
//     listEl.appendChild(p);
//     return;
//   }

//   notes.forEach((note, index) => {
//     const li = document.createElement("li");
//     li.textContent = note;

//     li.addEventListener("click", () => {
//       notes.splice(index, 1);
//       save();
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// addBtn.addEventListener("click", () => {
//   const value = inputEl.value.trim();
//   if (!value) return;

//   notes.push(value);
//   inputEl.value = "";
//   save();
//   render();
// });

// render();

// const products = [
//   { name: "Phone", price: 1200 },
//   { name: "Laptop", price: 3500 },
//   { name: "Mouse", price: 150 },
//   { name: "Monitor", price: 2500 },
// ];

// let query = "";
// let sortMode = "asc"; // asc | desc

// function getVisibleProducts() {
//   let result = products.filter((p) =>
//     p.name.toLowerCase().includes(query.toLowerCase()),
//   );

//   result.sort((a, b) =>
//     sortMode === "asc" ? a.price - b.price : b.price - a.price,
//   );

//   return result;
// }

// function renderProducts() {
//   console.clear();
//   getVisibleProducts().forEach((p) => {
//     console.log(`${p.name}: ${p.price}`);
//   });
// }

// function setSearch(value) {
//   query = value;
//   renderProducts();
// }

// function toggleSort() {
//   sortMode = sortMode === "asc" ? "desc" : "asc";
//   renderProducts();
// }

// renderProducts();

// const orders = [
//   { id: 1, user: "Ivan", total: 200, status: "completed" },
//   { id: 2, user: "Anna", total: 150, status: "pending" },
//   { id: 3, user: "Ivan", total: 100, status: "completed" },
//   { id: 4, user: "Anna", total: 50, status: "completed" },
//   { id: 5, user: "Oleh", total: 300, status: "completed" },
// ];

// function summarizeOrders(orders) {
//   return orders.reduce(
//     (acc, order) => {
//       if (!acc.byUser[order.user]) {
//         acc.byUser[order.user] = 0;
//       }

//       acc.byUser[order.user] += order.total;

//       if (order.status === "completed") {
//         acc.completedTotal += order.total;
//       }

//       acc.count += 1;
//       return acc;
//     },
//     {
//       byUser: {},
//       completedTotal: 0,
//       count: 0,
//     },
//   );
// }

// console.log(summarizeOrders(orders));

// const listEl = document.querySelector("#list");
// const filterEl = document.querySelector("#filter");
// const statsEl = document.querySelector("#stats");

// let tasks = [
//   { text: "Learn JS", done: false },
//   { text: "Gym", done: true },
//   { text: "Read book", done: false },
// ];

// let filter = "all"; // all | active | done

// function getVisibleTasks() {
//   if (filter === "active") return tasks.filter((t) => !t.done);
//   if (filter === "done") return tasks.filter((t) => t.done);
//   return tasks;
// }

// function render() {
//   listEl.textContent = "";

//   const visibleTasks = getVisibleTasks();

//   visibleTasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.textContent = task.text;
//     li.style.textDecoration = task.done ? "line-through" : "none";

//     li.addEventListener("click", () => {
//       tasks[index].done = !tasks[index].done;
//       render();
//     });

//     listEl.appendChild(li);
//   });

//   const doneCount = tasks.filter((t) => t.done).length;
//   statsEl.textContent = `Done: ${doneCount} / ${tasks.length}`;
// }

// filterEl.addEventListener("change", (e) => {
//   filter = e.target.value;
//   render();
// });

// render();

// const listEl = document.querySelector("#list");

// let items = [
//   { text: "JS", active: true },
//   { text: "Gym", active: false },
// ];

// let showActive = true;

// function render() {
//   listEl.textContent = "";

//   const visible = items.filter((i) => i.active === showActive);

//   visible.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.textContent = item.text;

//     li.addEventListener("click", () => {
//       items[index].active = !items[index].active;
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// render();

// const listEl = document.querySelector("#list");
// const undoBtn = document.querySelector("#undo");

// let items = ["A", "B", "C"];
// let lastRemoved = null;

// function render() {
//   listEl.textContent = "";
//   items.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.textContent = item;

//     li.addEventListener("click", () => {
//       lastRemoved = { item, index };
//       items.splice(index, 1);
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// undoBtn.addEventListener("click", () => {
//   if (!lastRemoved) return;
//   items.splice(lastRemoved.index, 0, lastRemoved.item);
//   lastRemoved = null;
//   render();
// });

// render();

// const statsEl = document.querySelector("#stats");

// const tasks = [{ done: true }, { done: false }, { done: true }];

// function renderStats() {
//   const doneCount = tasks.filter((t) => t.done).length;
//   const percent = Math.round((doneCount / tasks.length) * 100);

//   statsEl.textContent = `Completed: ${percent}%`;
// }

// renderStats();

// const listEl = document.querySelector("#list");

// let items = ["Apple", "Banana", "Orange"];
// let activeIndex = null;

// function render() {
//   listEl.textContent = "";

//   items.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     li.style.fontWeight = index === activeIndex ? "bold" : "normal";

//     li.addEventListener("click", () => {
//       activeIndex = index;
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// render();

// const listEl = document.querySelector("#list");
// const toggleBtn = document.querySelector("#toggle");

// let tasks = [
//   { text: "JS", done: true },
//   { text: "Gym", done: false },
// ];

// let showCompletedOnly = false;

// function render() {
//   listEl.textContent = "";

//   const visible = showCompletedOnly ? tasks.filter((t) => t.done) : tasks;

//   visible.forEach((task) => {
//     const li = document.createElement("li");
//     li.textContent = task.text;
//     listEl.appendChild(li);
//   });
// }

// toggleBtn.addEventListener("click", () => {
//   showCompletedOnly = !showCompletedOnly;
//   render();
// });

// render();

// const input = document.querySelector("#search");
// const listEl = document.querySelector("#list");

// const data = ["Apple", "Avocado", "Banana", "Orange", "Mango"];
// let timer = null;
// let query = "";

// function render() {
//   listEl.textContent = "";

//   data
//     .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
//     .forEach((item) => {
//       const li = document.createElement("li");
//       li.textContent = item;
//       listEl.appendChild(li);
//     });
// }

// input.addEventListener("input", (e) => {
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     query = e.target.value;
//     render();
//   }, 300);
// });

// render();

// const statsEl = document.querySelector("#stats");

// const orders = [
//   { total: 200, completed: true },
//   { total: 150, completed: false },
//   { total: 400, completed: true },
// ];

// function renderStats() {
//   const stats = orders.reduce(
//     (acc, o) => {
//       acc.count++;
//       if (o.completed) acc.total += o.total;
//       return acc;
//     },
//     { count: 0, total: 0 }
//   );

//   statsEl.textContent = `Orders: ${stats.count}, Revenue: ${stats.total}`;
// }

// renderStats();

// const listEl = document.querySelector("#list");

// let notes = JSON.parse(localStorage.getItem("notes")) || [];

// function save() {
//   localStorage.setItem("notes", JSON.stringify(notes));
// }

// function render() {
//   listEl.textContent = "";

//   notes.forEach((note, index) => {
//     const li = document.createElement("li");
//     li.textContent = note;

//     li.addEventListener("click", () => {
//       notes.splice(index, 1);
//       save();
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// render();

// const input = document.querySelector("#input");
// const addBtn = document.querySelector("#add");
// const listEl = document.querySelector("#list");

// let tasks = [];

// function render() {
//   listEl.textContent = "";

//   tasks.forEach((task) => {
//     const li = document.createElement("li");
//     li.textContent = task;
//     listEl.appendChild(li);
//   });
// }

// addBtn.addEventListener("click", () => {
//   const value = input.value.trim();
//   if (!value) return;

//   tasks.push(value);
//   input.value = "";
//   render();
// });

// const listEl = document.querySelector("#list");

// let items = [
//   { text: "JS", done: false },
//   { text: "Gym", done: true },
// ];

// function render() {
//   listEl.textContent = "";

//   items.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.textContent = item.text;
//     li.style.textDecoration = item.done ? "line-through" : "none";

//     li.addEventListener("click", () => {
//       items[index].done = !items[index].done;
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// render();

// const listEl = document.querySelector("#list");
// const resetBtn = document.querySelector("#reset");

// let items = ["Apple", "Banana", "Orange"];

// function render() {
//   listEl.textContent = "";

//   if (items.length === 0) {
//     const p = document.createElement("p");
//     p.textContent = "List is empty";
//     listEl.appendChild(p);
//     return;
//   }

//   items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     listEl.appendChild(li);
//   });
// }

// resetBtn.addEventListener("click", () => {
//   items = [];
//   render();
// });

// render();

// const listEl = document.querySelector("#list");
// const filterBtn = document.querySelector("#filter");

// let items = ["Apple", "Banana", "Orange", "Kiwi"];
// let showShortOnly = false;

// function render() {
//   listEl.textContent = "";

//   const visibleItems = showShortOnly
//     ? items.filter((item) => item.length < 6)
//     : items;

//   visibleItems.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     listEl.appendChild(li);
//   });
// }

// filterBtn.addEventListener("click", () => {
//   showShortOnly = !showShortOnly;
//   render();
// });

// render();

// const listEl = document.querySelector("#list");
// const toggleBtn = document.querySelector("#toggle");

// let items = ["Apple", "Banana", "Orange"];
// let showUppercase = false;

// function render() {
//   listEl.textContent = "";

//   items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = showUppercase ? item.toUpperCase() : item;
//     listEl.appendChild(li);
//   });
// }

// toggleBtn.addEventListener("click", () => {
//   showUppercase = !showUppercase;
//   render();
// });

// render();

// const listEl = document.querySelector("#list");
// const countEl = document.querySelector("#count");

// let items = ["Apple", "Banana"];

// function render() {
//   listEl.textContent = "";

//   items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     listEl.appendChild(li);
//   });

//   countEl.textContent = `Items count: ${items.length}`;
// }

// render();

// const listEl = document.querySelector("#list");
// const addBtn = document.querySelector("#addBtn");

// let items = ["Apple", "Banana"];

// function render() {
//   listEl.textContent = "";

//   if (items.length === 0) {
//     const p = document.createElement("p");
//     p.textContent = "List is empty";
//     listEl.appendChild(p);
//     return;
//   }

//   items.forEach((item, index) => {
//     const li = document.createElement("li");
//     li.textContent = item;

//     li.addEventListener("click", () => {
//       items.splice(index, 1);
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// addBtn.addEventListener("click", () => {
//   items.push(`Item ${items.length + 1}`);
//   render();
// });

// render();

// const orders = [
//   { status: "completed", total: 250 },
//   { status: "pending", total: 100 },
//   { status: "completed", total: 400 },
// ];

// const statsEl = document.querySelector("#stats");

// function renderStats() {
//   const stats = orders.reduce(
//     (acc, order) => {
//       acc.count++;
//       acc.total += order.total;
//       return acc;
//     },
//     { count: 0, total: 0 }
//   );

//   statsEl.textContent = `Orders: ${stats.count}, Total: ${stats.total}`;
// }

// renderStats();

// const input = document.querySelector("#search");
// const listEl = document.querySelector("#list");

// const data = ["Apple", "Avocado", "Banana", "Orange", "Mango"];

// let query = "";

// function render() {
//   listEl.textContent = "";

//   data
//     .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
//     .forEach((item) => {
//       const li = document.createElement("li");
//       li.textContent = item;
//       listEl.appendChild(li);
//     });
// }

// input.addEventListener("input", (e) => {
//   query = e.target.value;
//   render();
// });

// render();

// const listEl = document.querySelector("#list");

// let notes = JSON.parse(localStorage.getItem("notes")) || [];

// function save() {
//   localStorage.setItem("notes", JSON.stringify(notes));
// }

// function render() {
//   listEl.textContent = "";

//   notes.forEach((note, index) => {
//     const li = document.createElement("li");
//     li.textContent = note;

//     li.addEventListener("click", () => {
//       notes.splice(index, 1);
//       save();
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// render();

// const input = document.querySelector("#taskInput");
// const addBtn = document.querySelector("#addTask");
// const listEl = document.querySelector("#tasks");

// let tasks = [];

// function render() {
//   listEl.textContent = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.textContent = task;

//     li.addEventListener("click", () => {
//       tasks.splice(index, 1);
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// addBtn.addEventListener("click", () => {
//   const value = input.value.trim();
//   if (!value) return;

//   tasks.push(value);
//   input.value = "";
//   render();
// });

// const input = document.querySelector("#taskInput");
// const addBtn = document.querySelector("#addTask");
// const listEl = document.querySelector("#tasks");

// let tasks = [];

// function render() {
//   listEl.textContent = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.textContent = task;

//     li.addEventListener("click", () => {
//       tasks.splice(index, 1);
//       render();
//     });

//     listEl.appendChild(li);
//   });
// }

// addBtn.addEventListener("click", () => {
//   const value = input.value.trim();
//   if (!value) return;

//   tasks.push(value);
//   input.value = "";
//   render();
// });

// const products = [
//   { name: "Phone", price: 1200 },
//   { name: "Mouse", price: 50 },
//   { name: "Laptop", price: 3500 },
// ];

// const listEl = document.querySelector("#list");
// const sortBtn = document.querySelector("#sort");

// let asc = true;

// function render() {
//   listEl.textContent = "";

//   const sorted = [...products].sort((a, b) =>
//     asc ? a.price - b.price : b.price - a.price
//   );

//   sorted.forEach((p) => {
//     const li = document.createElement("li");
//     li.textContent = `${p.name} — ${p.price}`;
//     listEl.appendChild(li);
//   });
// }

// sortBtn.addEventListener("click", () => {
//   asc = !asc;
//   render();
// });

// render();

// const tasks = [
//   { text: "JS", done: true },
//   { text: "Gym", done: false },
//   { text: "Study", done: true },
// ];

// const statsEl = document.querySelector("#stats");

// function renderStats() {
//   const stats = tasks.reduce(
//     (acc, task) => {
//       acc.total++;
//       task.done ? acc.done++ : acc.active++;
//       return acc;
//     },
//     { total: 0, done: 0, active: 0 }
//   );

//   statsEl.textContent = `Total: ${stats.total}, Done: ${stats.done}, Active: ${stats.active}`;
// }

// renderStats();

// const products = ["Apple", "Banana", "Orange", "Avocado"];
// const input = document.querySelector("#search");
// const listEl = document.querySelector("#list");

// let query = "";

// function render() {
//   listEl.textContent = "";

//   products
//     .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
//     .forEach((item) => {
//       const li = document.createElement("li");
//       li.textContent = item;
//       listEl.appendChild(li);
//     });
// }

// input.addEventListener("input", (e) => {
//   query = e.target.value;
//   render();
// });

// render();

// const btn = document.querySelector("#btn");
// const valueEl = document.querySelector("#value");

// let count = 0;
// const MAX = 10;

// function render() {
//   valueEl.textContent = count;
//   btn.disabled = count >= MAX;
// }

// btn.addEventListener("click", () => {
//   count++;
//   render();
// });

// render();

// const users = [
//   { name: "Ivan", active: true },
//   { name: "Anna", active: false },
//   { name: "Oleh", active: true },
// ];

// const listEl = document.querySelector("#list");
// const toggleBtn = document.querySelector("#toggle");

// let showOnlyActive = false;

// function render() {
//   listEl.textContent = "";

//   const filtered = showOnlyActive ? users.filter((u) => u.active) : users;

//   filtered.forEach((user) => {
//     const li = document.createElement("li");
//     li.textContent = user.name;
//     listEl.appendChild(li);
//   });
// }

// toggleBtn.addEventListener("click", () => {
//   showOnlyActive = !showOnlyActive;
//   render();
// });

// render();

// const listEl = document.querySelector("#list");
// const addBtn = document.querySelector("#addBtn");

// let items = ["Apple", "Banana"];

// function render() {
//   listEl.textContent = "";

//   items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     listEl.appendChild(li);
//   });
// }

// addBtn.addEventListener("click", () => {
//   items.push(`Item ${items.length + 1}`);
//   render();
// });

// render();

// const fruits = ["Apple", "Banana", "Orange"];

// const listEl = document.querySelector("#list");

// function render() {
//   fruits.forEach((fruit) => {
//     const li = document.createElement("li");
//     li.textContent = fruit;
//     listEl.appendChild(li);
//   });
// }

// render();

// const btn = document.querySelector("#btn");
// const textEl = document.querySelector("#text");

// let isHello = true;

// function render() {
//   textEl.textContent = isHello ? "Hello" : "World";
// }

// btn.addEventListener("click", () => {
//   isHello = !isHello;
//   render();
// });

// render();

// const tasksEl = document.querySelector("#tasks");
// const addTaskBtn = document.querySelector("#addTaskBtn");

// let tasks = [];

// function render() {
//   tasksEl.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.textContent = task;

//     li.addEventListener("click", () => {
//       tasks.splice(index, 1);
//       render();
//     });

//     tasksEl.appendChild(li);
//   });
// }

// addTaskBtn.addEventListener("click", () => {
//   tasks.push(`Task ${tasks.length + 1}`);
//   render();
// });

// render();

// const toggleClassBtn = document.querySelector("#toggleClassBtn");
// const boxEl = document.querySelector("#box");

// let isActive = false;

// function render() {
//   boxEl.classList.toggle("active", isActive);
// }

// toggleClassBtn.addEventListener("click", () => {
//   isActive = !isActive;
//   render();
// });

// render();

// const listEl = document.querySelector("#list");
// const addBtn = document.querySelector("#addBtn");

// let items = [];

// function render() {
//   listEl.innerHTML = "";
//   items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     listEl.appendChild(li);
//   });
// }

// addBtn.addEventListener("click", () => {
//   items.push(`Item ${items.length + 1}`);
//   render();
// });

// render();

// const plusBtn = document.querySelector("#plusBtn");
// const valueEl = document.querySelector("#value");

// let value = 0;
// const MAX = 5;

// function render() {
//   valueEl.textContent = value;
//   plusBtn.disabled = value >= MAX;
// }

// plusBtn.addEventListener("click", () => {
//   value++;
//   render();
// });

// render();

// const toggleBtn = document.querySelector("#toggleBtn");
// const statusEl = document.querySelector("#status");

// let isOn = false;

// function render() {
//   statusEl.textContent = isOn ? "ON" : "OFF";
// }

// toggleBtn.addEventListener("click", () => {
//   isOn = !isOn;
//   render();
// });

// render();

// const btn = document.querySelector("#btn");
// const countEl = document.querySelector("#count");

// let count = 0;

// btn.addEventListener("click", () => {
//   count++;
//   countEl.textContent = count;
// });

// const users = [
//   { name: "ivan", score: 50 },
//   { name: "ANNA", score: 80 },
//   { name: "oLeh", score: 65 },
//   { name: "max", score: 40 },
// ];

// function prepareLeaderboard(users) {
//   return users
//     .map((user) => {
//       return {
//         ...user,
//         name:
//           user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase(),
//       };
//     })
//     .sort((a, b) => b.score - a.score);
// }

// console.log(prepareLeaderboard(users));

// const products = [
//   { name: "Phone", category: "electronics", price: 1200 },
//   { name: "Laptop", category: "electronics", price: 3500 },
//   { name: "Apple", category: "food", price: 5 },
//   { name: "Bread", category: "food", price: 3 },
//   { name: "T-shirt", category: "clothes", price: 25 },
// ];

// function getTotalByCategory(products) {
//   return products.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = 0;
//     }

//     acc[product.category] += product.price;
//     return acc;
//   }, {});

// }

// console.log(getTotalByCategory(products));

// const orders = [
//   { id: 1, status: "completed", total: 250 },
//   { id: 2, status: "pending", total: 400 },
//   { id: 3, status: "completed", total: 120 },
//   { id: 4, status: "cancelled", total: 300 },
//   { id: 5, status: "completed", total: 80 },
// ];

// function getCompleteStats(orders) {
//   const count = orders.filter((order) => order.status === "completed");
//   const total = count.reduce((acc, count) => acc + count.total, 0);
//   const average = total / count.length;
//   return {
//     count: count.length,
//     total: total,
//     average: average,
//   };
// }

// console.log(getCompleteStats(orders));

// function normalizeUsers(users) {
//   return users.map((user) => {
//     const name =
//       user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase();

//     return {
//       ...user,
//       name: name,
//     };
//   });
// }

// console.log(normalizeUsers(users));

// const scores = [10, 20, 15, 30, 25];

// function getScoreStats(scores) {
//   const total = scores.reduce((acc, score) => acc + score, 0);
//   const average = total / scores.length;
//   return {
//     total: total,
//     average: average,
//   };
// }

// console.log(getScoreStats(scores));
// const users = [
//   { name: "Ivan", active: true },
//   { name: "Anna", active: false },
//   { name: "Oleh", active: true },
//   { name: "Max", active: false },
// ];

// function getActiveUsers(users) {
//   const activeUsers = users.filter((user) => user.active);

//   return {
//     users: activeUsers,
//     count: activeUsers.length,
//   };
// }

// console.log(getActiveUsers(users));

// const items = [
//   { name: "Apple", price: 5 },
//   { name: "Banana", price: 3 },
//   { name: "Orange", price: 4 },
// ];

// const listEl = document.querySelector("#list");
// const totalEl = document.querySelector("#total");

// let cart = [];

// function render() {
//   listEl.innerHTML = "";

//   items.forEach((item) => {
//     const btn = document.createElement("button");
//     btn.textContent = `Add ${item.name}`;
//     btn.onclick = () => {
//       cart.push(item);
//       updateTotal();
//     };
//     listEl.appendChild(btn);
//   });
// }

// function updateTotal() {
//   const total = cart.reduce((sum, item) => sum + item.price, 0);
//   totalEl.textContent = total;
// }

// render();

// const users = [
//   { name: "Ivan", role: "admin" },
//   { name: "Anna", role: "user" },
//   { name: "Oleh", role: "admin" },
//   { name: "Max", role: "user" },
// ];

// const groupUsersByRole = (users) =>
//   users.reduce((acc, user) => {
//     acc[user.role] ??= [];
//     acc[user.role].push(user.name);
//     return acc;
//   }, {});

// console.log(groupUsersByRole(users));

// const orders = [
//   { id: 1, status: "completed", total: 250 },
//   { id: 2, status: "pending", total: 900 },
//   { id: 3, status: "completed", total: 120 },
//   { id: 4, status: "completed", total: 450 },
// ];

// const getCompletedAverage = (orders) => {
//   const completed = orders.filter((o) => o.status === "completed");

//   const sum = completed.reduce((acc, o) => acc + o.total, 0);

//   return completed.length ? sum / completed.length : 0;
// };

// console.log(getCompletedAverage(orders));

// const minusBtn = document.querySelector("#minus");
// const plusBtn = document.querySelector("#plus");
// const countEl = document.querySelector("#count");

// let count = 0;

// function updateUI() {
//   countEl.textContent = count;
//   minusBtn.disabled = count === 0;
// }

// plusBtn.addEventListener("click", () => {
//   count++;
//   updateUI();
// });

// minusBtn.addEventListener("click", () => {
//   if (count > 0) {
//     count--;
//     updateUI();
//   }
// });

// updateUI();

// const orders = [
//   { id: 1, user: "Ivan", total: 250 },
//   { id: 2, user: "Anna", total: 900 },
//   { id: 3, user: "Ivan", total: 120 },
//   { id: 4, user: "Oleh", total: 450 },
//   { id: 5, user: "Anna", total: 100 },
// ];

// function groupOrdersByUser(orders) {
//   return orders.reduce((acc, order) => {
//     if (!acc[order.user]) {
//       acc[order.user] = 0;
//     }
//     acc[order.user] += order.total;
//     return acc;
//   }, {});
// }

// console.log(groupOrdersByUser(orders));

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   console.log("Clicked");
// });

// let isOpen = false;

// function toggle() {
//   isOpen = !isOpen;
// }

// toggle();
// console.log(isOpen);

// const prices = [100, 250, 50];

// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total);

// const orders = [
//   { id: 1, user: "Ivan", total: 250 },
//   { id: 2, user: "Anna", total: 900 },
//   { id: 3, user: "Ivan", total: 120 },
//   { id: 4, user: "Oleh", total: 450 },
//   { id: 5, user: "Anna", total: 100 },
// ];

// function groupOrdersByUser(orders) {
//   return orders.reduce((acc, order) => {
//     if (!acc[order.user]) {
//       acc[order.user] = 0;
//     }
//     acc[order.user] += order.total;
//     return acc;
//   }, {});
// }

// console.log(groupOrdersByUser(orders));

// const orders = [
//   { id: 1, status: "pending", total: 250 },
//   { id: 2, status: "completed", total: 900 },
//   { id: 3, status: "pending", total: 120 },
//   { id: 4, status: "completed", total: 450 },
// ];

// function competedOrdersTotal(orders) {
//   const completedOrders = orders.filter(
//     (order) => order.status === "completed"
//   );
//   return completedOrders.reduce((sum, order) => sum + order.total, 0);
// }

// console.log(competedOrdersTotal(orders));

// const products = [
//   { name: "Phone", price: 1200 },
//   { name: "Laptop", price: 3500 },
//   { name: "Mouse", price: 150 },
// ];

// const getMostExpensive = (products) =>
//   products.reduce((max, p) => (p.price > max.price ? p : max));

// console.log(getMostExpensive(products));

// const users = [
//   { name: "Ivan", age: 21 },
//   { name: "Oleh", age: 17 },
//   { name: "Anna", age: 25 },
// ];

// const countAdults = (users) => users.filter((u) => u.age >= 18).length;

// console.log(countAdults(users));

// const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];

// function getUniqueNumbers(numbers) {
//   return numbers.filter((num, index) => {
//     return numbers.indexOf(num) === index;
//   });
// }

// console.log(getUniqueNumbers(numbers));
// const buttonEl = document.querySelector("#btn");
// const countEl = document.querySelector("#count");

// let count = 0;

// buttonEl.addEventListener("click", () => {
//   count++;
//   countEl.textContent = count;
// });

// const products = [
//   { id: 1, name: "iPhone 13", price: 3500 },
//   { id: 2, name: "Samsung Galaxy S21", price: 3200 },
//   { id: 3, name: "Xiaomi Redmi", price: 1800 },
//   { id: 4, name: "iPhone 11", price: 2500 },
// ];

// function searchProducts(products, query) {
//   return products.filter((product) => {
//     return product.name.toLowerCase().includes(query.toLowerCase());
//   });
// }

// console.log(searchProducts(products, "iphone"));

// const cart = [
//   { name: "Keyboard", price: 300, qty: 1 },
//   { name: "Monitor", price: 2500, qty: 2 },
//   { name: "Cable", price: 50, qty: 3 },
// ];

// function getTotalPrice(cart) {
//   return cart.reduce((total, item) => {
//     return total + item.price * item.qty;
//   }, 0);
// }

// console.log(getTotalPrice(cart));

// const tasks = [
//   { text: "JS", done: false },
//   { text: "Gym", done: true },
//   { text: "React", done: false },
// ];

// function toggleTask(tasks, index) {
//   return tasks.map((task, i) => {
//     if (i === index) {
//       return {
//         ...task,
//         done: !task.done,
//       };
//     }
//     return task;
//   });
// }

// console.log(toggleTask(tasks, 2));

// const orders = [
//   { id: 1, total: 250 },
//   { id: 2, total: 900 },
//   { id: 3, total: 120 },
// ];

// function highTotalPrice(orders) {
//   return orders.find((order) => order.total > 500);
// }

// console.log(highTotalPrice(orders));

// const products = [
//   { name: "Phone", price: 1200 },
//   { name: "Laptop", price: 3500 },
//   { name: "Mouse", price: 150 },
// ];

// function getNameAndPrice(products) {
//   return products.map((product) => product.name + " " + product.price + " zŁ");
// }

// console.log(getNameAndPrice(products));

// const users = [
//   { name: "Ivan", age: 21 },
//   { name: "Oleh", age: 17 },
//   { name: "Anna", age: 25 },
//   { name: "Max", age: 16 },
// ];

// function getAdultUsers(users) {
//   return users.filter((user) => user.age >= 18);
// }

// console.log(getAdultUsers(users));

// function sortByField(items, field, order = "asc") {
//   const sorted = [...items].sort((a, b) => {
//     if (a[field] > b[field]) return 1;
//     if (a[field] < b[field]) return -1;
//     return 0;
//   });

//   return order === "desc" ? sorted.reverse() : sorted;
// }

// function validateForm(fields) {
//   const errors = {};

//   for (const key in fields) {
//     if (!fields[key]) {
//       errors[key] = "Required";
//     }
//   }

//   return {
//     isValid: Object.keys(errors).length === 0,
//     errors,
//   };
// }

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
