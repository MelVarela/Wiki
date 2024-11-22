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

        return Number.parseInt(superf);
    }

    getPoblacion(){
        let pob = this.poblacion;
        while(pob.includes("&nbsp")){
            pob = pob.replace("&nbsp","");
        }

        return Number.parseInt(pob);
    }

    getEconomia(){
        let eco = this.economia;
        while(eco.includes("&nbsp")){
            eco = eco.replace("&nbsp","");
        }
        
        return Number.parseInt(eco.substring(0, (eco.length - 4)));
    }
}

let nombreB = false;
let superficieB = false;
let poblacionB = false;
let densidadB = false;
let economiaB = false;

let terra = new Mundo("Terra","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/200px-International_Flag_of_Planet_Earth.svg.png", "510&nbsp072&nbsp000","73&nbsp854&nbsp623&nbsp327","37&nbsp554&nbsp532,236","terra.html");
let proxima = new Mundo("Próxima", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a18e7e2e-c55a-4497-b71e-628aed238fdd/dcwtq0b-2f15b99b-4578-4dcd-b58e-d0c22692c6cc.png/v1/fill/w_1024,h_603,q_80,strp/proxima_b_flag_by_sentient_snow_dcwtq0b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvYTE4ZTdlMmUtYzU1YS00NDk3LWI3MWUtNjI4YWVkMjM4ZmRkXC9kY3d0cTBiLTJmMTViOTliLTQ1NzgtNGRjZC1iNThlLWQwYzIyNjkyYzZjYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BFtNkHPHXcUf2D96HrDpRGw39pKACVBnXFEPZ4qpMLg", "56&nbsp267&nbsp000", "32&nbsp549&nbsp024&nbsp549", "24&nbsp456&nbsp093,348", " class=\"falsoLink\"");
let sirio = new Mundo("Sirio", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5874e9cb-728c-4516-810c-e6efb1b72caa/dfworu3-c61a5c7c-ed6e-4ceb-b16f-1e9853ba81c5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NzRlOWNiLTcyOGMtNDUxNi04MTBjLWU2ZWZiMWI3MmNhYVwvZGZ3b3J1My1jNjFhNWM3Yy1lZDZlLTRjZWItYjE2Zi0xZTk4NTNiYTgxYzUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.i2s-rx4spTxH3SjsHHDE_KLYbGbnhlrSgmTxUg4agMM", "48&nbsp837&nbsp000", "34&nbsp051&nbsp608&nbsp006", "26&nbsp452&nbsp340,462", " class=\"falsoLink\"");
let nova = new Mundo("Nova", "https://i.pinimg.com/originals/c1/64/24/c164249abe3681cb2b5bb34cc99cd6ab.jpg", "496&nbsp237&nbsp000", "56&nbsp834&nbsp746&nbsp382", "19&nbsp883&nbsp843,457", " class=\"falsoLink\"");
let marte = new Mundo("Marte","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_the_Martian_Congressional_Republic.svg/220px-Flag_of_the_Martian_Congressional_Republic.svg.png", "48&nbsp160&nbsp000", "3&nbsp234&nbsp389&nbsp194", "798&nbsp452,837","marte.html")
let fido = new Mundo("Fido", "https://static.wikia.nocookie.net/overlordfanonn/images/7/7c/Slane_Theocracy_Flag.png/revision/latest?cb=20211003214418", "264&nbsp879&nbsp000", "28&nbsp649&nbsp215&nbsp684", "14&nbsp837&nbsp452,340", " class=\"falsoLink\"");
let gueterra = new Mundo("Gueterra", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56bef39e-880d-4f58-93bc-1dab0c7ed7b9/di3x55u-2d22deb8-ea4c-4083-92ab-4b041f6950a7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2YmVmMzllLTg4MGQtNGY1OC05M2JjLTFkYWIwYzdlZDdiOVwvZGkzeDU1dS0yZDIyZGViOC1lYTRjLTQwODMtOTJhYi00YjA0MWY2OTUwYTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0v5QkL3G34aWjsZ-WokuUxThyQ-sEzOdABNsniZYcm4", "230&nbsp506&nbsp000", "29&nbsp648&nbsp200&nbsp364", "8&nbsp871&nbsp324,024", " class=\"falsoLink\"");
let vagalum = new Mundo("Vagalum", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Anarcho-capitalism.svg/2560px-Flag_of_Anarcho-capitalism.svg.png", "129&nbsp805&nbsp700", "12&nbsp649&nbsp034&nbsp812", "21&nbsp234&nbsp004,041", " class=\"falsoLink\"");
let triante = new Mundo("Triante", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bda2ab2a-f5a6-4b9a-bee5-165bacd0fc12/dby0xpy-36320b5b-a7de-499b-80b8-4230c27226cb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkYTJhYjJhLWY1YTYtNGI5YS1iZWU1LTE2NWJhY2QwZmMxMlwvZGJ5MHhweS0zNjMyMGI1Yi1hN2RlLTQ5OWItODBiOC00MjMwYzI3MjI2Y2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MWUAYfiosehMB8BW9V60FDMHrgia6OIr4bSKa5-gvfs", "12&nbsp709&nbsp845", "1&nbsp002&nbsp348&nbsp604", "6&nbsp234&nbsp435,468", " class=\"falsoLink\"");
let lañas = new Mundo("Lañas", "../imgs/bandera_de_lañas.jpg", "445&nbsp008&nbsp000", "35&nbsp619&nbsp054&nbsp068", "25&nbsp382&nbsp787,452", " class=\"falsoLink\"");
let neria = new Mundo("Neria", "https://64.media.tumblr.com/c8ce50c2b0ff7a7fa0cff8d03e238f03/tumblr_pio2pbfOF01xwi2z1o1_1280.png", "387&nbsp064&nbsp836", "32&nbsp619&nbsp504&nbsp005", "19&nbsp876&nbsp764,452", " class=\"falsoLink\"");
let kratero = new Mundo("Kratero", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bandera_de_Yucat%C3%A1n.png/640px-Bandera_de_Yucat%C3%A1n.png", "236&nbsp387&nbsp000", "13&nbsp054&nbsp689&nbsp321", "8&nbsp764&nbsp832,439", " class=\"falsoLink\"");
let novo_kosno = new Mundo("Novo Kosno", "../imgs/bandera_de_novo_kosno.png", "120&nbsp834&nbsp000", "11&nbsp264&nbsp059&nbsp648", "12&nbsp234&nbsp563,345", " class=\"falsoLink\"");
let meca = new Mundo("Meca","https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bandera_de_Santiago_de_Compostela.svg/2560px-Bandera_de_Santiago_de_Compostela.svg.png","75&nbsp134&nbsp000","24&nbsp154&nbsp219&nbsp984", "14&nbsp898&nbsp249,517", "meca.html");
let riogrando = new Mundo("Riogrando", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b5a6a23-fe88-4843-872a-ab59f325daaf/delpkh0-2da45b84-57d7-4c4f-8408-5e5125e4956a.jpg/v1/fill/w_1192,h_670,q_70,strp/communist_river_republic_flag_by_oleniandeer_delpkh0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDUwNCIsInBhdGgiOiJcL2ZcLzhiNWE2YTIzLWZlODgtNDg0My04NzJhLWFiNTlmMzI1ZGFhZlwvZGVscGtoMC0yZGE0NWI4NC01N2Q3LTRjNGYtODQwOC01ZTUxMjVlNDk1NmEuanBnIiwid2lkdGgiOiI8PTgwMDcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hxdaJLgqGgcdZYgLPbSiXAqKOpLzWG3lJUXePV7thIA", "11&nbsp943&nbsp000", "942&nbsp134&nbsp219", "958&nbsp341,754", " class=\"falsoLink\"");
let fludepa = new Mundo("Fludepa", "https://upload.wikimedia.org/wikipedia/commons/7/72/Bandera_Benidorm.jpg", "9&nbsp865&nbsp000", "130&nbsp351&nbsp284", "193&nbsp764,123", " class=\"falsoLink\"");
let xar = new Mundo("Xar", "https://static.wixstatic.com/media/bd9fe1_495c4730c2ae419e9d861335b6325219~mv2.png/v1/fill/w_351,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/True%20South%20Image.png", "308&nbsp836&nbsp982", "7&nbsp268&nbsp159&nbsp001", "1&nbsp234&nbsp984,425", " class=\"falsoLink\"");
let picrel = new Mundo("Picrel", "https://i.ebayimg.com/images/g/ejAAAOSw5Uxi0sQ7/s-l1200.jpg", "231&nbsp937&nbsp000", "1&nbsp324&nbsp615&nbsp218", "765&nbsp984,133", " class=\"falsoLink\"");
let tesla = new Mundo("Tesla","../imgs/bandera_de_tesla.png","460&nbsp721&nbsp495","37&nbsp623&nbsp854&nbsp078","27&nbsp154&nbsp568,456","tesla.html");
let moissa = new Mundo("Moissa", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_the_Future_Movement.svg/1200px-Flag_of_the_Future_Movement.svg.png", "170&nbsp874&nbsp000", "4&nbsp519&nbsp324&nbsp810", "9&nbsp983&nbsp324,824", " class=\"falsoLink\"");
let peirama = new Mundo("Peirama","../imgs/bandera_de_peirama.jpg","23&nbsp451","26&nbsp847&nbsp328","568,456","peirama.html");
let hernoplocul = new Mundo("Hernoplocul", "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Rota_Spain.svg", "198&nbsp876&nbsp000", "14&nbsp518&nbsp624&nbsp320", "12&nbsp234&nbsp643,974", " class=\"falsoLink\"");
let pildas = new Mundo("Pildas", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bandeiradourbanismo.png/1200px-Bandeiradourbanismo.png", "87&nbsp080&nbsp000", "9&nbsp948&nbsp315&nbsp604", "12&nbsp736&nbsp003,000", " class=\"falsoLink\"");
let teocla = new Mundo("Teocla", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_Rome.svg/2560px-Flag_of_Rome.svg.png", "398&nbsp802&nbsp000", "21&nbsp623&nbsp548&nbsp964", "21&nbsp324&nbsp543,286", " class=\"falsoLink\"");
let fabrik = new Mundo("Fabrik", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b593db8-61d4-4993-ad9d-67f8fc087acd/d9koko7-5d9538c6-0057-43e0-ae19-cdb2058b2d2a.png/v1/fill/w_1600,h_960,q_80,strp/flag_of_the_workingmen_s_party_by_anarchomania_d9koko7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMmI1OTNkYjgtNjFkNC00OTkzLWFkOWQtNjdmOGZjMDg3YWNkXC9kOWtva283LTVkOTUzOGM2LTAwNTctNDNlMC1hZTE5LWNkYjIwNThiMmQyYS5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5aa31JLLjbjmDfv4l3P8RfGdSzinYN-v7oisDScPl7M", "413&nbsp980&nbsp034", "16&nbsp514&nbsp328&nbsp640", "22&nbsp834&nbsp348,232", " class=\"falsoLink\"");
let dudekvar = new Mundo("Dudekvar", "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Rojava.svg", "92&nbsp204&nbsp000", "28&nbsp064&nbsp005&nbsp148", "24&nbsp347&nbsp438,481", " class=\"falsoLink\"");
let duono = new Mundo("Duono", "https://upload.wikimedia.org/wikipedia/commons/8/86/Bandera_de_Cervo.png", "4&nbsp229&nbsp082", "751&nbsp658&nbsp154", "213&nbsp452,652", " class=\"falsoLink\"");
let grandamia = new Mundo("Grandamia", "../imgs/bandera_de_grandamia.png", "376&nbsp873&nbsp000", "5&nbsp261&nbsp513&nbsp064", "324&nbsp324,048", " class=\"falsoLink\"");
let novafabriko = new Mundo("Novafabriko", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_the_Byelorussian_Soviet_Socialist_Republic_%281951%E2%80%931991%29.svg/800px-Flag_of_the_Byelorussian_Soviet_Socialist_Republic_%281951%E2%80%931991%29.svg.png", "141&nbsp984&nbsp000", "16&nbsp248&nbsp912&nbsp320", "5&nbsp548&nbsp024,801", " class=\"falsoLink\"");
let novahaveno = new Mundo("Novahaveno", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_Latvian_Soviet_Socialist_Republic_%281953%E2%80%931990%29.svg/1200px-Flag_of_the_Latvian_Soviet_Socialist_Republic_%281953%E2%80%931990%29.svg.png", "219&nbsp082&nbsp123", "7&nbsp214&nbsp658&nbsp901", "21&nbsp618&nbsp984,935", " class=\"falsoLink\"");
let novaurbo = new Mundo("Novaurbo", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Kazakh_Soviet_Socialist_Republic_%281953%E2%80%931991%29%3B_Flag_of_Kazakhstan_%281991%E2%80%931992%29.svg/800px-Flag_of_the_Kazakh_Soviet_Socialist_Republic_%281953%E2%80%931991%29%3B_Flag_of_Kazakhstan_%281991%E2%80%931992%29.svg.png", "198&nbsp876&nbsp000", "26&nbsp351&nbsp053&nbsp064", "19&nbsp651&nbsp014,836", " class=\"falsoLink\"");
let xulye = new Mundo("Xulye", "https://m.media-amazon.com/images/I/61DZxGcJHZL.jpg", "23&nbsp374&nbsp000", "2&nbsp548&nbsp512&nbsp036", "1&nbsp215&nbsp001,519", " class=\"falsoLink\"");
let ortiero = new Mundo("Ortiero", "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Genoa.svg", "83&nbsp827&nbsp983", "10&nbsp254&nbsp981&nbsp300", "4&nbsp517&nbsp249,819", " class=\"falsoLink\"");
let kraupe = new Mundo("Kraupe", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_Tula_Oblast.svg/2560px-Flag_of_Tula_Oblast.svg.png", "32&nbsp874&nbsp000", "1&nbsp984&nbsp006&nbsp024", "751&nbsp138,271", " class=\"falsoLink\"");
let erimistu = new Mundo("Erimistu", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Moscow_oblast.svg/2560px-Flag_of_Moscow_oblast.svg.png", "402&nbsp862&nbsp120", "29&nbsp645&nbsp000&nbsp218", "17&nbsp546&nbsp214,100", " class=\"falsoLink\"");
let ewing = new Mundo("Ewing", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Flag_of_M%C3%A1laga%2C_Spain.svg/2560px-Flag_of_M%C3%A1laga%2C_Spain.svg.png", "32&nbsp983&nbsp000", "1&nbsp061&nbsp512&nbsp354", "241&nbsp512,585", " class=\"falsoLink\"");
let ebbes = new Mundo("Ebbes", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1200px-Flag_of_Kuwait.svg.png", "42&nbsp982&nbsp000", "3&nbsp542&nbsp216&nbsp032", "18&nbsp511,534", " class=\"falsoLink\"");
let glandail = new Mundo("Glandail", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Osaka_Prefecture.svg/1200px-Flag_of_Osaka_Prefecture.svg.png", "251&nbsp060&nbsp000", "10&nbsp215&nbsp620&nbsp031", "5&nbsp517&nbsp985,300", " class=\"falsoLink\"");
let gibbs = new Mundo("Gibbs", "https://upload.wikimedia.org/wikipedia/commons/1/15/Flag_of_Tokyo_Metropolis.svg", "564&nbsp326&nbsp000", "29&nbsp624&nbsp516&nbsp035", "24&nbsp519&nbsp842,833", " class=\"falsoLink\"");
let nong = new Mundo("Nong", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Kyoto_Prefecture.svg/2560px-Flag_of_Kyoto_Prefecture.svg.png", "312&nbsp924&nbsp000", "9&nbsp516&nbsp325&nbsp004", "452&nbsp326,588", " class=\"falsoLink\"");
let legi = new Mundo("Legi", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Hiroshima_Prefecture.svg/1200px-Flag_of_Hiroshima_Prefecture.svg.png", "214&nbsp904&nbsp000", "842&nbsp481&nbsp215", "19&nbsp517,360", " class=\"falsoLink\"");
let etna = new Mundo("Etna", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Flag_of_Catania.svg/600px-Flag_of_Catania.svg.png", "100&nbsp864&nbsp000", "4&nbsp256&nbsp325&nbsp102", "6&nbsp428&nbsp001,077", " class=\"falsoLink\"");
let tivol = new Mundo("Tívol", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Nagasaki%2C_Nagasaki.svg/1200px-Flag_of_Nagasaki%2C_Nagasaki.svg.png", "46&nbsp837&nbsp000", "751&nbsp516&nbsp032", "948&nbsp513,623", " class=\"falsoLink\"");
let hutu = new Mundo("Hutu", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Hokkaido_Prefecture.svg/1280px-Flag_of_Hokkaido_Prefecture.svg.png", "129&nbsp034&nbsp000", "6&nbsp254&nbsp034&nbsp805", "2&nbsp516&nbsp211,276", " class=\"falsoLink\"");
let libster = new Mundo("Líbster", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Aomori_Prefecture.svg/800px-Flag_of_Aomori_Prefecture.svg.png", "286&nbsp082&nbsp000", "24&nbsp260&nbsp516&nbsp984", "16&nbsp514&nbsp320,669", " class=\"falsoLink\"");
let hersina = new Mundo("Hersina", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Iwate_Prefecture.svg/1200px-Flag_of_Iwate_Prefecture.svg.png", "424&nbsp873&nbsp920", "17&nbsp249&nbsp015&nbsp320", "10&nbsp215&nbsp050,228", " class=\"falsoLink\"");
let dondolo = new Mundo("Dóndolo", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Miyagi_Prefecture.svg/2560px-Flag_of_Miyagi_Prefecture.svg.png", "201&nbsp004&nbsp000", "3&nbsp215&nbsp648&nbsp214", "2&nbsp301&nbsp237,516", " class=\"falsoLink\"");
let grabosno = new Mundo("Grabosno", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Akita_Prefecture.svg/1200px-Flag_of_Akita_Prefecture.svg.png", "198&nbsp803&nbsp000", "4&nbsp516&nbsp328&nbsp000", "4&nbsp513&nbsp548,133", " class=\"falsoLink\"");
let dorverden = new Mundo("Dórverden", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_Yamagata_Prefecture.svg/1200px-Flag_of_Yamagata_Prefecture.svg.png", "67&nbsp928&nbsp000", "345&nbsp620&nbsp513", "948,289", " class=\"falsoLink\"");
let mui = new Mundo("Mui", "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Ibaraki%2C_Osaka.svg", "90&nbsp874&nbsp000", "784&nbsp215&nbsp654", "210&nbsp231,876", " class=\"falsoLink\"");

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
            }else if(a.nombre > b.nombre){
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
            }else if(a.nombre > b.nombre){
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
            }else if(a.getSuperficie() > b.getSuperficie()){
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
            }else if(a.getSuperficie() > b.getSuperficie()){
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
            }else if(a.getPoblacion() > b.getPoblacion()){
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
            }else if(a.getPoblacion() > b.getPoblacion()){
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
            }else if(a.densidad > b.densidad){
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
            }else if(a.densidad > b.densidad){
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
            if(a.getEconomia() < b.getEconomia()){
                return -1;
            }else if(a.getEconomia() > b.getEconomia()){
                return 1;
            }
            return 0;})
        cambiar("economiaB");
    }else{
        for(let i = 0; i < lista.length; i++){
            copia[i] = lista[i];
        }
        copia.sort((a, b) =>{
            if(a.getEconomia() < b.getEconomia()){
                return 1;
            }else if(a.getEconomia() > b.getEconomia()){
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

let pobo = 0;
let supe = 0;

for(let i = 0; i < lista.length; i++){
    pobo += lista[i].getPoblacion();
}
for(let i = 0; i < lista.length; i++){
    supe += lista[i].getSuperficie();
}

let dens = (Math.floor(pobo / supe) + " hab/Km2");

document.getElementById("pobo").innerHTML = formatear(pobo.toString());
document.getElementById("supe").innerHTML = formatear(supe.toString()) + "&nbspKm2";
document.getElementById("dens").innerHTML = dens;

function formatear(texto){
    let reversa = texto.split("");
    reversa.reverse();
    let devolver = reversa.toString();
    let numero = [];

    while(devolver.includes(",")){
        devolver = devolver.replace(",", "");
    }

    for(let i = 1; i < (devolver.length + 1); i++){
        if(i % 3 == 0){
            numero.push(devolver.substring(i - 3, i));
        }
    }
    if(devolver.length % 3 != 0){
        if(devolver.length % 3 == (1 / 3)){
            numero.push(devolver.substring(devolver.length - 2, devolver.length));
        }else{
            numero.push(devolver.substring(devolver.length - 1, devolver.length))
        }
    }

    numero.reverse();

    for(let i = 0; i < numero.length; i++){
        let volta = "";
        if(numero[i][2] != undefined){
            volta += numero[i][2];
        }
        if(numero[i][1] != undefined){
            volta += numero[i][1];
        }
        volta += numero[i][0];
        volta += "&nbsp";

        numero[i] = volta;
    }

    numero[numero.length - 1] = numero[numero.length - 1].replace("&nbsp","");

    devolver = numero.toString();

    while(devolver.includes(",")){
        devolver = devolver.replace(",","");
    }

    return devolver;

}