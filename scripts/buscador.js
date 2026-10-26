class paxina{
    constructor(link, nome, etiquetas){
        this.link = link;
        this.nome = nome;
        this.etiquetas = etiquetas;
    }
}

let paxinas = [];

let xhrBUSCADOR = new XMLHttpRequest();
xhrBUSCADOR.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) paxinas = JSON.parse(this.responseText);
}
if(window.location.href.includes("index")) xhrBUSCADOR.open("GET", "./scripts/paxinas.json", true);
else xhrBUSCADOR.open("GET", "../scripts/paxinas.json", true);
xhrBUSCADOR.send();

function buscar(){
    let url = "";

    if(window.location.href.includes("index")) url += "paginas/";

    let valor = document.getElementById("bb").value.toLowerCase();
    let lonxitude = valor.length;
    let aviso = true;

    if(lonxitude > 0){
        for(let i = 0; i < paxinas.length; i++){
            let paxina = paxinas[i];
            if(paxina.nome.toLowerCase().includes(valor)){
                url += paxinas[i].link;
                window.open(url.substring(0, url.indexOf("html") + 4), "_self");
                aviso = false;
            }
        }
        if(aviso) alert("Non se encontrou nada para isa búsqueda.");
    }else alert("Non se introduciu ningún parámetro de búsqueda.");
}

function mostarResultados(){
    let valor = document.getElementById("bb").value.toLowerCase();
    let mostrar = []
    let lonxitude = valor.length;

    if(lonxitude > 0){
        for(let i = 0; i < paxinas.length; i++){
            let paxina = paxinas[i];
            if(paxina.nome.toLowerCase().substring(0, lonxitude) == valor) if(!(mostrar.includes(paxina.nome))) mostrar.push(paxina.nome);
            for(let i = 0; i < paxina.etiquetas.length; i++) if(paxina.etiquetas[i].substring(0, lonxitude) == valor) if(!(mostrar.includes(paxina.nome))) mostrar.push(paxina.nome);
        }
    
        let engadir = "";
        for(let i = 0; i < mostrar.length; i++) engadir += "<li> - " + mostrar[i] + "<li>";
        document.getElementById("menuBusqueda").innerHTML = engadir;
    }else document.getElementById("menuBusqueda").innerHTML = "";
}

function enviarPeticion(link){
    fetch("https://6adfaf208e42963c8d5e498b.mockapi.io/peticion", {
        method: "POST",
        body: JSON.stringify({
            peticion: link,
            id: Date.now.toString
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

document.getElementById("bb").addEventListener("input", function(){mostarResultados()})
document.getElementById("buscador").addEventListener("click", function(){buscar()})
document.getElementById("bb").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) document.getElementById("buscador").click();
});

let links = Array.prototype.slice.call(document.getElementsByClassName("falsoLink"))
for (let index = 0; index < document.getElementsByClassName("falsoLink").length; index++) {
    links[index].addEventListener("click", function(){enviarPeticion(links[index].innerHTML)})
}