let finder = document.getElementById("filder");
let modiFierPhoto = document.querySelector(".modifieree");
let myPhoto = document.querySelector(".photoProfile");
let photoProfile = document.querySelector(".myPhoto");
let formulaireCard = document.getElementById("form");
let btnPasseWord = document.getElementById("btnModifier");
let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputBiographie = document.getElementById("inputBiographie");
let paragraphe = document.getElementById("para");
let notification = document.getElementById("notification");

// Fonction pour afficher une notification à l'utilisateur
function displayNotification(message) {
  paragraphe.innerHTML = message;
  paragraphe.style.color = "#a9d615";
  paragraphe.style.fontWeight = "bold";
  notification.style.display = "block";
  // Réinitialise le style de la notification après 5 secondes
  setTimeout(() => {
    notification.style.display = "none";
  }, 4000);
}
// let MidifierPassword = document.querySelector(".Midifier");
modiFierPhoto.addEventListener("click", () => {
  // Déclencher l'événement de clic sur l'élément finder
  finder.click();
  // Par exemple, en modifiant l'attribut src de l'élément img
});
finder.addEventListener("change", () => {
  const totalPhoto = finder.files[0];
  photoProfile.src = URL.createObjectURL(totalPhoto);
  myPhoto.src = URL.createObjectURL(totalPhoto);
  reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("profilImage", JSON.stringify(reader.result));
    displayNotification("Votre photo à été ajoutée avec success");
  });
  reader.readAsDataURL(totalPhoto);
});
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("profilImage") === null) {
    return;
  } else {
    let imageStored = JSON.parse(localStorage.getItem("profilImage"));
    myPhoto.setAttribute("src", imageStored);
    photoProfile.setAttribute("src", imageStored);
  }
});
function clearPhoto() {
  photoProfile.src = "/SettingCompte/profile.png";
  myPhoto.src = "/SettingCompte/profile.png";
  localStorage.clear();
}
function returnDash() {
  window.location.href = "/dashboard/dashboard.html";
}
btnPasseWord.addEventListener("click", () => {
  // Vérifie si l'affichage est "none"
  if (formulaireCard) {
    // Bascule la classe "active" uniquement lorsque l'élément est caché
    formulaireCard.style.display = "block";
  } else {
    formulaireCard.style.display = "none";
  }
});
//activités de l'icon le formulaireCard
function closeIcon() {
  let formulaireCard = document.querySelector(".classenone");
  if (formulaireCard) {
    formulaireCard.classList.add("d-none");
  }
}

inputName.addEventListener("input", () => {
  // Récupérer la valeur de l'input
  let nameValue = inputName.value;
  // Stocker la valeur dans localStorage
  localStorage.setItem("nameValue", JSON.stringify(nameValue));
});
inputName.value = JSON.parse(localStorage.getItem("nameValue"));

inputEmail.addEventListener("input", () => {
  // Récupérer la valeur de l'input
  let emailValue = inputEmail.value;
  // Stocker la valeur dans localStorage
  localStorage.setItem("emailValue", JSON.stringify(emailValue));
});
inputEmail.value = JSON.parse(localStorage.getItem("emailValue"));

inputBiographie.addEventListener("input", () => {
  // Stocker la valeur dans localStorage
  let biographieValue = inputBiographie.value;
  // Stocker la valeur dans localStorage
  localStorage.setItem("biographieValue", JSON.stringify(biographieValue));
});
inputBiographie.value = JSON.parse(localStorage.getItem("biographieValue"));

let utilisateur = JSON.parse(localStorage.getItem("newUserData"));
let newUser = JSON.parse(localStorage.getItem("donner"));
let ancienPassWord = document.getElementById("exampleInputEmail2");
let nouveauPassWord = document.getElementById("Nouveau");
let confirmationPassword = document.getElementById("Confirmer");


function verifierMotdePasse() {
  if (utilisateur.password === ancienPassWord.value && nouveauPassWord.value === confirmationPassword.value) {
    let tableauUser = newUser.map((elements) => {
      if (elements.password === utilisateur.password) {
        elements.password = confirmationPassword.value;
        localStorage.setItem("donner", JSON.stringify(tableauUser));
      }
      return elements;
    });
    
  }
}
const valider_pswd = document.querySelector(".valider-pswd");
valider_pswd.addEventListener("click", (e) => {
  e.preventDefault();
  if (ancienPassWord.value === "" || nouveauPassWord.value === "" ||  confirmationPassword.value === "") {
    displayNotification("Veuillez remplir tous les champs");
  } else if (nouveauPassWord.value !== confirmationPassword.value) { 
    displayNotification("Le mot de passe ne correspond pas à sa confirmation");
  }
  else {
    verifierMotdePasse();
      displayNotification("Mot de passe modifié avec succès");
      setTimeout(() => {
        window.location.href = "../connexion/connexion.html";
      }, 5000);
  }

});

function deleteCompte() {
  let userList = confirm("Voulez-vous Supprimier  votre compte ?");
  if (userList) {
    localStorage.removeItem("newUserData");
    window.location.replace('/connexion/connexion.html');
  }
}

/// menu icon click  event listener ///        
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
