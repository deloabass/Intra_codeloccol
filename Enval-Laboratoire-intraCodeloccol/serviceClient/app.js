let inputSujet = document.querySelector(".inputSujet");
let inputTextTeria = document.querySelector(".textTeria");
//ajouter la photo  d'utilisateur et afficher
let photoProfile = document.querySelector(".myPhoto");
let imageStored = JSON.parse(localStorage.getItem("profilImage"));
photoProfile.setAttribute("src", imageStored);

inputSujet.addEventListener("input", () => {
  let sujet = inputSujet.value;
  localStorage.setItem("sujet", JSON.stringify(sujet));
});
inputSujet.value = JSON.parse(localStorage.getItem("sujet"));
inputTextTeria.addEventListener('input', () => {
    let textTeria = inputTextTeria.value;
    localStorage.setItem('textTerea', JSON.stringify(textTeria));
})
inputTextTeria.value = JSON.parse(localStorage.getItem('textTerea'));
/// menu icon click  event listener ////
  function openSidebar() {
    let open = document.querySelector(".open");
    open.style.display = open.style.display === "none" ? "block" : "none";
    // Sélectionne l'icône
    let icon = document.querySelector(".bi-list");
    // Change l'icône
    if (open.style.display === "none") {
      icon.classList.remove("bi-x-lg");
    } else {
      icon.classList.add("bi-x-lg");
    }
  }
