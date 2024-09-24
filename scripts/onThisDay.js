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