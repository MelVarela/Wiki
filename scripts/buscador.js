class paxina{
    constructor(link, nome, etiquetas){
        this.link = link;
        this.nome = nome;
        this.etiquetas = etiquetas;
    }
}

let paxinas = [];

let p1 = new paxina("acusacions_de_xenocidio_en_tesla.html","Acusacións de Xenocidio en Tesla",["xenocidio","tesla"]);
let p2 = new paxina("amarela.html","Amarela",["amarela"]);
let p3 = new paxina("amarela_desambiguacion.html","Amarela (Desambiguacion)",["amarela"]);
let p4 = new paxina("anexo_xuntas_de_goberno_europeas.html","Anexo: Xuntas de goberno europeas",["goberno","union europea","xunta de goberno","ue"]);
let p5 = new paxina("atentados_20_outubro.html","Atentados do 20 de Outubro",["atentado de urbo","atentado de providenco","xenocidio","20-o"]);
let p6 = new paxina("barrio_da_amarela.html","Barrio da Amarela",["barrio central", "amarela"]);
let p7 = new paxina("beatriz_gomez","Betriz Gomez",["presidenta de españa"]);
let p8 = new paxina("cassidy_ortiz_medina.html","Cássidy Ortiz Medina",["comisario xeral","emperador","xuiz supremo","deus","excelencia reverendisma","xefe do goberno","xefe de estado","cassidy ortiz medina"]);
let p9 = new paxina("cecil_ortiz.html","Cécil Ortiz",["comisario de defensa","emperador","cecil ortiz"]);
let p10 = new paxina("ceip_ruben_seixas.html","CEIP Ruben Seixas",[]);
let p11 = new paxina("comisariado_de_eridanus.html","Comisariado de Eridanus",["eridanus"]);
let p12 = new paxina("comisario_de_defensa.html","Comisariado de Defensa",["ministerio de defensa"]);
let p13 = new paxina("comisario_xeral.html","Comisario Xeral",["cassidy ortiz medina","xefe do goberno","xefe de estado"]);
let p14 = new paxina("conflictos_de_unificacion_planetaria.html","Conflictos de Unifiación Planetaria",["terceira guerra mundial","III GM","guerra de unificacion"]);
let p15 = new paxina("constitucion_de_eridanus.html","Constitución de Eridanus",["carta magna"]);
let p16 = new paxina("dereito_e_democracia.html","Dereito e Democracia",["partido liberal"]);
let p17 = new paxina("emperador_de_eridanus.html","Emperador de Eridanus",["cassidy ortiz medina","cecil ortiz"]);
let p18 = new paxina("eridanus_desambiguacion.html","Eridanus (Desambiguación)",[]);
let p19 = new paxina("goberno_central.html","Goberno Central",["goberno federal"]);
let p20 = new paxina("golpe_de_estado_24A.html","Golpe de Estado do 24 de Abril",["24-A"]);
let p21 = new paxina("ies_emanuel_amado.html","IES Emanuel Amado",[]);
let p22 = new paxina("igrexa_oficial.html","Igrexa Oficial",[]);
let p23 = new paxina("imperio_de_eridanus.html","Imperio de Eridanus",["eridanus"]);
let p24 = new paxina("../index.html","Inicio",["index"]);
let p25 = new paxina("letizia_varela.html","Letizia Varela",[]);
let p26 = new paxina("listado_presidentes_eridanus.html","Listado de Presidentes de Eridanus",[]);
let p27 = new paxina("peirama.html","Peirama",[]);
let p28 = new paxina("pepe_naya.html","Pepe Naya",[]);
let p29 = new paxina("poligono_as_rosas.html","Poligono As Rosas",[]);
let p30 = new paxina("praza_das_memorias.html","Praza Das Memorias",["praza dos recordos","praza central"]);
let p31 = new paxina("rebelion_dos_polos.html","Rebelión dos Polos",["guerra civil eridanense"]);
let p32 = new paxina("relixion_oficial.html","Relixión Oficial",["igrexa oficial"]);
let p33 = new paxina("represion_politica_en_tesla.html","Represión Política en Tesla",[]);
let p34 = new paxina("seikos.html","Seikos",["capital"]);
let p35 = new paxina("tesla.html","Tesla",["planeta do cobre"]);
let p36 = new paxina("tesla_desambiguacion.html","Tesla (Desambiguación)",[]);
let p37 = new paxina("xenocidio_de_tesla.html","Xenocidio en Tesla",["bombardeo orbital de tesla", "bombardeo de tesla", "castigo de tesla", "operación Eco 74"]);
let p38 = new paxina("masacre_do_parque_comisario_ortiz.html","Masacre do parque Comisario Ortiz",[]);
let p39 = new paxina("portais.html","Portais","");
let p40 = new paxina("aktivula_politiko.html","Aktívula Polítiko",["aktivula politiko", "canciller de tesla", "lider de enerxia libre"]);
let p41 = new paxina("urbo.html","Urbo",["cidade de cobre e pizarra","xoia do ecuador"]);
let p42 = new paxina("terra.html","Terra",["a terra", "praneta natal"]);
let p43 = new paxina("marte.html","Marte",["o praneta vermello","praneta vermello"]);
let p44 = new paxina("meca.html","Meca",["a gran universidade", "o arquivo nacional"]);
let p45 = new paxina("eleccions_municipais_amarela_2027.html", "Eleccións Municipais de Amarela en 2027",[""]);

paxinas.push(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);
paxinas.push(p11, p12, p13, p14, p15, p16, p17, p18, p19, p20);
paxinas.push(p21, p22, p23, p24, p25, p26, p27, p28, p29, p30);
paxinas.push(p31, p32, p33, p34, p35, p36, p37, p38, p39, p40);
paxinas.push(p41, p42, p43, p44, p45);

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

document.getElementById("bb").addEventListener("input", function(){mostarResultados()})
document.getElementById("buscador").addEventListener("click", function(){buscar()});
document.getElementById("bb").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) document.getElementById("buscador").click();
});