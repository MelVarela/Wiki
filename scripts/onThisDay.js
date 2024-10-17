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
            C: Comeza
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
let d8 = new data("17 1 2535","S","a disolución do comisariado","","comisariado_de_eridanus.html");
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
let d19 = new data("17 1 2535","S","a disolución do Comisariado de Eridanus","","comisariado_de_eridanus.html");
let d20 = new data("9 10 2354","C","a Rebelión dos polos","tamen coñecida coma a guerra civil eridanense","rebelion_dos_polos.html");
let d21 = new data("12 11 2359","R","a Rebelión dos polos","tamen coñecida coma a guerra civil eridanense","rebelion_dos_polos.html");
let d22 = new data("8 10 2354","S","as eleccións en Meca","nas que sube ao poder o partido secesionista \"Patria Libre\"","rebelion_dos_polos.html");
let d23 = new data("10 10 2278","S","o primeiro aterrizaxe en Tesla","dunha nave de exploración","tesla.html");
let d24 = new data("14 10 2285","S","o aterrizaxe da primeira nave colonia en Tesla","que daría lugar a actual cidade de Providenco","tesla.html");
let d25 = new data("21 8 2289","S","o descubremento de cobre en Tesla","que daría lugar á febre do cobre","tesla.html");
let d26 = new data("31 5 2311","S","o conformamento de Tesla","coma a Repúbrica Democrática e Federada de Tesla","tesla.html");
let d27 = new data("20 10 2532","S","os atentados do 20 de outubro","os mais sangrentos da historia","atentados_20_outubro.html");
let d28 = new data("24 8 2044","S","a toma de poder de Alexanria Ocasio-Cortez","a primeira presidenta de Eridanus","listado_presidentes_eridanus.html");
let d29 = new data("10 9 2054","S","a toma de poder de Valeria Racu","a segunda presidenta de Eridanus","listado_presidentes_eridanus.html");
let d30 = new data("2 1 2075","S","a toma de poder de Nicolas Azevedo Barbosa","o terceiro presidente de Eridanus","listado_presidentes_eridanus.html");
let d31 = new data("8 2 2085","S","a toma de poder de Kampol Homsut","o cuarto presidente de Eridanus","listado_presidentes_eridanus.html");
let d32 = new data("16 9 2107","S","a toma de poder de Yukiyo Kanou tras unha moción de censura a Kampol Homsut","a quinta e mais breve presidenta de Eridanus","listado_presidentes_eridanus.html");
let d33 = new data("19 9 2107","S","a toma de poder de Generosa Mana","a sexta presidenta de Eridanus","listado_presidentes_eridanus.html");
let d34 = new data("8 10 2117","S","a toma de poder de Charles Smyth","o septimo presidente de Eridanus","listado_presidentes_eridanus.html");
let d35 = new data("19 1 2128","S","a toma de poder de Generosa Mana","producindose a primeria vez que un presidente é reelecto tras perder unhas eleccións","listado_presidentes_eridanus.html");
let d36 = new data("19 1 2138","S","a toma de poder de Shahidat Eldarkhanov","o oitavo presidente de Eridanus","listado_presidentes_eridanus.html");
let d37 = new data("3 3 2148","S","a toma de poder de Leah Jager","a novena presidenta de Eridanus","listado_presidentes_eridanus.html");
let d38 = new data("6 8 2158","S","a toma de poder de Fung Ka Ling","a decima presidenta de Eridanus","listado_presidentes_eridanus.html");
let d39 = new data("25 7 2168","S","a toma de poder de Fahd Kazim Qureshi","o onceavo presidente de Eridanus","listado_presidentes_eridanus.html");
let d40 = new data("2 12 2188","S","a toma de poder de Taye Selassie","o doceavo presidente de Eridanus","listado_presidentes_eridanus.html");
let d41 = new data("1 1 2199","S","a toma de poder de Mark Hoof","o treceavo presidente de Eridanus","listado_presidentes_eridanus.html");
let d42 = new data("3 4 2219","S","a toma de poder de Bjarni Benediktsson","o decimocuarto presidente de Eridanus","listado_presidentes_eridanus.html");
let d43 = new data("4 8 2249","S","a toma de poder de Mark Keith Robinson","o decimoquinto presidente de Eridanus","listado_presidentes_eridanus.html");
let d44 = new data("18 12 2259","S","a toma de poder de Tina Kotek","a decimosexta presidenta de Eridanus","listado_presidentes_eridanus.html");
let d45 = new data("7 1 2270","S","a toma de poder de Lou Leon Guerrero","a decimoseptima presidenta de Eridanus","listado_presidentes_eridanus.html");
let d46 = new data("30 4 2290","S","a toma de poder de Arnold Palacios","o decimooitavo presidente de Eridanus","listado_presidentes_eridanus.html");
let d47 = new data("15 5 2293","M","Arnold Palacios","decimooitavo presidente de Eridanus","listado_presidentes_eridanus.html");
let d48 = new data("15 5 2293","S","a toma de poder de Albert Bryan","decimonoveno presidente de Eridanus, e primeria vez que un vicepresidente ascende ao cargo","listado_presidentes_eridanus.html");
let d49 = new data("2 5 2300","S","a toma de poder de Jogdeep Dhankhar","vixesimo e mais duradeiro presidente de Eridanus","listado_presidentes_eridanus.html");
let d50 = new data("17 7 2340","S","a toma de poder de Droupadi Murmu","a vixesimoprimeira presidenta de Eridanus","listado_presidentes_eridanus.html");
let d51 = new data("6 9 2350","S","a toma de poder de Emilio Perez Touriño","o vixesimosegundo presidente de Eridanus","listado_presidentes_eridanus.html");
let d52 = new data("21 12 2354","S","a toma de poder de Iris McKirdy","tralo cese de Emilio Perez Touriño, convertendose na vixesimoterceira presidenta de Eridanus","listado_presidentes_eridanus.html");
let d53 = new data("6 9 2360","S","a toma de poder de Lechosława Kalinowska","a vixesimocuarta presidenta de Eridanus","listado_presidentes_eridanus.html");
let d54 = new data("4 11 2380","S","a toma de poder de Xavier Pazos Ulloa","o vixesimoquinto presidente de Eridanus","listado_presidentes_eridanus.html");
let d55 = new data("9 11 2390","S","a toma de poder de Toma Kovačić","o vixesimosexto presidente de Eridanus","listado_presidentes_eridanus.html");
let d56 = new data("1 1 2401","S","a toma de poder de Lete Dahlak","a vixesimoseptima presidenta de Eridanus","listado_presidentes_eridanus.html");
let d57 = new data("8 4 2411","S","a toma de poder de Toma Kovačić","reelexido tras perder as aneteriores eleccións","listado_presidentes_eridanus.html");
let d58 = new data("14 6 2421","S","a toma de poder de Laphonza Butler","a vixesimoitava presidenta de Eridanus","listado_presidentes_eridanus.html");
let d59 = new data("17 8 2431","S","a toma de poder de Mazie Hirono","a vixesimonovena presidenta de Eridanus","listado_presidentes_eridanus.html");
let d60 = new data("17 9 2451","S","a toma de poder de Maria Cantwell","a trixesima presidenta de Eridanus","listado_presidentes_eridanus.html");
let d61 = new data("17 10 2461","S","a toma de poder de Sheldon Whitehouse","o trixesimoprimeiro presidente de Eridanus","listado_presidentes_eridanus.html");
let d62 = new data("6 12 2481","S","a toma de poder de Keiichi Ishii","o trixesimosegundo presidente de Eridanus","listado_presidentes_eridanus.html");
let d63 = new data("21 1 2492","S","a toma de poder de Velenkosini Hlabisa","o trixesimoterceiro presidente de Eridanus","listado_presidentes_eridanus.html");
let d64 = new data("28 2 2502","S","a toma de poder de Carla Beck","a trixesimocuarta presidenta de Eridanus","listado_presidentes_eridanus.html");
let d65 = new data("9 3 2522","S","a toma de poder de Norma Lucía Piña Hernández","a trixesimoquinta presidenta de Eridanus","listado_presidentes_eridanus.html");
let d66 = new data("6 4 2532","S","a toma de poder de Miguel Cruz","o trixesimosexto presidente de Eridanus","listado_presidentes_eridanus.html");
let d67 = new data("3 11 2533","S","a toma de poder de Khaleda Ahmed","a trixesimoseptima e actual presidenta de Eridanus","listado_presidentes_eridanus.html");

datas.push(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
datas.push(d11, d12, d13, d14, d15, d16, d17, d18, d19, d20);
datas.push(d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
datas.push(d31, d32, d33, d34, d35, d36, d37, d38, d39, d40);
datas.push(d41, d42, d43, d44, d45, d46, d47, d48, d49, d50);
datas.push(d51, d52, d53, d54, d55, d56, d57, d58, d59, d60);
datas.push(d61, d62, d63, d64, d65, d66, d67);

let text = "<ul>";
let separacionCalculo = fechaCalculo.split(" ");

for(i = 0; i < datas.length; i++){
    let separacion = datas[i].data.split(" ");
    if((separacion[0] == separacionCalculo[0]) && (separacion[1] == separacionCalculo[1])){
        console.log(datas[i].afectado);
        procesar(datas[i], separacion[2]);
    }
}

text += "</ul>";

document.getElementById("eventos").innerHTML = text;

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
    
    text += "(Fai "+ ((date.getFullYear() + 600) - año) +" anos): " + "<a href=\"" + fecha.articulo + "\">" + fecha.afectado + "</a>, " + fecha.descripcion + ".</li>";
}