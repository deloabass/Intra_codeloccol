let inputScreen = document.getElementById("screen");
let numberButton = document.querySelectorAll(".number");
let nombre1 = 0;
let operateur;
let nombre2 = 0;
let multiplication = document.getElementById("multiplication");
function valeurScreen(chiffre) {
  inputScreen.value += chiffre;
  nombre1 = inputScreen.value;

}


//function boutton delete
function del() {
  let value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.length-1);
}
// function nombre à screen
function number() {
  let numberButton = document.querySelectorAll(".number");
  for (let n = 0; n < numberButton.length; n++) {
    numberButton[n].addEventListener("click", function () {

      inputScreen.value += numberButton[n].getAttribute('nombre');
      if (nombre1 === 0) nombre1 = parseInt(inputScreen.value);
      else nombre2 = parseInt(inputScreen.value);
      console.log(nombre1);
    });
  }
}
number();
// function symbole à screen
function symbole() {
  let btn_Symbole = document.querySelectorAll(".symbole");
  for (let s = 0; s < btn_Symbole.length; s++) {
    btn_Symbole[s].addEventListener("click", function () {
      inputScreen.value = btn_Symbole[s].getAttribute('symbol');
    });
  }
}
symbole();
//function bouton reset click
function reset() {
  inputScreen.value = "";
}

let boutonPoint = document.getElementById("boutonpoint");
boutonPoint.addEventListener("click", function (a) {
  if (inputScreen.value === "") {
    inputScreen.value = "0.";
    console.log("bonjour");
  }

  // test si y'a un point sur l'ecran d'affichage
  if (inputScreen.value.includes(".")) {
    console.log("je contient deja un point(.)");
    return;
  } else {
    //si non rajoute le point
    valeurScreen(a.target.textContent);
    console.log("je rajoute le point");
    console.log(inputScreen.value);
  }
});

function ajouterOperateur(operateur) {
 if (operateur === "+") {
    // nombre1 = 0;
    console.log("nombre2: ", nombre2);
    inputScreen.value = parseInt(parseInt(nombre1) + parseInt(nombre2));
  }
}

// function egale 
function egale() {
  const result = nombre1 += nombre2;
  inputScreen.value = result;

}
egale()
// //reset Suprime les nombre des button.


//circle
let point_un = document.querySelector(".type_1");
let point_deux = document.querySelector(".type_2");
let point_trois = document.querySelector(".type_3");
let point = document.querySelector(".point");
let point2 = document.querySelector(".point2");
let point3 = document.querySelector(".point3");
let body = document.querySelector(".bod");
let btn = document.querySelector(".btn");
let btnEgale = document.querySelector(".egale");
let btnReset = document.querySelector(".reset");
let btnDel = document.querySelector(".del");
let btn_Circle = document.querySelector(".circle");
let titre = document.getElementById("titre_h3");
let control_p = document.getElementById("theme");
let btn_number = document.querySelectorAll(".number");
let btn_Symbole = document.querySelectorAll(".symbole");
//utilisation de point_1 dans le cercle du theme.
point_un.addEventListener("click", function () {
  point.setAttribute("style", "display: block");
  point2.setAttribute("style", "display: none");
  point3.setAttribute("style", "display: none");
  body.setAttribute("style", "background-color:hsl(222,26%,31%)");
  inputScreen.setAttribute("style", "background-color: rgb(24,32,51)");
  btn.setAttribute("style", "background-color:hsl(224, 36%, 15%)");
  btnReset.setAttribute("style", "background-color:rgb(53,119,129)");
  btnDel.setAttribute("style", "background-color:rgb(53,119,129)");
  btnEgale.setAttribute("style", "background-color:rgb(185,81,9)");
  btn_Circle.setAttribute("style", "background-color:rgb(24,32,51)");
  inputScreen.setAttribute("style", "color:#FFF");
  titre.setAttribute("style", "color:#fff");
  control_p.setAttribute("style", "color:#fff");
  point_un.setAttribute("style", "color:#fff");
  point_deux.setAttribute("style", "color:#fff");
  point_trois.setAttribute("style", "color:#fff");
  for (let i = 0; i < btn_number.length; i++) {
    btn_number[i].style.color = "#000";
    btn_number[i].style.background = "rgb(239,239,239)";
  }
  for (let a = 0; a < btn_Symbole.length; a++) {
    btn_Symbole[a].style.color = "#000";
    btn_Symbole[a].style.background = "rgb(239,239,239)";
  }
});
//utilisation de point_2 dans le cercle du theme.
point_deux.addEventListener("click", function () {
  point.setAttribute("style", "display: none");
  point3.setAttribute("style", "display: none");
  point2.setAttribute("style", "display: block");
  body.setAttribute("style", "background-color:hsl(0, 0%, 90%)");
  btn.setAttribute("style", "background-color:hsl(0, 5%, 81%)");
  inputScreen.setAttribute("style", "background-color:hsl(0, 0%, 93%)");
  btn_Circle.setAttribute("style", "background-color:rgb(214,210,211)");
  btnEgale.setAttribute("style", "background-color:rgb(185,81,9)");
  btnReset.setAttribute("style", "background-color:rgb(53,119,129)");
  btnDel.setAttribute("style", "background-color:rgb(53,119,129)");
  titre.setAttribute("style", "color:#000");
  control_p.setAttribute("style", "color:#000");
  point_un.setAttribute("style", "color:#000");
  point_deux.setAttribute("style", "color:#000");
  point_trois.setAttribute("style", "color:#000");
  for (let i = 0; i < btn_number.length; i++) {
    btn_number[i].style.color = "#000";
    btn_number[i].style.background = "rgb(239,239,239)";
  }
  for (let a = 0; a < btn_Symbole.length; a++) {
    btn_Symbole[a].style.color = "#000";
    btn_Symbole[a].style.background = "rgb(239,239,239)";
  }
});
//utilisation de point_3 dans le cercle du theme.
point_trois.addEventListener("click", function () {
  point.setAttribute("style", "display: none");
  point2.setAttribute("style", "display: none");
  point3.setAttribute("style", "display: block !important");
  body.setAttribute("style", "background-color:hsl(268, 75%, 9%)");
  btn.setAttribute("style", "background-color:hsl(268, 71%, 12%)");
  inputScreen.setAttribute("style", "background-color:hsl(0, 0%, 93%)");
  btnEgale.setAttribute("style", "background-color:rgb(8, 199, 191)");
  btnReset.setAttribute("style", "background-color:rgb(55,26,82)");
  btnDel.setAttribute("style", "background-color:rgb(55,26,82)");
  inputScreen.setAttribute("style", "background-color:rgb(31,5,60)");
  btn_Circle.setAttribute("style", "background-color:rgb(31,5,60)");
  titre.setAttribute("style", "color:hsl(52, 100%, 62%)");
  control_p.setAttribute("style", "color:hsl(52, 100%, 62%)");
  point_un.setAttribute("style", "color:hsl(52, 100%, 62%)");
  point_deux.setAttribute("style", "color:hsl(52, 100%, 62%)");
  point_trois.setAttribute("style", "color:hsl(52, 100%, 62%)");
  inputScreen.setAttribute("style", "color:hsl(52, 100%, 62%)");
  for (let i = 0; i < btn_number.length; i++) {
    btn_number[i].style.color = "hsl(52, 100%, 62%)";
    btn_number[i].style.background = "rgb(93,5,131)";
  }
  for (let a = 0; a < btn_Symbole.length; a++) {
    btn_Symbole[a].style.color = "hsl(52, 100%, 62%)";
    btn_Symbole[a].style.background = "rgb(93,5,131)";
  }
});
