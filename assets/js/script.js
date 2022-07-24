const propertiesArray = [
  {
    nombre: "Brandarkun",
    descripcion: "Relajante castillo gótico",
    src: "/assets/img/brandarkun.jpg",
    cuartos: 2,
    metros: 170,
  },
  {
    nombre: "Castle Sol",
    descripcion: "Lugar de descanso ideal para el guerrero más intrepido",
    src: "/assets/img/castlesol.jpg",
    cuartos: 2,
    metros: 130,
  },
  {
    nombre: "Castle Dracul",
    descripcion: "Disfrutará de este castillo... por toda la eternidad",
    src: "/assets/img/draculacastle.jpg",
    cuartos: 1,
    metros: 80,
  },
  {
    nombre: "Leap",
    descripcion: "La joya de Irlanda",
    src: "/assets/img/leap.jpg",
    cuartos: 1,
    metros: 6,
  },
  {
    nombre: "Minas Morgul",
    descripcion: "La legendaria Torre de Morgul",
    src: "/assets/img/minasmorgul.jpg",
    cuartos: 3,
    metros: 200,
  },
  {
    nombre: "Wyrn Tower",
    descripcion: "Indescriptible maravilla de la arquitectura",
    src: "/assets/img/wyrntower.jpg",
    cuartos: 5,
    metros: 500,
  },
  {
    nombre: "Xasthburg",
    descripcion:
      "Posiblemente el edificio con más almas en pena jamás construido",
    src: "/assets/img/xasthburg.jpg",
    cuartos: 3,
    metros: 900,
  },
];

const minMeters = document.querySelector("#minMeters");
const maxMeters = document.querySelector("#maxMeters");
const numRooms = document.querySelector("#numRooms");

const filterBtn = document.querySelector("#filterBtn");

const properties = document.querySelector(".properties");
const totalProperties = document.querySelector("#totalProperties");

let htmlCode = ``;
let counter = 0;

function template(a = true, b = true, c = true) {
  let counter = 0;
  let htmlCode = "";

  propertiesArray.forEach(function (singlePropertyObject) {
    if (
      (a == true && b == true && c == true) ||
      (singlePropertyObject.metros >= a &&
        singlePropertyObject.metros <= b &&
        singlePropertyObject.cuartos == c)
    ) {
      htmlCode =
        htmlCode +
        `
    <div class="card" style="background-image: url(${singlePropertyObject.src})">
    <div class="cardContainer">
      <h4><b>${singlePropertyObject.nombre}</b></h4> 
      <p>Cuartos: ${singlePropertyObject.cuartos}</p> 
      <p>m2: ${singlePropertyObject.metros}</p> 
      <p>${singlePropertyObject.descripcion}</p> 
    
    </div>
  </div>`;
      counter++;
    }
  });

  properties.innerHTML = htmlCode;
  totalProperties.innerHTML = counter;
}

template();

filterBtn.addEventListener("click", () => {
  let metersMin = minMeters.value;
  let metersMax = maxMeters.value;
  let totalRooms = numRooms.value;

  if (
    minMeters.value === "" ||
    maxMeters.value === "" ||
    numRooms.value === ""
  ) {
    alert("Por favor rellene todos los campos");
  } else {
    template(metersMin, metersMax, totalRooms);
  }
});
