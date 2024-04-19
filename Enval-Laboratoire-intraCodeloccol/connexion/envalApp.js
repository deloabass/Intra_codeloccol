let input_un = document.getElementById("input_un");
let input_deux = document.getElementById("input_deux");
let btnClick = document.getElementById("click");
let paragraphe = document.getElementById("para");
let notification = document.getElementById("notification");
let contageTimer = document.getElementById("contage");
let compteur = document.querySelector(".compteur");
// Initialisation des variables
let numberOfTries = 0; // Nombre de tentatives de connexion infructueuses
let hours = 0;
let minutes = 0; // minutes à afficher
let seconds = 0; // secondes à afficher
let secondes = 0; // temps restant pour le chrono;

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
function displayNotificationBloquer(message) {
  paragraphe.innerHTML = message;
  paragraphe.style.color = "red";
  paragraphe.style.fontWeight = "bold";
  notification.style.display = "block";
  // Réinitialise le style de la notification après 5 secondes
  setTimeout(() => {
    notification.style.display = "none";
  }, 4000);
}
// la function qui vérouille  les inputs et active/desactive le bouton
function verrouiller() {
  input_un.disabled = true;
  input_deux.disabled = true;
  btnClick.disabled = true;
}
// la fonction qui déverrouille les inputs et désactive le bouton
function deverrouille() {
  input_un.disabled = false;
  input_deux.disabled = false;
  btnClick.disabled = false;
}
// Vérification s'il reste du temps d'un compte à rebours précédent dans le stockage local
if (JSON.parse(localStorage.getItem("time"))) {
  minutes = JSON.parse(localStorage.getItem("time")) / 60;
  seconds = JSON.parse(localStorage.getItem("time")) % 60;
  secondes = JSON.parse(localStorage.getItem("time"));
  compteur.setAttribute("style", "display:block");
  // Démarrage du compte à rebours
  countdown();
} else {
  // Temps initial du compte à rebours (300 secondes = 5 minutes)
  secondes = 300;
}
// Fonction pour gérer le compte à rebours
function countdown() {
  secondes--;
  localStorage.setItem("time", JSON.stringify(secondes));
  minutes = JSON.parse(localStorage.getItem("time")) / 60;
  seconds = JSON.parse(localStorage.getItem("time")) % 60;
  // Mise à jour de l'affichage du compte à rebours
  contageTimer.textContent = formatTime(hours) + ":" + formatTime(parseInt(minutes)) + ":" + formatTime(seconds);
  contageTimer.style.color = "#a9d615";
  contageTimer.style.fontWeight = "bold";
  contageTimer.style.fontSize = "17px";

  // Appelle la fonction countdown après 1 seconde (1000 millisecondes)
  setTimeout(() => {
    if (secondes === 0) {
      compteur.setAttribute("style", "display:none");
      localStorage.removeItem("time");
      return; // Arrête la fonction countdown si secondes === 0
      
    }
    countdown(); // Sinon, continue le compte à rebours
  }, 1000);
  // Verrouillage du compte après 4 tentatives infructueuses
  verrouiller();
}
// Fonction pour formater le temps (ajout de zéros si nécessaire)
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
// Données utilisateur (à remplacer par des données sécurisées en production)
let user = [
  {
    username: "delomodibo@gmail.com",
    password: "85581075Ab",
  },
  {
    username: "soumana",
    password: "12345",
  },
  {
    username: "modibo",
    password: "123456",
  },
];


// Vérification si les données utilisateur sont stockées localement, sinon les initialiser
if (!localStorage.getItem('donner')) {
  localStorage.setItem('donner', JSON.stringify(user));
}


function connexionBtn() {
  // Récupération des valeurs saisies par l'utilisateur
  let inputName = input_un.value;
  let inputPassword = input_deux.value;

  let usersData = JSON.parse(localStorage.getItem("donner")) || [];
  if (inputName == "" || inputPassword == "") {
    displayNotification("Veuillez remplir tout les champs");
    // Sortie de la fonction si les champs sont vides
    return;
  }
  // Vérifiez les informations de connexion avec celles stockées dans localStorage
  let isAuthenticated = usersData.find(u => u.username === inputName && u.password === inputPassword);
  if(isAuthenticated) {
    document.location.replace("/dashboard/dashboard.html");
    let newUserData = isAuthenticated;
    localStorage.setItem("newUserData", JSON.stringify(newUserData));
    
  } else {
    // Incrémentation du nombre de tentatives infructueuses
    numberOfTries++;
    displayNotification("Oups!!! La combinaison Identifiant/Password est incorrecte.");
    if (numberOfTries === 4) {
      displayNotification("Oups!!! La combinaison Identifiant/Password est incorrecte.");
      let indice = prompt("La question secrete : Quel est le surnom de nieuve ?");
      if (indice === "hassane") {
        document.location.replace("/dashboard/dashboard.html");
      } else {
        alert("Mauvaise réponse, votre compte sera bloqué \n veuillez patienter pendant quelques minutes")
        displayNotificationBloquer("Oups!!! Votre compte est définitivement bloqué.")
        // Lancement du compte à rebours pour déverrouiller le compte après un certain temps
        countdown();
      }
    } 
  }
};






