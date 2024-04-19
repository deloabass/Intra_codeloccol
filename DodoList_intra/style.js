let ajouterBtn = document.getElementById("ajouterBtn");
let modifierBtn = document.getElementById("modifierBtn");
let scrolTable = document.querySelector(".scrol");
let notification = document.querySelector(".end");
let notiPara = document.querySelector(".noti");
let bgTache = document.querySelector(".bgTache");
let formOutline = document.querySelectorAll(".Statut");
let myCharts;
let input_un = document.getElementById("form1");
let input_Deux = document.getElementById("form2");
let input_Tree = document.getElementById("form3");
let input_Description = document.getElementById("textAreaExample");
let input_Statut = document.querySelector(".form5");
let inputValue = [];
if (!localStorage.getItem("inputValue")) {
  localStorage.setItem("inputValue", JSON.stringify(inputValue));
}
function myNotification(message) {
  notiPara.innerHTML = message;
  notification.style.display = "block";
  notiPara.style.fontWeight = "bold";
  notiPara.style.color = "#000";
  setTimeout(() => {
    notification.style.display = "none";
  }, 4000);
}
inputValue = JSON.parse(localStorage.getItem("inputValue"));
ajouterBtn.addEventListener("click", () => {
  input_un = document.getElementById("form1");
  input_Deux = document.getElementById("form2");
  input_Tree = document.getElementById("form3");
  input_Description = document.getElementById("textAreaExample");
  input_Statut = document.querySelector(".form5");
  if (input_un.value == "" || input_Deux.value == "" || input_Tree.value == "" || input_Description.value == "" || input_Statut.value == "" ) {
    myNotification("Veuillez remplir tout les champs");
    return;
  } else {
    myNotification("L'enregistrement s'est bien été ajouté");
  }

  let contenu = {
    categorie: input_un.value,
    title: input_Deux.value,
    data: input_Tree.value,
    description: input_Description.value,
    status: input_Statut.value,
  };
  inputValue.push(contenu);
  localStorage.setItem("inputValue", JSON.stringify(inputValue));
  input_un.value = "";
  input_Deux.value = "";
  input_Tree.value = "";
  input_Description.value = "";
  input_Statut.value = "";
  afficheTable();
  updateChart();
});

function afficheTable() {
  scrolTable.innerHTML = "";
  inputValue.forEach((element, index) => {
    scrolTable.innerHTML += `
          <table class="table  nowraptr">
                <tbody>
                  <tr class="text-center btnCardTr">
                     <th class="bg-secondary col-1 text-light titre" onclick="myDescription(${index})">${index + 1}</th>
                     <th class="bg-secondary col-2 text-light titre" onclick="myDescription(${index})">${element.data}</th>
                     <th class="bg-secondary col-2  text-light titre" onclick="myDescription(${index})">${ element.title}</th>
                     <th class="bg-secondary col-3 text-light titre" onclick="myDescription(${index})">${element.categorie}</th>
                     <th class="bg-secondary text-nowrap gap-4 text-light ">
                      <span class="eyeIcon ms-5"><i class="ri-eye-line bg-info rounded fs-4"></i></span>
                      <span class="ms-2 modifier" onclick="myFunction(${index})"><i class="ri-pencil-line bg-turquoise rounded fs-4"></i></span>
                      <span class="ms-2" onclick="deleteFunction(${index})"><i class="ri-delete-bin-5-fill rounded fs-4 bg-danger"></i></span>
                    </th>
                  </tr>
                </tbody>
            </table>`;

    /*-----------------------------icon eyes-----------  */
    let eyeIcon = document.querySelectorAll(".eyeIcon");
    let visiBiliter = document.querySelector(".visibiliter");
    eyeIcon.forEach((iconClick) => {
      let icons = iconClick;
      icons.addEventListener("click", () => {
        if (visiBiliter.style.display === "none") {
          visiBiliter.style.display = "block";
        } else {
          visiBiliter.style.display = "none";
        }
        visiBiliter.innerHTML = "";
        visiBiliter.innerHTML += `
              <div class="text-center bg-danger text-light fs-4">
                    <p>Information </p>
                </div>
            <div class="d-flex justity-content-center mx-auto" id="cart">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                         <th class="text-success fs-5">Date</th>
                         <td>${element.data}</td>
                    </tr>
                    <tr>
                        <th class="text-success fs-5">Titre</th>
                        <td>${element.title}</td>
                    </tr>
                    <tr>
                        <th class="text-success fs-5">Categorie</th>
                        <td>${element.categorie}</td>
                    </tr>
                    <tr>
                        <th class="text-success fs-5">Description</th>
                        <td>${element.description}</td>
                    </tr>
                    <tr>
                        <th class="text-success fs-5">Statut</th>
                        <td>${element.status}</td>
                    </tr>
                  </thead>
                </table>
            </div>
        `;
      });
    });
  });
  updateChart();
}
afficheTable();

// desciption
let paraBiographie = document.querySelector(".paraBiographie");
function myDescription(index) {
  paraBiographie.textContent = `${inputValue[index].description}`;
}


function deleteFunction(index) {
  
  
  // Supprimer l'élément correspondant dans les données
  inputValue.splice(index, 1);
  // Mettre à jour les données dans le localStorage
  localStorage.setItem("inputValue", JSON.stringify(inputValue));
  afficheTable();
  updateChart();
  myNotification("Vous avez supprimier un élement de votre liste.");
    
}

/*-----------------------------icon Modify function 👇-----------  */
function myFunction(index) {
  modifierBtn.style.display = "block";
  ajouterBtn.style.display = "none";
  bgTache.style.backgroundColor = "#25ccf1";
  bgTache.style.color = "#FFF";
  console.log(inputValue[index].categorie, "cate", input_Deux.value);
  input_un.value = inputValue[index].categorie;
  input_Deux.value = inputValue[index].title;
  input_Tree.value = inputValue[index].data;
  input_Description.value = inputValue[index].description;
  input_Statut.value = inputValue[index].status;
  formOutline.forEach((elementplace) => {
    elementplace.style.display = "none";
  });
  modifierBtn.addEventListener("click", function () {
    modifierBtn.style.display = "none";
    ajouterBtn.style.display = "block";

    inputValue[index].categorie = input_un.value;
    inputValue[index].title = input_Deux.value;
    inputValue[index].data = input_Tree.value;
    inputValue[index].description = input_Description.value;
    inputValue[index].status = input_Statut.value;
    myNotification("La mise à jour s'est effectuée avec success ");
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
    updateChart();
    afficheTable();
    input_un.value = "";
    input_Deux.value = "";
    input_Tree.value = "";
    input_Description.value = "";
    input_Statut.value = "";
  });
}
function updateChart() {
  taskList = inputValue;
  const completedTasks = taskList.filter((task) => task.status === "Terminé").length;
  const enCourTasks = taskList.filter((task) => task.status === "En cours").length;
  const NewTasks = taskList.filter((task) => task.status === "Nouveau").length;
  const ctx = document.getElementById("myChart");
  if (myCharts) {
    myCharts.destroy();
  }
  myCharts = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Nouveau", "En cours", "Terminé"],

      datasets: [
        {
          data: [NewTasks, enCourTasks, completedTasks],
          backgroundColor: ["#58FFA4", "#4EC901", "#FFC20D"],
        },
      ],
    },
    options: {
      circumference: 360,
      rotation: 360,
      cutout: 0,
    },
  });
}
updateChart();
