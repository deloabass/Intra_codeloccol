const citations = [
  "La France Fr nous a souvent volé nos richesses ... vous allez aussi nos volé nos footballeur ?",
  "L'oiseau sur le baobab ne doit pas oublier q'il a porter des lunettes !",
  "On as pas besoin d'eau potable pour eteindre un incendie",
  "Le crocodile n'attend pas que le gorille accouche",
];
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


const jete_gete = document.querySelector(".btn");
const quote = document.getElementById("quote");
jete_gete.addEventListener('click', function () {
  quote.textContent = citations[randomInteger(0, citations.length - 1)];
});