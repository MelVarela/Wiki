class Mundo{
    constructor(nombre, bandera, superficie, poblacion, economia, enlace){
        this.nombre = nombre;
        this.bandera = bandera;
        this.superficie = superficie;
        this.poblacion = poblacion;
        this.economia = economia;
        this.enlace = enlace;
        this.densidad = this.calcularDensidad(poblacion, superficie);
    }

    calcularDensidad(poblacion, superficie){
        while(poblacion.includes("&nbsp")) poblacion = poblacion.replace("&nbsp","");
        while(superficie.includes("&nbsp")) superficie = superficie.replace("&nbsp","");

        return Math.floor(poblacion / superficie);
    }

    getSuperficie(){
        let superf = this.superficie;
        while(superf.includes("&nbsp")) superf = superf.replace("&nbsp","");

        return Number.parseInt(superf);
    }

    getPoblacion(){
        let pob = this.poblacion;
        while(pob.includes("&nbsp")) pob = pob.replace("&nbsp","");

        return Number.parseInt(pob);
    }

    getEconomia(){
        let eco = this.economia;
        while(eco.includes("&nbsp")) eco = eco.replace("&nbsp","");
        
        return Number.parseInt(eco.substring(0, (eco.length - 4)));
    }
}

let nombreB = false;
let superficieB = false;
let poblacionB = false;
let densidadB = false;
let economiaB = false;

let lista = [];

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        mundos = JSON.parse(this.responseText);
        for(let i = 0; i < mundos.length; i++) lista.push(new Mundo(mundos[i].nombre, mundos[i].bandera, mundos[i].superficie, mundos[i].poblacion, mundos[i].economia, mundos[i].enlace));
    }
}
xhr.open("GET", "../scripts/mundos.json", false);
xhr.send();

function primeraFila(){
    let linea = document.createElement("tr");
    linea.setAttribute("id", "cabeza");

    let c1 = document.createElement("td");
    c1.innerHTML = "<button onclick=\"nombre()\">Nome</button>";

    let c2 = document.createElement("td");
    c2.innerHTML = "<button onclick=\"bandera()\">Bandeira</button>";

    let c3 = document.createElement("td");
    c3.innerHTML = "<button onclick=\"superficie()\">Superficie</button>";

    let c4 = document.createElement("td");
    c4.innerHTML = "<button onclick=\"poblacion()\">Poboación</button>";

    let c5 = document.createElement("td");
    c5.innerHTML = "<button onclick=\"densidad()\">Densidade</button>"

    let c6 = document.createElement("td");
    c6.innerHTML = "<button onclick=\"economia()\">Economía<br/>(Mil millóns)</button>"

    linea.appendChild(c1);
    linea.appendChild(c2);
    linea.appendChild(c3);
    linea.appendChild(c4);
    linea.appendChild(c5);
    linea.appendChild(c6);

    document.getElementById("mundos").appendChild(linea);
}

function nombre(){
    let copia = []

    if(nombreB){
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.nombre < b.nombre) return 1;
            else if(a.nombre > b.nombre) return -1;
            return 0;})
        cambiar("nombreB");
    }else{
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.nombre < b.nombre) return -1;
            else if(a.nombre > b.nombre) return 1;
            return 0;})
        cambiar("nombreB");
    }

    ordenar(copia);
}

function bandera(){
    ordenar(lista);
}

function superficie(){
    let copia = []

    if(superficieB){
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.getSuperficie() < b.getSuperficie()) return -1;
            else if(a.getSuperficie() > b.getSuperficie()) return 1;
            return 0;})
        cambiar("superficieB");
    }else{
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.getSuperficie() < b.getSuperficie()) return 1;
            else if(a.getSuperficie() > b.getSuperficie()) return -1;
            return 0;})
        cambiar("superficieB");
    }

    ordenar(copia);
}

function poblacion(){
    let copia = []

    if(poblacionB){
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.getPoblacion() < b.getPoblacion()) return -1;
            else if(a.getPoblacion() > b.getPoblacion()) return 1;
            return 0;})
        cambiar("poblacionB");
    }else{
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.getPoblacion() < b.getPoblacion()) return 1;
            else if(a.getPoblacion() > b.getPoblacion()) return -1;
            return 0;})
        cambiar("poblacionB");
    }

    ordenar(copia);
}

function densidad(){
    let copia = []

    if(densidadB){
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.densidad < b.densidad) return -1;
            else if(a.densidad > b.densidad) return 1;
            return 0;})
        cambiar("densidadB");
    }else{
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.densidad < b.densidad) return 1;
            else if(a.densidad > b.densidad) return -1;
            return 0;})
        cambiar("densidadB");
    }

    ordenar(copia);
}

