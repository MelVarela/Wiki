let paxinas = ["amarela.html","beatriz_gomez.html","cassidy_ortiz_medina.html","cecil_ortiz.html","ceip_ruben_seixas.html","comisariado_de_eridanus.html","comisario_xeral.html", "conflictos_de_unificacion_planetaria.html","constitucion_de_eridanus.html","emperador_de_eridanus.html","eridanus.html","golpe_de_estado_24A.html","ies_emanuel_amado.html","igrexa_oficial.html","letizia_varela.html","peirama.html","pepe_naya.html","poligono_as_rosas.html","praza_das_memorias.html","relixion_oficial.html","seikos.html","comisario_de_defensa.html"];

let tamaño = paxinas.length;
let resultado = Math.round(Math.random() * tamaño);
window.open(paxinas[resultado], "_self");