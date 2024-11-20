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
let proxima = new Mundo("Próxima", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a18e7e2e-c55a-4497-b71e-628aed238fdd/dcwtq0b-2f15b99b-4578-4dcd-b58e-d0c22692c6cc.png/v1/fill/w_1024,h_603,q_80,strp/proxima_b_flag_by_sentient_snow_dcwtq0b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvYTE4ZTdlMmUtYzU1YS00NDk3LWI3MWUtNjI4YWVkMjM4ZmRkXC9kY3d0cTBiLTJmMTViOTliLTQ1NzgtNGRjZC1iNThlLWQwYzIyNjkyYzZjYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BFtNkHPHXcUf2D96HrDpRGw39pKACVBnXFEPZ4qpMLg", "1", "1", "1", " class=\"falsoLink\"");
let sirio = new Mundo("Sirio", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5874e9cb-728c-4516-810c-e6efb1b72caa/dfworu3-c61a5c7c-ed6e-4ceb-b16f-1e9853ba81c5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NzRlOWNiLTcyOGMtNDUxNi04MTBjLWU2ZWZiMWI3MmNhYVwvZGZ3b3J1My1jNjFhNWM3Yy1lZDZlLTRjZWItYjE2Zi0xZTk4NTNiYTgxYzUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.i2s-rx4spTxH3SjsHHDE_KLYbGbnhlrSgmTxUg4agMM", "1", "1", "1", " class=\"falsoLink\"");
let nova = new Mundo("Nova", "https://i.pinimg.com/originals/c1/64/24/c164249abe3681cb2b5bb34cc99cd6ab.jpg", "1", "1", "1", " class=\"falsoLink\"");
let marte = new Mundo("Marte","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_the_Martian_Congressional_Republic.svg/220px-Flag_of_the_Martian_Congressional_Republic.svg.png", "48&nbsp160&nbsp000", "3&nbsp234&nbsp389&nbsp194", "798&nbsp452,837","marte.html")
let fido = new Mundo("Fido", "https://static.wikia.nocookie.net/overlordfanonn/images/7/7c/Slane_Theocracy_Flag.png/revision/latest?cb=20211003214418", "1", "1", "1", " class=\"falsoLink\"");
let gueterra = new Mundo("Gueterra", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56bef39e-880d-4f58-93bc-1dab0c7ed7b9/di3x55u-2d22deb8-ea4c-4083-92ab-4b041f6950a7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2YmVmMzllLTg4MGQtNGY1OC05M2JjLTFkYWIwYzdlZDdiOVwvZGkzeDU1dS0yZDIyZGViOC1lYTRjLTQwODMtOTJhYi00YjA0MWY2OTUwYTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0v5QkL3G34aWjsZ-WokuUxThyQ-sEzOdABNsniZYcm4", "1", "1", "1", " class=\"falsoLink\"");
let vagalum = new Mundo("Vagalum", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Anarcho-capitalism.svg/2560px-Flag_of_Anarcho-capitalism.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let triante = new Mundo("Triante", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bda2ab2a-f5a6-4b9a-bee5-165bacd0fc12/dby0xpy-36320b5b-a7de-499b-80b8-4230c27226cb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkYTJhYjJhLWY1YTYtNGI5YS1iZWU1LTE2NWJhY2QwZmMxMlwvZGJ5MHhweS0zNjMyMGI1Yi1hN2RlLTQ5OWItODBiOC00MjMwYzI3MjI2Y2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MWUAYfiosehMB8BW9V60FDMHrgia6OIr4bSKa5-gvfs", "1", "1", "1", " class=\"falsoLink\"");
let lañas = new Mundo("Lañas", "../imgs/bandera_de_lañas.jpg", "1", "1", "1", " class=\"falsoLink\"");
let neria = new Mundo("Neria", "https://64.media.tumblr.com/c8ce50c2b0ff7a7fa0cff8d03e238f03/tumblr_pio2pbfOF01xwi2z1o1_1280.png", "1", "1", "1", " class=\"falsoLink\"");
let kratero = new Mundo("Kratero", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bandera_de_Yucat%C3%A1n.png/640px-Bandera_de_Yucat%C3%A1n.png", "1", "1", "1", " class=\"falsoLink\"");
let novo_kosno = new Mundo("Novo Kosno", "../imgs/bandera_de_novo_kosno.png", "1", "1", "1", " class=\"falsoLink\"");
let meca = new Mundo("Meca","https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bandera_de_Santiago_de_Compostela.svg/2560px-Bandera_de_Santiago_de_Compostela.svg.png","75&nbsp134&nbsp000","24&nbsp154&nbsp219&nbsp984", "14&nbsp898&nbsp249,517", "meca.html");
let riogrando = new Mundo("Riogrando", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b5a6a23-fe88-4843-872a-ab59f325daaf/delpkh0-2da45b84-57d7-4c4f-8408-5e5125e4956a.jpg/v1/fill/w_1192,h_670,q_70,strp/communist_river_republic_flag_by_oleniandeer_delpkh0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDUwNCIsInBhdGgiOiJcL2ZcLzhiNWE2YTIzLWZlODgtNDg0My04NzJhLWFiNTlmMzI1ZGFhZlwvZGVscGtoMC0yZGE0NWI4NC01N2Q3LTRjNGYtODQwOC01ZTUxMjVlNDk1NmEuanBnIiwid2lkdGgiOiI8PTgwMDcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hxdaJLgqGgcdZYgLPbSiXAqKOpLzWG3lJUXePV7thIA", "1", "1", "1", " class=\"falsoLink\"");
let fludepa = new Mundo("Fludepa", "https://upload.wikimedia.org/wikipedia/commons/7/72/Bandera_Benidorm.jpg", "1", "1", "1", " class=\"falsoLink\"");
let xar = new Mundo("Xar", "https://static.wixstatic.com/media/bd9fe1_495c4730c2ae419e9d861335b6325219~mv2.png/v1/fill/w_351,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/True%20South%20Image.png", "1", "1", "1", " class=\"falsoLink\"");
let picrel = new Mundo("Picrel", "https://i.ebayimg.com/images/g/ejAAAOSw5Uxi0sQ7/s-l1200.jpg", "1", "1", "1", " class=\"falsoLink\"");
let tesla = new Mundo("Tesla","../imgs/bandera_de_tesla.png","460&nbsp721&nbsp495","37&nbsp623&nbsp854&nbsp078","7&nbsp154&nbsp568,456","tesla.html");
let moissa = new Mundo("Moissa", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_the_Future_Movement.svg/1200px-Flag_of_the_Future_Movement.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let peirama = new Mundo("Peirama","../imgs/bandera_de_peirama.jpg","23&nbsp451","26&nbsp847&nbsp328","568,456","peirama.html");
let hernoplocul = new Mundo("Hernoplocul", "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Rota_Spain.svg", "1", "1", "1", " class=\"falsoLink\"");
let pildas = new Mundo("Pildas", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bandeiradourbanismo.png/1200px-Bandeiradourbanismo.png", "1", "1", "1", " class=\"falsoLink\"");
let teocla = new Mundo("Teocla", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_Rome.svg/2560px-Flag_of_Rome.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let fabrik = new Mundo("Fabrik", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b593db8-61d4-4993-ad9d-67f8fc087acd/d9koko7-5d9538c6-0057-43e0-ae19-cdb2058b2d2a.png/v1/fill/w_1600,h_960,q_80,strp/flag_of_the_workingmen_s_party_by_anarchomania_d9koko7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMmI1OTNkYjgtNjFkNC00OTkzLWFkOWQtNjdmOGZjMDg3YWNkXC9kOWtva283LTVkOTUzOGM2LTAwNTctNDNlMC1hZTE5LWNkYjIwNThiMmQyYS5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5aa31JLLjbjmDfv4l3P8RfGdSzinYN-v7oisDScPl7M", "1", "1", "1", " class=\"falsoLink\"");
let dudekvar = new Mundo("Dudekvar", "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Rojava.svg", "1", "1", "1", " class=\"falsoLink\"");
let duono = new Mundo("Duono", "https://upload.wikimedia.org/wikipedia/commons/7/72/Bandera_Benidorm.jpg", "1", "1", "1", " class=\"falsoLink\"");
let grandamia = new Mundo("Grandamia", "../imgs/bandera_de_grandamia.png", "1", "1", "1", " class=\"falsoLink\"");
let novafabriko = new Mundo("Novafabriko", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_the_Byelorussian_Soviet_Socialist_Republic_%281951%E2%80%931991%29.svg/800px-Flag_of_the_Byelorussian_Soviet_Socialist_Republic_%281951%E2%80%931991%29.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let novahaveno = new Mundo("Novahaveno", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_Latvian_Soviet_Socialist_Republic_%281953%E2%80%931990%29.svg/1200px-Flag_of_the_Latvian_Soviet_Socialist_Republic_%281953%E2%80%931990%29.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let novaurbo = new Mundo("Novaurbo", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Kazakh_Soviet_Socialist_Republic_%281953%E2%80%931991%29%3B_Flag_of_Kazakhstan_%281991%E2%80%931992%29.svg/800px-Flag_of_the_Kazakh_Soviet_Socialist_Republic_%281953%E2%80%931991%29%3B_Flag_of_Kazakhstan_%281991%E2%80%931992%29.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let xulye = new Mundo("Xulye", "https://m.media-amazon.com/images/I/61DZxGcJHZL.jpg", "1", "1", "1", " class=\"falsoLink\"");
let ortiero = new Mundo("Ortiero", "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Genoa.svg", "1", "1", "1", " class=\"falsoLink\"");
let kraupe = new Mundo("Kraupe", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_Tula_Oblast.svg/2560px-Flag_of_Tula_Oblast.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let erimistu = new Mundo("Erimistu", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Moscow_oblast.svg/2560px-Flag_of_Moscow_oblast.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let ewing = new Mundo("Ewing", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Flag_of_M%C3%A1laga%2C_Spain.svg/2560px-Flag_of_M%C3%A1laga%2C_Spain.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let ebbes = new Mundo("Ebbes", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1200px-Flag_of_Kuwait.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let glandail = new Mundo("Glandail", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Osaka_Prefecture.svg/1200px-Flag_of_Osaka_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let gibbs = new Mundo("Gibbs", "https://upload.wikimedia.org/wikipedia/commons/1/15/Flag_of_Tokyo_Metropolis.svg", "1", "1", "1", " class=\"falsoLink\"");
let nong = new Mundo("Nong", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Kyoto_Prefecture.svg/2560px-Flag_of_Kyoto_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let legi = new Mundo("Legi", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Hiroshima_Prefecture.svg/1200px-Flag_of_Hiroshima_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let etna = new Mundo("Etna", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Flag_of_Catania.svg/600px-Flag_of_Catania.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let tivol = new Mundo("Tívol", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Nagasaki%2C_Nagasaki.svg/1200px-Flag_of_Nagasaki%2C_Nagasaki.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let hutu = new Mundo("Hutu", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Hokkaido_Prefecture.svg/1280px-Flag_of_Hokkaido_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let libster = new Mundo("Líbster", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Aomori_Prefecture.svg/800px-Flag_of_Aomori_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let hersina = new Mundo("Hersina", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Iwate_Prefecture.svg/1200px-Flag_of_Iwate_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let dondolo = new Mundo("Dóndolo", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Miyagi_Prefecture.svg/2560px-Flag_of_Miyagi_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let grabosno = new Mundo("Grabosno", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Akita_Prefecture.svg/1200px-Flag_of_Akita_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let dorverden = new Mundo("Dórverden", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_Yamagata_Prefecture.svg/1200px-Flag_of_Yamagata_Prefecture.svg.png", "1", "1", "1", " class=\"falsoLink\"");
let mui = new Mundo("Mui", "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Ibaraki%2C_Osaka.svg", "1", "1", "1", " class=\"falsoLink\"");

let lista = [terra, proxima, sirio, nova, marte, fido, gueterra, vagalum, triante, lañas, neria, kratero, novo_kosno, meca, riogrando, fludepa, xar, picrel, tesla, moissa, peirama, hernoplocul, pildas, teocla, fabrik, dudekvar, duono, grandamia, novafabriko, novahaveno, novaurbo, xulye, ortiero, kraupe, erimistu, ewing, ebbes, glandail, gibbs, nong, legi, etna, tivol, hutu, libster, hersina, dondolo, grabosno, dorverden, mui];

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