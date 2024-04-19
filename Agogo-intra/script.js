let inputValue = document.getElementById("valeurInput");
let buttons = document.querySelectorAll(".paragraphe");
let heure_container = document.querySelector(".heure");
let minutes_container = document.querySelector(".minutes");
let seconds_container = document.querySelector(".seconds");
let text_chrono = document.querySelector(".text_chrono");
let comptage;
let timer;
function démarerChrono(durée, EnMinute) {
  if (EnMinute) {
    durée *= 60;
  }
  comptage = durée;
  let heureActuel = new Date();
  let back = new Date(heureActuel.getTime() + durée * 1000);

  clearInterval(timer);
  timer = setInterval(() => {
    comptage--;
    if (comptage < 0) {
      clearInterval(timer);
      seconds_container.innerHTML = "";
      minutes_container.innerHTML = "";
      heure_container.innerHTML = "";
      text_chrono.innerHTML = "";
    }
    else {
      miseAjours()
        heureAJour(back);
    }
  }, 1000);
}
function heureAJour(time) {
  const jour = time.toLocaleTimeString();
  text_chrono.textContent = `Be back at ${jour}`;
}
function miseAjours() {
  let heure = Math.floor(comptage / 3600)
  let minutes = Math.floor((comptage % 3600) / 60);
  let seconds = comptage % 60;
  if (heure < 10) {
    heure_container.innerHTML = `0${heure}:`;
  } else {
     heure_container.innerHTML = `${heure}:`;
  }

  if (minutes < 10) {
    minutes_container.innerHTML = `0${minutes}:`;
  } else {
     minutes_container.innerHTML = `${minutes}:`;
  }

  if (seconds < 10) {
    seconds_container.innerHTML = `0${seconds}`;
  } else {
     seconds_container.innerHTML = `${seconds}`;
  } 
}
buttons.forEach((button, index) => {
  button.addEventListener('click', function () {
    let durée;
    let EnMinute = true;

    switch (index) {
      case 0:
        durée = 20;
        EnMinute = false;
        break;
      case 1:
        durée = 5;
        break;
      case 2:
        durée = 15;
        break;
      case 3:
        durée = 20;
        break;
      case 4:
        durée = 30;
      default:
        break;
    }
    démarerChrono(durée, EnMinute);
  })
});
inputValue.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let heureEnMinute = parseFloat(inputValue.value);
    if (!isNaN(heureEnMinute)) { 
      démarerChrono(heureEnMinute, true);
    }
  }
});