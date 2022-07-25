const propertiesArray = [
  {
    name: "Brandarkun",
    description: "Relajante castillo gótico",
    src: "/assets/img/brandarkun.jpg",
    rooms: 2,
    meters: 170,
  },
  {
    name: "Castle Sol",
    description: "Lugar de descanso ideal para el guerrero más intrepido",
    src: "/assets/img/castlesol.jpg",
    rooms: 2,
    meters: 130,
  },
  {
    name: "Castle Dracul",
    description: "Disfrutará de este castillo... por toda la eternidad",
    src: "/assets/img/draculacastle.jpg",
    rooms: 1,
    meters: 80,
  },
  {
    name: "Leap",
    description: "La joya de Irlanda",
    src: "/assets/img/leap.jpg",
    rooms: 1,
    meters: 6,
  },
  {
    name: "Minas Morgul",
    description: "La legendaria Torre de Morgul",
    src: "/assets/img/minasmorgul.jpg",
    rooms: 3,
    meters: 200,
  },
  {
    name: "Wyrn Tower",
    description: "Indescriptible maravilla de la arquitectura",
    src: "/assets/img/wyrntower.jpg",
    rooms: 5,
    meters: 500,
  },
  {
    name: "Xasthburg",
    description:
      "Posiblemente el edificio con más almas en pena jamás construido",
    src: "/assets/img/xasthburg.jpg",
    rooms: 3,
    meters: 900,
  },
];

const showData = document.querySelector(".properties");
const filterBtn = document.querySelector("#filterBtn");
const counter = document.querySelector("#totalProperties");

let htmlCode = "";

const template = (property) => {
  console.log(property);
  return `
    <div class="card" style="background-image: url(${property.src})">
    <div class="cardContainer">
      <h4><b>${property.name}</b></h4> 
      <p>Cuartos: ${property.rooms}</p> 
      <p>m2: ${property.meters}</p> 
      <p>${property.description}</p> 
    </div>
  </div>`;
};

const pageLoad = () => {
  for (const property of propertiesArray) {
    htmlCode += template(property);
  }
  showData.innerHTML += htmlCode;
  counter.innerHTML = propertiesArray.length;
};

const searchFilter = (minMeters, maxMeters, numRooms) => {
  htmlCode = "";
  let searchResultItems = [];

  for (const property of propertiesArray) {
    if (
      minMeters <= property.meters &&
      maxMeters >= property.meters &&
      property.rooms >= numRooms
    ) {
      htmlCode += template(property);
      searchResultItems.push(property);
    }
  }

  if (searchResultItems.length > 0) {
    showData.innerHTML = htmlCode;
    counter.innerHTML = searchResultItems.length;
  } else {
    showData.innerHTML = `<div class="property"><h2>NO DISPONEMOS DE PROPIEDADES CON ESTAS CARACTERÍSTICAS</h2></div>`;
    counter.innerHTML = searchResultItems.length;
  }
};

const validation = () => {
  let numRooms = Number(document.querySelector("#numRooms").value);
  let minMeters = Number(document.querySelector("#minMeters").value);
  let maxMeters = Number(document.querySelector("#maxMeters").value);

  if (numRooms != "" && minMeters != "" && maxMeters != "") {
    searchFilter(minMeters, maxMeters, numRooms);
  } else {
    alert("¡Debe rellenar todos los campos!");
  }
};

filterBtn.addEventListener("click", validation);

window.onload = function () {
  pageLoad();
};