function economia(){
    let copia = []
    
    if(economiaB){
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.getEconomia() < b.getEconomia()) return -1;
            else if(a.getEconomia() > b.getEconomia()) return 1;
            return 0;})
        cambiar("economiaB");
    }else{
        for(let i = 0; i < lista.length; i++) copia[i] = lista[i];
        copia.sort((a, b) =>{
            if(a.getEconomia() < b.getEconomia()) return 1;
            else if(a.getEconomia() > b.getEconomia()) return -1;
            return 0;})
        cambiar("economiaB");
    }

    ordenar(copia);
}

function ordenar(listado){
    document.getElementById("mundos").innerHTML = "";

    primeraFila();

    for(let i = 0; i < listado.length; i++){
        let linea = document.createElement("tr");
        linea.setAttribute("id", "contenido");

        let c1 = document.createElement("td");
        c1.innerHTML = "<a href=" + listado[i].enlace + ">" + listado[i].nombre + "</a>";

        let c2 = document.createElement("td");
        c2.innerHTML = "<img src=" + listado[i].bandera + " width=\"200\"/>";

        let c3 = document.createElement("td");
        c3.innerHTML = listado[i].superficie + "&nbspKm2";

        let c4 = document.createElement("td");
        c4.innerHTML = listado[i].poblacion;

        let c5 = document.createElement("td");
        c5.innerHTML = listado[i].densidad + "&nbspHab/km2";

        let c6 = document.createElement("td");
        c6.innerHTML = listado[i].economia +"&nbspCC";

        linea.appendChild(c1);
        linea.appendChild(c2);
        linea.appendChild(c3);
        linea.appendChild(c4);
        linea.appendChild(c5);
        linea.appendChild(c6);

        document.getElementById("mundos").appendChild(linea);
    }
}

function cambiar(cambio){

if(cambio == "nombreB"){
    nombreB = !nombreB;
    superficieB = false;
    poblacionB = false;
    densidadB = false;
    economiaB = false;
}
if(cambio == "superficieB"){
    nombreB = false;
    superficieB = !superficieB;
    poblacionB = false;
    densidadB = false;
    economiaB = false;
}
if(cambio == "poblacionB"){
    nombreB = false;
    superficieB = false;
    poblacionB = !poblacionB;
    densidadB = false;
    economiaB = false;
}
if(cambio == "densidadB"){
    nombreB = false;
    superficieB = false;
    poblacionB = false;
    densidadB = !densidadB;
    economiaB = false;
}
if(cambio == "economiaB"){
    nombreB = false;
    superficieB = false;
    poblacionB = false;
    densidadB = false;
    economiaB = !economiaB;
}
}

document.addEventListener("DOMContentLoaded", ordenar(lista), false);

let pobo = 0;
let supe = 0;

for(let i = 0; i < lista.length; i++) pobo += lista[i].getPoblacion();
for(let i = 0; i < lista.length; i++) supe += lista[i].getSuperficie();

let dens = (Math.floor(pobo / supe) + " hab/Km2");

document.getElementById("pobo").innerHTML = formatear(pobo.toString());
document.getElementById("supe").innerHTML = formatear(supe.toString()) + "&nbspKm2";
document.getElementById("dens").innerHTML = dens;

function formatear(texto){
    let reversa = texto.split("");
    reversa.reverse();
    let devolver = reversa.toString();
    let numero = [];

    while(devolver.includes(",")) devolver = devolver.replace(",", "");

    for(let i = 1; i < (devolver.length + 1); i++) if(i % 3 == 0) numero.push(devolver.substring(i - 3, i));
    if(devolver.length % 3 != 0){
        if(devolver.length % 3 == (1 / 3)) numero.push(devolver.substring(devolver.length - 2, devolver.length));
        else numero.push(devolver.substring(devolver.length - 1, devolver.length))
    }

    numero.reverse();

    for(let i = 0; i < numero.length; i++){
        let volta = "";
        if(numero[i][2] != undefined) volta += numero[i][2];
        if(numero[i][1] != undefined) volta += numero[i][1];
        volta += numero[i][0];
        volta += "&nbsp";

        numero[i] = volta;
    }

    numero[numero.length - 1] = numero[numero.length - 1].replace("&nbsp","");

    devolver = numero.toString();

    while(devolver.includes(",")) devolver = devolver.replace(",","");

    return devolver;

}