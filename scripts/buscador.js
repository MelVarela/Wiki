let paxinas = ["eridanus_desambiguacion.html","amarela_desambiguacion.html","beatriz_gomez.html","cassidy_ortiz_medina.html","cecil_ortiz.html","ceip_ruben_seixas.html","comisario_xeral.html", "conflictos_de_unificacion_planetaria.html","golpe_de_estado_24A.html","ies_emanuel_amado.html","igrexa_oficial.html","letizia_varela.html","peirama.html","pepe_naya.html","poligono_as_rosas.html","praza_das_memorias.html","relixion_oficial.html","seikos.html","comisario_de_defensa.html","rebelion_dos_polos.html","dereito_e_democracia.html", "tesla_desambiguacion.html","atentados_20_outubro.html","goberno_central.html", "index.html", "anexo_xuntas_de_goberno_europeas.html"];

function buscar(){
    let valor = document.getElementById("bb").value;
    let aviso = true;

    for(let i = 0; i < paxinas.length; i++){
        let paxina = paxinas[i];
        paxina = paxina.replace("_"," ");
        if(paxina.includes(valor)){
            window.open(paxinas[i], "_self");
            aviso = false;
        }
    }
    if(aviso){
        alert("Non se encontrou nada para isa búsqueda.");
    }
}
document.getElementById("buscador").addEventListener("click", function(){buscar()});
document.getElementById("bb").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buscador").click();
    }
});