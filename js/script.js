
//Función para treare el archivo json de estuidantes.
function traerEstudiantes(){
  fetch("./js/pisos.json")
    .then(respuesta => respuesta.json())
    .then(datosEst =>{
      console.log("Se cargó correctamente.", datosEst);
            mostrarEstudiantes(datosEst);
        }).catch(error =>{
            console.log("Hay tremendo error, andá a revisarlo.", error.message);
        });
};
traerEstudiantes();
//var lista = [];
var tabla = ``;
//Función para mostrar los estudiantes en una tabla
function mostrarEstudiantes(datosEst){
    tabla=`
      <div class="row row-cols-1 row-cols-md-3 g-4">        `
          for(i=0; i <datosEst.length; i++){
              //datosEst[i]=estudiante; 
              //lista.push(datosEst[i])
              let estudiante = datosEst[i];
              tabla += `
              <div class="col-3">
                <div class="card h-100">
                  <img src="images/imagen.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${estudiante.Titulo}</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>`
            };
            //console.log(lista);
        tabla +=`
      </div>`
    document.getElementById("acaTabla").innerHTML =tabla;
};

/*
let inmobiliario = []
function traer(){
    fetch("./js/pisos.json")
        .then(respuesta => respuesta.json())
        .then(dataPisos =>{
            for (let piso of dataPisos) {
                inmobiliario.push(piso)   
            }
        }).catch(error =>{
            console.log(error.message);
        });
    }
traer()

let tabla = document.getElementById("prueba");
let targetas = ``;
for (let piso of inmobiliario) {
targetas = `
<div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${piso.Titulo}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
`;
tabla.innerHTML += targetas
}
*/