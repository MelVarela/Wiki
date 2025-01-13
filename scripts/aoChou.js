let paxinas = [];

let xhrCHOU = new XMLHttpRequest();
xhrCHOU.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) paxinas = JSON.parse(this.responseText);

    let tamaño = paxinas.length;
    let resultado = Math.round(Math.random() * tamaño);
    window.open(paxinas[resultado].link, "_self");
}
if(window.location.href.includes("index")) xhrCHOU.open("GET", "./scripts/paxinas.json", true);
else xhrCHOU.open("GET", "../scripts/paxinas.json", true);
xhrCHOU.send();