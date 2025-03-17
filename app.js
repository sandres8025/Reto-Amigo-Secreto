//Array agrupa nombres de amigos
let amigos = [];
//Funcion para adicionar amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    //Verificar que no este vacio el espacio
if(nombreAmigo === "") {
    alert("Insertar nombre propio");
    return;
}
amigos.push(nombreAmigo);

actualizarLista();

inputAmigo.value = "";
inputAmigo.focus();
}
function actualizarLista(){
    const listaAmigosUl = document.getElementById("listaAmigos")
    listaAmigosUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos para sorteo, primero agrega nombre ");
        return
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;  
}

document.addEventListener('DOMContentLoaded',() => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});
