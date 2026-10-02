const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeBtn");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeBtn.textContent = dark ? "☀" : "◐";
  localStorage.setItem("urgesa-theme", dark ? "dark" : "light");
});

if (localStorage.getItem("urgesa-theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀";
}

document.getElementById("year").textContent = new Date().getFullYear();
