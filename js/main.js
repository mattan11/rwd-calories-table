const values = [
  {
    name: "Ananas",
    calories: 33,
    fat: 0,
    carbs: 11.8
  },
  {
    name: "Jabłko",
    calories: 57,
    fat: 0.7,
    carbs: 12.1
  },
  {
    name: "Pomarańcza",
    calories: 51,
    fat: 0.2,
    carbs: 11.3
  },
  {
    name: "Wiśnia",
    calories: 67,
    fat: 0.4,
    carbs: 14.6
  }
];

const valuesContainer = document.querySelector(".app--values");

const desktopViewport = window.matchMedia("screen and (min-width: 500px)");

const drawValues = isDesktop => {
  if (isDesktop) {
    drawDesktopValues();
  } else {
    drawMobileValues();
  }
};

const drawMobileValues = () => {
  valuesContainer.innerHTML = "";

  let list = document.createElement("ul");

  values.forEach(value => {
    let element = document.createElement("li");

    let name = document.createElement("div");
    name.innerHTML = `<strong>Nazwa: </strong>${value.name}`;

    let calories = document.createElement("div");
    calories.innerHTML = `<strong>Kalorie: </strong>${value.calories}`;

    let fat = document.createElement("div");
    fat.innerHTML = `<strong>t=Tłuszcz: </strong>${value.fat}`;

    let carbs = document.createElement("div");
    carbs.innerHTML = `<strong>Węglowodany: </strong>${value.carbs}`;

    element.appendChild(name);
    element.appendChild(calories);
    element.appendChild(fat);
    element.appendChild(carbs);

    list.appendChild(element);
  });

  valuesContainer.appendChild(list);
};

const drawDesktopValues = () => {
  //czyszczenie kontenera
  valuesContainer.innerHTML = "";

  //tworzenie tabeli
  let table = document.createElement("table");
  //nagłówki
  let thead = document.createElement("thead");
  thead.innerHTML =
    "<tr> <th>Nazwa</th> <th>Kalorie</th> <th>Tłuszcz</th> <th>Węglowodany</th> </tr>";
  //wartości w tablicy
  let tbody = document.createElement("tbody");

  values.forEach(value => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${value.name}</td> <td>${value.calories}</td> <td>${value.fat}</td> <td>${value.carbs}</td>`;
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  valuesContainer.appendChild(table);
};
// .matches sprawdza czy warunek w zmiennej desktopViewport.matchMedia(min-width: 500px) jest prawdziwy, jeżeli tak zwróci true i zostanie przekazane do funkcji drawValues. Zostanie sprawdzony warunek isDesktop = true i odpalona zostanie odpowiednia funkcja
drawValues(desktopViewport.matches);

//aktywne sprawdzanie czy szerokość ekranu jest większa niż 500px, do isDesktop.matches zostanie przekazane true or false i wykonana funkcja drawValues z odpowiednim warunkiem. Render wykonuje się tylko przy przekroczeniu punktu krytycznego
desktopViewport.addListener(isDesktop => {
  drawValues(isDesktop.matches);
});

//ta sama funkcja inna metoda, tabela renderuje się za każdą minimalną zmianą szerokości okna
// window.addEventListener("resize", () => {
//   if (window.innerWidth < 500) {
//     drawMobileValues();
//   } else {
//     drawDesktopValues();
//   }
// });
