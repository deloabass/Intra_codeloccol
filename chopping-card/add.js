let body = document.body;
const cartInfo = document.getElementById("cart-info");
const store_items = document.getElementById("store-items");
let maneCart = document.querySelectorAll(".store-item-name");
let imgContainer = document.querySelectorAll(".store-item-name");



// Ajoutez tous les éléments de la section du panier au tableau pour une manipulation facile
for (let i = 0; i < tableImage.length; i++) {
  const image = tableImage[i];
  store_items.innerHTML += `
         <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-itam="sweets">
            <div class="card single-item h-100 mx-auto">
              <div class="iconStar">
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              </div>
              <div class="img-container">
                <img src="${image.photo}" class="card-img-top h-100 store-img" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-around text-capitalize">
                  <h5 class="store-item-name">${image.name}</h5>
                  <h5 class="store-item-value">
                    <span>$</span>
                    <strong id="store-item-price" class="font-weight-bold">${image.prix}</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>`;
}

const iconStarLine = document.querySelectorAll(".star");

// Fonction pour mettre à jour l'affichage des étoiles en fonction de l'état enregistré
function updateStarDisplay() {
  iconStarLine.forEach((star, i) => {
    const starState = localStorage.getItem(`stare ${i}`); // Récupère l'état de l'icône depuis localStorage
    if (starState === "Abassa") {
      star.innerHTML = "&#9733";
    } else {
      star.innerHTML = "&#9734";
    }
  });
}

// Gestionnaire de clic sur les étoiles
iconStarLine.forEach((star, i) => {
  star.onclick = function () {
    let groupIndex = Math.floor(i / 4); // Calcule l'index du groupe actuel
    let startOfGroup = groupIndex * 4; // Calcule l'indice de début du groupe
    let currentStar = i - startOfGroup + 1; // Calcule l'indice de l'étoile dans le groupe

    iconStarLine.forEach((star, j) => {
      let jGroupIndex = Math.floor(j / 4); // Calcule l'index du groupe pour cette étoile
      if (jGroupIndex === groupIndex) {
        // Vérifie si l'étoile appartient au même groupe
        if (currentStar >= j - startOfGroup + 1) {
          star.innerHTML = "&#9733";
          localStorage.setItem(`stare ${j}`, "Abassa"); // Enregistre l'état de l'icône dans localStorage
        } else {
          star.innerHTML = "&#9734";
          localStorage.setItem(`stare ${j}`, "Soumana"); // Enregistre l'état de l'icône dans localStorage
        }
      }
    });
    // Appel de la fonction pour mettre à jour l'affichage au chargement de la page
updateStarDisplay();
  };
});




  

function filterProduct() {
  // button code filter all button.
  store_items.innerHTML = "";
  for (let i = 0; i < tableImage.length; i++) {
    const image = tableImage[i];
    store_items.innerHTML += `
         <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-itam="sweets">
            <div class="card single-item h-100 mx-auto">
              <div class="iconStar">
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              </div>
              <div class="img-container">
                <img src="${image.photo}" class="card-img-top h-100 store-img" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-around text-capitalize">
                  <h5 class="store-item-name">${image.name}</h5>
                  <h5 class="store-item-value">
                    <span>$</span>
                    <strong id="store-item-price" class="font-weight-bold">${image.prix}</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>`;
  }
}
// button code filter Cakes items button.
function filterItemCake() {
  let myTable = tableImage.filter((contenu) => {
    return contenu.name === "cakes item";
  });
  store_items.innerHTML = "";
  myTable.forEach((element) => {
    store_items.innerHTML += `
         <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-itam="sweets">
            <div class="card single-item h-100 mx-auto">
              <div class="iconStar">
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              </div>
              <div class="img-container">
                <img src="${element.photo}" class="card-img-top h-100 store-img" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-around text-capitalize">
                  <h5 class="store-item-name">${element.name}</h5>
                  <h5 class="store-item-value">
                    <span>$</span>
                    <strong id="store-item-price" class="font-weight-bold">${element.prix}</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>`;
  });
}
function filterItemsCupcakes() {
  let myTable = tableImage.filter((contenu) => {
    return contenu.name === "Cupcake item";
  });
  store_items.innerHTML = "";
  myTable.forEach((element) => {
    store_items.innerHTML += `
         <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-itam="sweets">
            <div class="card single-item h-100 mx-auto">
              <div class="iconStar">
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              </div>
              <div class="img-container">
                <img src="${element.photo}" class="card-img-top h-100 store-img" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-around text-capitalize">
                  <h5 class="store-item-name">${element.name}</h5>
                  <h5 class="store-item-value">
                    <span>$</span>
                    <strong id="store-item-price" class="font-weight-bold">${element.prix}</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>`;
  });
}

