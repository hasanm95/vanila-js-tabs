const tabs = document.querySelector(".nav-tabs");
const tabBtns = tabs.querySelectorAll(".nav-link");
const contents = document.querySelector(tabs.dataset["target"]);

tabs.addEventListener("click", function (e) {
  const target = e.target;
  if (!target) return;
  const parent = e;
  const targetTab = document.querySelector(target.dataset["target"]);
  console.log(target);
  targetTab.classList.add("active");
  target.classList.add("active");
});
