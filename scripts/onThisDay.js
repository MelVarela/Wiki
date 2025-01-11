let fecha = new Date();

let meses = ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Septembro", "Outubro", "Novembro", "Decembro"];
let mes = meses[fecha.getMonth()];

let fechaLegible = "Hoxe é " + fecha.getDate() + " de " + mes + " de " + (fecha.getFullYear() + 600) + "<hr/>";

document.getElementById("inputFecha").innerHTML = fechaLegible;

let fechaCalculo = fecha.getDate() + " " + (fecha.getMonth() + 1) + " " + (fecha.getFullYear() + 600);

class Data{
    constructor(data, tipo, afectado, descripcion, articulo){
        this.data = data;
        this.tipo = tipo;
        /*
            N: Nace
            M: Muere
            C: Comeza
            F: Finaliza
            S: Sucede
        */
        this.afectado = afectado;
        this.descripcion = descripcion;
        this.articulo = articulo;
    }
}

let datas = [];
let text = "<ul>";
let separacionCalculo = fechaCalculo.split(" ");

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) datas = JSON.parse(this.responseText);

    for(i = 0; i < datas.length; i++){
        let separacion = datas[i].data.split(" ");
        if((separacion[0] == separacionCalculo[0]) && (separacion[1] == separacionCalculo[1])) procesar(datas[i], separacion[2]);
    }
    
    document.getElementById("eventos").innerHTML = (text + "</ul>");
}
xhr.open("GET", "./scripts/datas.json", true);
xhr.send();

function procesar(fecha, año){

    let date = new Date();

    switch(fecha.tipo){
        case "N":
            text += "<li>Nace ";
            break;
        case "M":
            text += "<li>Morre ";
            break;
        case "C":
            text += "<li>Comeza ";
            break;
        case "F":
            text += "<li>Finaliza ";
            break;
        case "S":
            text += "<li>Ten lugar "
            break;
    }
    
    text += "(Fai "+ ((date.getFullYear() + 600) - año) +" anos): " + "<a href=\"paginas/" + fecha.articulo + "\">" + fecha.afectado + "</a>, " + fecha.descripcion + ".</li>";
}