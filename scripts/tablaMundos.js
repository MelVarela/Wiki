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
        while(poblacion.includes("&nbsp")){
            poblacion = poblacion.replace("&nbsp","");
        }
        while(superficie.includes("&nbsp")){
            superficie = superficie.replace("&nbsp","");
        }

        return Math.floor(poblacion / superficie);
    }

    getSuperficie(){
        let superf = this.superficie;
        while(superf.includes("&nbsp")){
            superf = superf.replace("&nbsp","");
        }

        return superf;
    }

    getPoblacion(){
        let pob = this.poblacion;
        while(pob.includes("&nbsp")){
            pob = pob.replace("&nbsp","");
        }

        return pob;
    }

    getEconomia(){
        let eco = this.economia;
        while(eco.includes("&nbsp")){
            eco = eco.replace("&nbsp","");
        }
        
        return eco.substring(0, (eco.length - 4));
    }
}

let nombreB = false;
let superficieB = false;
let poblacionB = false;
let densidadB = false;
let economiaB = false;

let terra = new Mundo("Terra","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/200px-International_Flag_of_Planet_Earth.svg.png", "510&nbsp072&nbsp000","73&nbsp854&nbsp623&nbsp327","37&nbsp554&nbsp532,236","terra.html");
let marte = new Mundo("Marte","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_the_Martian_Congressional_Republic.svg/220px-Flag_of_the_Martian_Congressional_Republic.svg.png", "48&nbsp160&nbsp000", "3&nbsp234&nbsp389&nbsp194", "798&nbsp452,837","marte.html")

let lista = [terra, marte];

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
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.nombre < b.nombre){
                return 1;
            }else if(a.nombre < b.nombre){
                return -1;
            }
            return 0;})
        cambiar("nombreB");
    }else{
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.nombre < b.nombre){
                return -1;
            }else if(a.nombre < b.nombre){
                return 1;
            }
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
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.getSuperficie() < b.getSuperficie()){
                return -1;
            }else if(a.getSuperficie() < b.getSuperficie()){
                return 1;
            }
            return 0;})
        cambiar("superficieB");
    }else{
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.getSuperficie() < b.getSuperficie()){
                return 1;
            }else if(a.getSuperficie() < b.getSuperficie()){
                return -1;
            }
            return 0;})
        cambiar("superficieB");
    }

    ordenar(copia);
}

function poblacion(){
    let copia = []

    if(poblacionB){
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.getPoblacion() < b.getPoblacion()){
                return -1;
            }else if(a.getPoblacion() < b.getPoblacion()){
                return 1;
            }
            return 0;})
        cambiar("poblacionB");
    }else{
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.getPoblacion() < b.getPoblacion()){
                return 1;
            }else if(a.getPoblacion() < b.getPoblacion()){
                return -1;
            }
            return 0;})
        cambiar("poblacionB");
    }

    ordenar(copia);
}

function densidad(){
    let copia = []

    if(densidadB){
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.densidad < b.densidad){
                return -1;
            }else if(a.densidad < b.densidad){
                return 1;
            }
            return 0;})
        cambiar("densidadB");
    }else{
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.densidad < b.densidad){
                return 1;
            }else if(a.densidad < b.densidad){
                return -1;
            }
            return 0;})
        cambiar("densidadB");
    }

    ordenar(copia);
}

function economia(){
    let copia = []
    
    if(economiaB){
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(Number.parseInt(a.getEconomia()) < Number.parseInt(b.getEconomia())){
                return -1;
            }else if(Number.parseInt(a.getEconomia()) < Number.parseInt(b.getEconomia())){
                return 1;
            }
            return 0;})
        cambiar("economiaB");
    }else{
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(Number.parseInt(a.getEconomia()) < Number.parseInt(b.getEconomia())){
                return 1;
            }else if(Number.parseInt(a.getEconomia()) < Number.parseInt(b.getEconomia())){
                return -1;
            }
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