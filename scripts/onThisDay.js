let fecha = new Date();

let mes = "";

switch(fecha.getMonth()){
    case 0:
        mes = "Xaneiro";
        break;
    case 1:
        mes = "Febreiro";
        break;
    case 2:
        mes = "Marzo";
        break;
    case 3:
        mes = "Abril";
        break;
    case 4:
        mes = "Maio";
        break;
    case 5:
        mes = "Xuño";
        break;
    case 6:
        mes = "Xullo";
        break;
    case 7:
        mes = "Agosto";
        break;
    case 8:
        mes = "Septembro";
        break;
    case 9:
        mes = "Outubro";
        break;
    case 10:
        mes = "Novembro";
        break;
    case 11:
        mes = "Decembro";
        break;
}

let ano = (fecha.getFullYear() + 600)

let fechaLegible = "Hoxe é " + fecha.getDate() + " de " + mes + " de " + ano + "<hr/>";

document.getElementById("inputFecha").innerHTML = fechaLegible;

let fechaCalculo = fecha.getDate() + " " + (fecha.getMonth() + 1) + " " + (fecha.getFullYear() + 600);
console.log(fechaCalculo);

class data{
    constructor(data, tipo, afectado, descripcion, articulo){
        this.data = data;
        this.tipo = tipo;
        /*
            N: Nace
            M: Muere
            C: Comienza
            F: Finaliza
            S: Sucede
        */
        this.afectado = afectado;
        this.descripcion = descripcion;
        this.articulo = articulo;
    }
}

let texto = "<ul>";
let datas = [];

let d1 = new data("24 9 1989","N","Beatriz Gómez","Presidenta de España","beatriz_gomez.html");
let d2 = new data("3 3 2061","M","Beatriz Gómez","Presidenta de España","beatriz_gomez.html");
let d3 = new data("20 4 2001","N","Cásssidy Ortiz Medina","Comisario Xeral","cassidy_ortiz_medina.html");
let d4 = new data("4 11 2533","M","Cásssidy Ortiz Medina","Comisario Xeral","cassidy_ortiz.html");
let d5 = new data("19 8 2040","S","o intento de bombardeo nuclear do Imperio de Eridanus","","conflictos_de_unificacion_planetaria.html");
let d6 = new data("2 6 2044","S","a aprobación da constitución de eridanus","","constitucion_de_eridanus.html");
let d7 = new data("16 9 2000","N","Cécil Ortiz","Comisario de defensa","cecil_ortiz.html");
let d8 = new data("17 1 2534","S","a disolución do comisariado","","comisariado_de_eridanus.html");
let d9 = new data("6 6 2037","S","o comezo dos conflictos de unificación planetaria","","conflictos_de_unificacion_planetaria.html");
let d10 = new data("28 1 2038","S","a invasión do Reino Unido por parte de eridanus","","conflictos_de_unificacion_planetaria.html");
let d11 = new data("26 4 2038","S","a invasión eridanense de Alxeria e Marrocos","","conflictos_de_unificacion_planetaria.html");
let d12 = new data("24 4 2034","S","o golpe de estado do 24-A","","golpe_de_estado_24A.html");
let d13 = new data("5 3 2031","S","a invasión chinesa da illa de taiwan","","");
let d14 = new data("19 9 2309","S","a aprobación da construcción da fortaleza de Peirama","","peirama.html")
let d15 = new data("3 11 1987","N","Pepe Naya","Alcalde de Amarela","pepe_naya.html");
let d16 = new data("12 1 2054","M","Pepe Naya","Alcalde de Amarela","pepe_naya.html");
let d17 = new data("1 10 1989","N","Letizia Varela","Alcaldesa de Amarela","letizia_varela.html");
let d18 = new data("4 10 2064","M","Letizia Varela","Alcaldesa de Amarela","letizia_varela.html");

datas.push(d1);
datas.push(d2);
datas.push(d3);
datas.push(d4);
datas.push(d5);
datas.push(d6);
datas.push(d7);
datas.push(d8);
datas.push(d9);
datas.push(d10);
datas.push(d11);
datas.push(d12);
datas.push(d13);
datas.push(d14);
datas.push(d15);
datas.push(d16);
datas.push(d17);
datas.push(d18);

let text = "<ul>";
let separacionCalculo = fechaCalculo.split(" ");

for(i = 0; i < datas.length; i++){
    let separacion = datas[i].data.split(" ");
    if(separacion[0] == separacionCalculo[0] && separacion[1] == separacion[1]){
        procesar(datas[i]);
    }
}

text += "</ul>";

document.getElementById("eventos").innerHTML = text;

function procesar(fecha){

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
    
    text += "(Fai "+ ((date.getFullYear() + 600) - Number.parseInt(fecha.data.substring(5, 9))) +" años): " + "<a href=\"" + fecha.articulo + "\">" + fecha.afectado + "</a>, " + fecha.descripcion + ".</li>";
}