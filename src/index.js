const tabs = document.querySelector(".nav-tabs");
const contents = document.querySelector(tabs.dataset["target"]);

tabs.addEventListener("click", function (e) {
  const target = e.target;
  if (!target) return;
  const targetTab = document.querySelector(target.dataset["target"]);
  const parent = e.target.parentElement.parentElement;
  const allButton = parent.querySelectorAll("button")
  const allPanes = contents.querySelectorAll(".tab-pane");
  allButton.forEach((btn, i) => {
    btn.classList.remove("active")
    allPanes[i].classList.remove("active")
  });
  targetTab.classList.add("active");
  target.classList.add("active");
});
