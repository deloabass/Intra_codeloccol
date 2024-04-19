const arr = [];
for (let i = 0; i < 101; i++) {
  arr.push(`${i}. Je suis désolé`);
}

// Convertir le tableau en une chaîne de texte avec des sauts de ligne
const textePourPressePapiers = arr.join("\n");

// Utiliser l'API Clipboard pour copier le texte dans le presse-papiers
navigator.clipboard
  .writeText(textePourPressePapiers)
  .then(() => {
    console.log("Texte copié avec succès dans le presse-papiers");
  })
  .catch((err) => {
    console.error("Erreur lors de la copie dans le presse-papiers", err);
  });
