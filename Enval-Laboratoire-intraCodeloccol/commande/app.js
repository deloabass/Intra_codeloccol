let facturIcon = document.querySelector(".facturIcon");
let laboraIcon = document.querySelector(".laboraIcon");
let dateIcon = document.querySelector(".dateIcon");
let statutIcon = document.querySelector(".statutIcon");
let inputSearch = document.querySelector(".inputSearch");

inputSearch.addEventListener("input", () => {
  let searchValue = inputSearch.value.trim().toLowerCase();

  let rows = document.querySelectorAll(".special-row");
  let matchFound = false; // Variable pour vérifier si une correspondance est trouvée

  rows.forEach((row) => {
    let cells = row.querySelectorAll("td");
    let rowMatchFound = false; // Variable pour vérifier si une correspondance est trouvée dans cette ligne

    cells.forEach((cell) => {
      let cellText = cell.textContent.trim().toLowerCase();
      if (cellText.includes(searchValue)) {
        rowMatchFound = true;
        matchFound = true;
      }
    });

    if (rowMatchFound) {
      row.style.display = ""; // Afficher la ligne si une correspondance est trouvée
    } else {
      row.style.display = "none"; // Cacher la ligne sinon
    }
  });

  // Vérifier si aucune correspondance n'a été trouvée dans aucune ligne
  if (!matchFound && searchValue !== "") {
    // Si aucune correspondance n'est trouvée et la recherche n'est pas vide
    // Afficher un paragraphe en bas pour indiquer aucune correspondance
    // Supposons que vous ayez un élément avec l'id "no-match-paragraph" pour afficher ce message
    let noMatchParagraph = document.getElementById("no-match-paragraph");
    if (noMatchParagraph) {
      noMatchParagraph.style.display = "block"; // Afficher le paragraphe
    }
  } else {
    // Si une correspondance est trouvée ou si la recherche est vide, cacher le paragraphe
    let noMatchParagraph = document.getElementById("no-match-paragraph");
    if (noMatchParagraph) {
      noMatchParagraph.style.display = "none"; // Cacher le paragraphe
    }
  }
});

facturIcon.addEventListener("click", () => {
  toggleIcon(facturIcon);
  // Sélectionner toutes les lignes avec la classe special-row
  let rows = document.querySelectorAll(".special-row");

  // Récupérer le parent de toutes les lignes (généralement tbody)
  let parent = rows[0].parentNode;

  // Parcourir chaque ligne
  rows.forEach((row) => {
    // Sélectionner le premier élément td dans cette ligne
    let firstCell = row.querySelector("td:first-child");

    // Vérifier si le texte à l'intérieur de la première cellule est différent de "Enval"
    if (firstCell.textContent.trim() !== "Enval") {
      // Déplacer le premier élément td de la ligne avant la première ligne de la table
      parent.insertBefore(row, parent.firstChild);
    }
  });
});

laboraIcon.addEventListener("click", () => {
  toggleIcon(laboraIcon);
  // Sélectionner toutes les lignes avec la classe special-row
  let rows = document.querySelectorAll(".special-row");

  // Récupérer le parent de toutes les lignes (généralement tbody)
  let parent = rows[0].parentNode;

  // Parcourir chaque ligne
  rows.forEach((row) => {
    // Sélectionner le premier élément td dans cette ligne
    let firstCell = row.querySelector("td:first-child");

    // Vérifier si le texte à l'intérieur de la première cellule est différent de "Enval"
    if (firstCell.textContent.trim() !== "Enval") {
      // Déplacer le premier élément td de la ligne avant la première ligne de la table
      parent.insertBefore(row, parent.firstChild);
    }
  });
});

dateIcon.addEventListener("click", () => {
  toggleIcon(dateIcon);
  // Sélectionner toutes les lignes avec la classe special-row
  let rows = document.querySelectorAll(".special-row");

  // Récupérer le parent de toutes les lignes (généralement tbody)
  let parent = rows[0].parentNode;

  // Parcourir chaque ligne
  rows.forEach((row) => {
    // Sélectionner le premier élément td dans cette ligne
    let firstCell = row.querySelector("td:first-child");

    // Vérifier si le texte à l'intérieur de la première cellule est différent de "Enval"
    if (firstCell.textContent.trim() !== "Enval") {
      // Déplacer le premier élément td de la ligne avant la première ligne de la table
      parent.insertBefore(row, parent.firstChild);
    }
  });
});
statutIcon.addEventListener("click", () => {
  toggleIcon(statutIcon);
  // Sélectionner toutes les lignes avec la classe special-row
  let rows = document.querySelectorAll(".special-row");

  // Récupérer le parent de toutes les lignes (généralement tbody)
  let parent = rows[0].parentNode;

  // Parcourir chaque ligne
  rows.forEach((row) => {
    // Sélectionner le premier élément td dans cette ligne
    let firstCell = row.querySelector("td:first-child");

    // Vérifier si le texte à l'intérieur de la première cellule est différent de "Enval"
    if (firstCell.textContent.trim() !== "Enval") {
      // Déplacer le premier élément td de la ligne avant la première ligne de la table
      parent.insertBefore(row, parent.firstChild);
    }
  });
});
function toggleIcon(iconContainer) {
  let existingIcon = iconContainer.querySelector("i");
  if (!existingIcon) {
    // Créer l'icône uniquement si elle n'existe pas déjà
    let creatIcon = document.createElement("i");
    creatIcon.classList.add("ri-sort-alphabet-asc");
    iconContainer.appendChild(creatIcon);
  } else {
    existingIcon.classList.toggle("ri-sort-alphabet-asc");
  }
}
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
  //ajouter la photo  d'utilisateur et afficher 
  let photoProfile = document.querySelector(".myPhoto");
  let imageStored = JSON.parse(localStorage.getItem("profilImage"));
photoProfile.setAttribute("src", imageStored);