function filterItemsSweets() {
  let myTable = tableImage.filter((contenu) => {
    return contenu.name === "sweet item";
  });
  store_items.innerHTML = "";
  myTable.forEach((element) => {
    store_items.innerHTML += `
         <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-itam="sweets">
            <div class="card single-item h-100 mx-auto">
              <div class="iconStar">
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              </div>
              <div class="img-container">
                <img src="${element.photo}" class="card-img-top h-100 store-img" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-around text-capitalize">
                  <h5 class="store-item-name">${element.name}</h5>
                  <h5 class="store-item-value">
                    <span>$</span>
                    <strong id="store-item-price" class="font-weight-bold">${element.prix}</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>`;
  });
}
function filterItemsDoughnuts() {
  let myTable = tableImage.filter((contenu) => {
    return contenu.name === "doughnut item";
  });
  store_items.innerHTML = "";
  myTable.forEach((element) => {
    store_items.innerHTML += `
         <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-itam="sweets">
            <div class="card single-item h-100 mx-auto">
              <div class="iconStar">
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              </div>
              <div class="img-container">
                <img src="${element.photo}" class="card-img-top h-100 store-img" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-around text-capitalize">
                  <h5 class="store-item-name">${element.name}</h5>
                  <h5 class="store-item-value">
                    <span>$</span>
                    <strong id="store-item-price" class="font-weight-bold">${element.prix}</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>`;
  });
}
function fiterSearch() {
  const inputValue = document.getElementById("search-item").value.toLowerCase();

  let myTable = tableImage.filter((contenu) => {
    return contenu.name == inputValue;
  });
  store_items.innerHTML = "";
  myTable.forEach((element) => {
    store_items.innerHTML += `
         <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-itam="sweets">
            <div class="card single-item h-100 mx-auto">
            <div class="iconStar">
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              <button class="star border-0">&#9734</button>
              </div>
              <div class="img-container">
                <img src="${element.photo}" class="card-img-top h-100 store-img" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-around text-capitalize">
                  <h5 class="store-item-name">${element.name}</h5>
                  <h5 class="store-item-value">
                    <span>$</span>
                    <strong id="store-item-price" class="font-weight-bold">${element.prix}</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>`;
  });
}

let localImage = [];
let cartChopingicon = document.querySelectorAll(".store-item-icon");
let cart = document.getElementById("cart");
let notification = document.querySelector(".notification");
cartInfo.addEventListener("click", function () {
  cart.classList.toggle("show-cart");
  cart.style.display = "block";
});

// Chargement des données du localStorage au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  // Assurez-vous que localImage est correctement stocké dans le localStorage
  localImage = JSON.parse(localStorage.getItem("cart")) || [];
  updateCart();
});

let item_count = document.getElementById("item-count");
let numbrePanier = parseInt(localStorage.getItem("valeureBtn") ?? "0");
item_count.textContent = `${numbrePanier}`;

function Incrementez() {
  // Obtenez la valeur actuelle et convertissez-la en nombre
  let currentCount = parseInt(item_count.innerHTML);
  // Vérifiez si la conversion a réussi
  if (!isNaN(currentCount)) {
    // Incrémentez la valeur et mettez à jour le contenu de l'élément
    item_count.textContent = (currentCount + 1).toString();
  }
  numbrePanier = item_count.textContent;
  localStorage.setItem("valeureBtn", numbrePanier);
  // console.log(item_count);
}


