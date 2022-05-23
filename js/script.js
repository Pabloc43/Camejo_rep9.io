
//Función para treare el archivo json de estuidantes.
function traerPisos(){
  fetch("./js/pisos.json")
    .then(respuesta => respuesta.json())
    .then(datosPisos =>{
      console.log("Se cargó correctamente.", datosPisos);
            mostrarEstudiantes(datosPisos);
        }).catch(error =>{
            console.log("Hay tremendo error, andá a revisarlo.", error.message);
        });
};
traerPisos();
var tabla = ``;

//Función para mostrar los inmuebles en una galeria de cartas
function mostrarEstudiantes(datosPisos){
    tabla=`
      <div class="row row-cols-1 row-cols-md-3 g-4">        `
          for(i=0; i <datosPisos.length; i++){
              let piso = datosPisos[i];
              tabla += `
              <div class="col col-md-4 col-lg-3 col-12">
                <div class="card h-100">
                  <button class="w-25 position-absolute">${piso.TipoTramite}</button>
                  <img src="../images/${piso.ImagenSRC}" class="card-img-top" alt="...">
                  <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h4 class="card-title">${piso.Titulo}</h4>
                      <h4>$${piso.Precio}</h4>
                    </div>
                    <p>${piso.Barrio}               
                  </div>
                  <div class="card-footer flex-row d-flex justify-content-between">
                    <p>${piso.TipoResidencia}</p>
                    <p>${piso.Habitaciones} Habitaciones - ${piso.m2}m2</p>  
                  </div>
                </div>
              </div>`
            };
        tabla +=`
      </div>`
    document.getElementById("acaTabla").innerHTML = tabla;
};

