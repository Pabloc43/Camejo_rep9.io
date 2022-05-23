
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
buscarPartner(botonC)
/*
var botonPlata = document.getElementById("botonPlata");
var botonHabitaciones = document.getElementById("botonHabitaciones");
var botonTipo = document.getElementById("botonTipo");
var botonMetros = document.getElementById("botonMetros");
var botonBarrio = document.getElementById("botonBarrio");
var botonAlquiler = document.getElementById("botonAlquiler");
*/
// var botonT = document.getElementById("botonTipo");

// function ordenarTipo(){
//    let tarjeta = [];
//     var listaFiltrada = tarjeta.filter(inmueble => {for(i=0; i<tarjeta.length; i++){
//         inmueble[i].tipo = "Casa" 
//      }});
//     console.log(listaFiltrada)
//     mostrarCasa(listaFiltrada)

/* botonT.addEventListener("click",ordenarTipo)
function ordenarBarrio(){
    listaFiltrada = tarjeta.filter(function(anterior,siguiente){
        if(anterior.barrio > siguiente.barrio){
            return 1;
        }
        if(anterior.barrio < siguiente.barrio){
            return -1
        }
        return 0;
    })
    mostrarCasa(listado)
} *//*
var botonT = document.getElementById("botonTipo");

function ordenarTipo(){
    fetch("api.json")
        .then(res=> res.json())
        .then(data =>{
            let listaFiltrada = [];
            for(i=0; i< data.length; i++){
                if(data[i].tipo == "Casa" && botonT.value=="Casa"){
                    listaFiltrada.push(data[i])
                } else if (data[i].tipo == "Apartamento" && botonT.value=="Apartamento"){
                    listaFiltrada.push(data[i])
                }
            }
        console.log(listaFiltrada)
        mostrarCasa(listaFiltrada) 
    });
}
botonT.addEventListener("click",ordenarTipo);

var botonI = document.getElementById("botonInteres")
function ordenarInteres(){
    fetch("api.json")
        .then(res=> res.json())
        .then(data =>{
            let listaFiltradaI = [];
            for(i=0; i< data.length; i++){
                if(data[i].interes == "alquiler" && botonI.value == "alquiler"){
                    listaFiltradaI.push(data[i])
                } else if (data[i].interes == "venta" && botonI.value == "venta"){
                    listaFiltradaI.push(data[i])
                }
            }
        console.log(listaFiltradaI)
        mostrarCasa(listaFiltradaI)
    });
}
botonI.addEventListener("click",ordenarInteres)

var botonB = document.getElementById("botonBarrio")
function ordenarBarrio(){
    fetch("api.json")
        .then(res => res.json())
        .then(data =>{
            let listaFiltradaB = [];
            for(i=0; i< data.length; i++){
                if(data[i].barrio == "Cerro" && botonB.value == "Cerro"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Casabo" && botonB.value == "Casabo"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Ciudad Vieja" && botonB.value == "Ciudad Vieja"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Pocitos" && botonB.value == "Pocitos"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Aguada" && botonB.value == "Aguada"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Buceo" && botonB.value == "Buceo"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Punta Carretas" && botonB.value == "Punta Carretas"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Parque Rodo" && botonB.value == "Parque Rodo"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Centro" && botonB.value == "Centro"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Artigas" && botonB.value == "Artigas"){
                    listaFiltradaB.push(data[i])
                }
            }
            console.log(listaFiltradaB)
            mostrarCasa(listaFiltradaB)
        })
}
botonB.addEventListener("click", ordenarBarrio)


/* boton.barrio.addEventListener("click",ordenarBarrio)
boton.interes.addEventListener("click",ordenarInteres) */


/* var botonEnviar = document.getElementById("botonEnviar");
var listado = [];

function guardaDatos (){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var curso = document.getElementById("curso").value;

    function persona(nombre, apellido, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = curso;
    }
    var personasIngresadas = new persona (nombre, apellido, curso);
    listado.push(personasIngresadas);
    document.getElementById("form").reset();
    tabla(listado);
    console.log(listado)
}
botonEnviar.addEventListener("click", guardaDatos);

function tabla(listado){
    var tabla = `
    <table class = "table table-dark table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Curso</th>
            </tr>
            </thead>
            <tbody>`
            for(let i=0; i < listado.length; i++){
                var fila = listado[i];
                tabla += `
                <tr>
                <td>${fila.nombre}</td>
                <td>${fila.apellido}</td>
                <td>${fila.curso}</td>
                </tr>`
            }
            tabla += `
            </tbody>
            </table>`
            document.getElementById("tabla").innerHTML = tabla;
        }
 */