cartChopingicon.forEach((element, index) => {
  element.addEventListener("click", () => {
    let unique = tableImage[index];
    let id = unique.id;
    let verifierLAvariable = localImage.findIndex(item => item.id === id);
    if (verifierLAvariable !== -1) {
      localImage[verifierLAvariable].quantite++;
      localImage[verifierLAvariable].prix =  parseInt(unique.prix) * localImage[verifierLAvariable].quantite;
    } else {
      // Ajouter l'élément au tableau localImage
      localImage.push({
        id: unique.id,
        name: unique.name,
        photo: unique.photo,
        prix: parseInt(unique.prix),
        quantite: 1,
      });
      Incrementez();
    };
    notification.classList.remove("ajouter");
    setTimeout(() => {
      notification.classList.add("ajouter");
    }, 2000);
    
    // Mettre à jour le panier et sauvegarder dans le localStorage
    updateCart();
    saveCartToLocalStorage();
  });
});

function updateCart() {
  // Effacer le contenu actuel du panier
  cart.innerHTML = "";
  // Ajouter chaque élément au panier
  localImage.forEach((unique, indexPanier) => {
    cart.innerHTML += `
      <div class="cart-item d-flex justify-content-around text-capitalize my-3">
        <img src="${unique.photo}" class="img-fluid rounded-circle" id="item-img" alt="">
        <div class="item-text">
          <p id="cart-item-title" class="font-weight-bold mb-0">${unique.name} <span class="mb-0">${unique.quantite}:</span></p>
          
          <span>Prix: $</span>
          <span id="cart-item-price" class="cart-item-price mb-0">${unique.prix}</span>
        </div>
        <a href="#" class="cart-item-remove">
          <i class="fas fa-trash" onclick="deletePanier(${indexPanier})"></i>
        </a>
      </div>
    `;
  });

  // Ajouter le contenu HTML supplémentaire pour le total et les boutons
  cart.innerHTML += `
    <div class="cart-totol-container d-flex justify-content-around text-capitalize mt-5">
      <h5>total</h5>
      <h5>$ <strong id="cart-total" class="font-wieght-bold">00.00</strong></h5>
    </div>
    <!-- /// total -->
    <!-- cart buttons -->
    <div class="cart-buttons-container mt-3 d-flex justify-content-around">
      <a href="#" id="clear-cart" class="btn btn-black text-uppercase">clear cart</a>
      <a href="#" id="checkout" class="btn btn-pink text-uppercase">checkout</a>
    </div>
    <!-- ///cart buttons -->
  `;
  let clear_cart = document.getElementById("clear-cart");
  clear_cart.addEventListener("click", function () {
    cart.style.display = "none";
    localStorage.clear();
    window.location.reload();
  });
  // Addisioner les prix du pannier

  let totalAll = 0;
  let total = document.getElementById("cart-total");
  let prixe = document.querySelectorAll("#cart-item-price");
  let item_totolBtn = document.querySelector(".item-totol");
  prixe.forEach((result) => {
    let totalElement = JSON.parse(result.textContent);
    totalAll += totalElement;
    total.textContent = totalAll;
    item_totolBtn.textContent = totalAll;
  });
}


function deletePanier(indexPanier) {
  localImage.splice(indexPanier, 1);
  localStorage.setItem("cart", JSON.stringify(localImage));


  let localNumber = JSON.parse(localStorage.getItem("valeureBtn"));
  localNumber--
  item_count.textContent = `${localNumber}`;
  localStorage.setItem("valeureBtn", localNumber);
  updateCart();
  
}
function saveCartToLocalStorage() {
  // Sauvegarder localImage dans le localStorage
  localStorage.setItem("cart", JSON.stringify(localImage));
}
