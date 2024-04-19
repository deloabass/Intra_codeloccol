// Récupérer les données depuis le localStorage
let valeurPremiereCellule = JSON.parse(localStorage.getItem("valeurPremiereCellule"));
// Sélectionner l'élément .rapport
let rapportElement = document.querySelectorAll(".rapport");
rapportElement.forEach(element => {
    if (element) {
      // Mettre à jour le contenu texte de l'élément avec les données récupérées
      element.textContent = `Rapport : R- ${valeurPremiereCellule}`;
    }
});
//ajouter la photo  d'utilisateur et afficher 
  let photoProfile = document.querySelector(".myPhoto");
  let imageStored = JSON.parse(localStorage.getItem("profilImage"));
photoProfile.setAttribute("src", imageStored);
  

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