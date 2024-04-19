let IconNone = document.querySelector(".iconNone");
let contenuTable = document.querySelector(".contenuTable");
IconNone.addEventListener("click", () => {
  if (IconNone.firstElementChild.classList.contains("fa-window-minimize")) {
    IconNone.firstElementChild.classList.remove("fa-window-minimize");
    IconNone.firstElementChild.classList.add("fa-plus");
  } else {
    IconNone.firstElementChild.classList.remove("fa-plus");
    IconNone.firstElementChild.classList.add("fa-window-minimize");
  }
    contenuTable.style.display = contenuTable.style.display === "none" ? "block" : "none";
});

