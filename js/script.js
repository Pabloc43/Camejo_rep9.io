
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
              <div class="col col-md-4 col-lg-3 col-12">
                <div class="card h-100">
                  <button class="w-25 position-absolute">${estudiante.TipoTramite}</button>
                  <img src="${estudiante.ImagenSRC}" class="card-img-top" alt="...">
                  <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h4 class="card-title">${estudiante.Titulo}</h4>
                      <h4>$${estudiante.Precio}</h4>
                    </div>
                    <p>${estudiante.Barrio}               
                  </div>
                  <div class="card-footer flex-row d-flex justify-content-between">
                    <p>${estudiante.TipoResidencia}</p>
                    <p>${estudiante.Habitaciones} Habitaciones - ${estudiante.m2}m2</p>  
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