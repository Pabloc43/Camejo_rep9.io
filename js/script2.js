let botonLogin = document.getElementById("botonLogin").addEventListener("click", function (){
    guardarLocal()
});

function guardarLocal(){
    let login = document.getElementById("login").value;
    console.log(login);
    localStorage.setItem("login", login);
}    
document.getElementById("mostrar").innerHTML = localStorage.getItem("login");

