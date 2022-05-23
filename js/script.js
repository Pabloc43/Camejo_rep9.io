
//Función para treare el archivo json de estuidantes.
let pisos;
function traerPisos(){
  fetch("./js/pisos.json")
    .then(respuesta => respuesta.json())
    .then(datosPisos =>{
      console.log("Se cargó correctamente.", datosPisos);
            mostrarCasas(datosPisos);
            pisos = datosPisos
        }).catch(error =>{
            console.log("Hay tremendo error, andá a revisarlo.", error.message);
        });
};
traerPisos();
let tabla = ``;

//Función para mostrar los inmuebles en una galeria de cartas
function mostrarCasas(datosPisos){
    tabla=`
      <div class="row row-cols-1 row-cols-md-3 g-4">        `
          for(i=0; i <datosPisos.length; i++){
              let piso = datosPisos[i];
              tabla += `
              <div class="col col-md-4 col-lg-3 col-12">
                <div class="card h-100">
                  <button class="w-25 position-absolute">${piso.TipoTramite}</button>
                  <img src="${piso.ImagenSRC}" class="card-img-top" alt="...">
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


//Partes de busqueda


//Busqueda por palabra
let botonBusc = document.getElementById("buscar");
botonBusc = document.getElementById("buscar");
botonBusc.addEventListener("click", function (){
  buscar();
})

function buscar(){
  let coincidencia = document.getElementById("buscador").value;
  let filtrada = pisos.filter(x => x.Titulo.toLowerCase().indexOf(coincidencia.toLowerCase()) > -1);
  mostrarCasas(filtrada);
}


//Busqueda por Partner
let botonGE = document.getElementById("GE");
let botonSM = document.getElementById("SM");
let botonB = document.getElementById("B");
let botonH = document.getElementById("H");
let botonC = document.getElementById("C");

function buscarPartner(boton){
  boton.addEventListener("click", function (){
    buscarPorPartner(boton)
  })
}

function buscarPorPartner(boton){
  let filtrada = pisos.filter(x => (x.Auspiciantes == boton.id));
  mostrarCasas(filtrada)
}

buscarPartner(botonGE);
buscarPartner(botonSM);
buscarPartner(botonB);
buscarPartner(botonH);
buscarPartner(botonC);


//Busqueda por tipo
let tipo1 = document.getElementById("tipo1");
let tipo2 = document.getElementById("tipo2");
let tipo3 = document.getElementById("tipo3");

function buscarTipo(tipo){
    tipo.addEventListener("click", function (){
        buscarPorTipo(tipo)
    })
};

function buscarPorTipo(tipo){
    let filtrada = pisos.filter(x => x.TipoResidencia == tipo.text);
    mostrarCasas(filtrada)
};

buscarTipo(tipo1);
buscarTipo(tipo2);
buscarTipo(tipo3);


//Busqueda por lugar
let lugar1 = document.getElementById("lugar1");
let lugar2 = document.getElementById("lugar2");
let lugar3 = document.getElementById("lugar3");
let lugar4 = document.getElementById("lugar4");
let lugar5 = document.getElementById("lugar5");

function buscarLugar(lugar){
    lugar.addEventListener("click", function (){
        buscarPorLugar(lugar)
    })
};

function buscarPorLugar(lugar){
    let filtrada = pisos.filter(x => x.Barrio == lugar.text);
    mostrarCasas(filtrada)
};

buscarLugar(lugar1);
buscarLugar(lugar2);
buscarLugar(lugar3);
buscarLugar(lugar4);
buscarLugar(lugar5);


//Busqueda por intereses
let interes1 = document.getElementById("interes1");
let interes2 = document.getElementById("interes2");

function buscarInteres(interes){
    interes.addEventListener("click", function (){
        buscarPorInteres(interes)
    })
};

function buscarPorInteres(interes){
    let filtrada = pisos.filter(x => x.TipoTramite == interes.text);
    mostrarCasas(filtrada)
};

buscarInteres(interes1);
buscarInteres(interes2);


//Busqueda por precios
let precioRango = document.getElementById("precioRango");
let min = 0;
let max;

precioRango.addEventListener("click", function (){
    min = parseInt(document.getElementById("min").value);
    max = parseInt(document.getElementById("max").value);
    buscarPorPrecio(min, max)
})

function buscarPorPrecio(min, max){
    let filtrada1 = pisos.filter(x => x.Precio >= min);
    let filtrada2 = filtrada1.filter(x => x.Precio <= max)
    mostrarCasas(filtrada2)
};


//Busqueda por habitaciones
//Busqueda por Dimensiones
