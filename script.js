let tentativas = 6;
    let listaDinamica = [];
    let palavraSecretaCategoria;
    let palavraSecretaSorteada;
    
    let bntReiniciar = document.querySelector("#btnReiniciar")
    bntReiniciar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
    });

    const palavras = [
        palavra001 = {
            nome:'ABACATE',
            categoria:"FRUTAS" 
        },

        palavra002 = {
            nome:'ABACAXI',
            categoria:"FRUTAS" 
        },
        palavra003 = {
            nome:'ACEROLA',
            categoria:"FRUTAS" 
        },
        palavra004 = {
            nome:'ACAI',
            categoria:"FRUTAS" 
        },
        palavra005 = {
            nome:'ARACA',
            categoria:"FRUTAS" 
        },
        palavra006 = {
            nome:'BACABA',
            categoria:"FRUTAS" 
        },
        palavra007 = {
            nome:'BACURI',
            categoria:"FRUTAS" 
        },
        palavra008 = {
            nome:'BANANA',
            categoria:"FRUTAS" 
        },
        palavra009 = {
            nome:'CAJA',
            categoria:"FRUTAS" 
        },
        palavra010 = {
            nome:'CAJU',
            categoria:"FRUTAS" 
        },
        palavra011 = {
            nome:'CARAMBOLA',
            categoria:"FRUTAS" 
        },
        palavra012 = {
            nome:'CUPUACU',
            categoria:"FRUTAS" 
        },
        palavra013 = {
            nome:'GRAVIOLA',
            categoria:"FRUTAS" 
        },
        palavra014 = {
            nome:'GOIABA',
            categoria:"FRUTAS" 
        },
        palavra015 = {
            nome:'JABUTICABA',
            categoria:"FRUTAS" 
        },
        palavra016 = {
            nome:'JENIPAPO',
            categoria:"FRUTAS" 
        },
        palavra017 = {
            nome:'MACA',
            categoria:"FRUTAS" 
        },
        palavra018 = {
            nome:'MANGABA',
            categoria:"FRUTAS" 
        },

        palavra019 = {
            nome:'MANGA',
            categoria:"FRUTAS" 
        },
        palavra020 = {
            nome:'MARACUJA',
            categoria:"FRUTAS" 
        },palavra021 = {
            nome:'MANGABA',
            categoria:"FRUTAS" 
        },
        palavra022 = {
            nome:'MURICI',
            categoria:"FRUTAS" 
        },
        palavra023 = {
            nome:'PEQUI',
            categoria:"FRUTAS" 
        },
        palavra024 = {
            nome:'PITANGA',
            categoria:"FRUTAS" 
        },
        palavra025 = {
            nome:'PITAYA',
            categoria:"FRUTAS" 
        },
        palavra026 = {
            nome:'SAPOTI',
            categoria:"FRUTAS" 
        },
        palavra027 = {
            nome:'TANGERINA',
            categoria:"FRUTAS" 
        },
        palavra028 = {
            nome:'UMBU',
            categoria:"FRUTAS" 
        },
        palavra029 = {
            nome:'UVA',
            categoria:"FRUTAS" 
        },
        palavra030 = {
            nome:'UVAI',
            categoria:"FRUTAS" 
        },
            
            
    
    ];

    criarPalavraSecreta()
    function  criarPalavraSecreta(){

        const indexPalavra = parseInt(Math.random() * palavras.length)

        palavraSecretaSorteada = palavras[indexPalavra].nome;
        palavraSecretaCategoria = palavras[indexPalavra].categoria;
        
        console.log(palavraSecretaSorteada)
        console.log(palavraSecretaCategoria)

    }

    montarPalavraNaTela()
    function montarPalavraNaTela(){
        const categoria = document.getElementById("categoria");
        categoria.innerHTML = palavraSecretaCategoria;

        const palavraSecreta = document.getElementById("palavra-secreta");
        palavraSecreta.innerHTML = "";

        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(listaDinamica[i] == undefined){
                    listaDinamica[i] = "&nbsp;";
                    palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
                }
                else{
                    palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
                }     
            }
            
        
        }
    

    function verificaLetraEscolhida(letra){
        document.getElementById("tecla-" + letra).disabled = true;
        if(tentativas > 0)
        {
            mudarStyleLetra("tecla-" + letra, false);
            comparalistas(letra);
            montarPalavraNaTela();
        }    
    }

    function mudarStyleLetra(tecla, condicao){
        if(condicao == false)
        {
            document.getElementById(tecla).style.background = "#C71585";
            document.getElementById(tecla).style.color = "#ffffff";
        }
        else{
            document.getElementById(tecla).style.background = "#008000";
            document.getElementById(tecla).style.color = "#ffffff";
        }
    
        
    }

    function comparalistas(letra){
        const pos = palavraSecretaSorteada.indexOf(letra)

        if(pos < 0){
            tentativas--
            carregaImagemForca();               
        }
        
        else{    
            for(i = 0; i < palavraSecretaSorteada.length; i++)
            {
                if(palavraSecretaSorteada[i] == letra){
                    listaDinamica[i] = letra;
                }
            }
        }
        
        let vitoria = true;
        for(i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i] != listaDinamica[i]){
                vitoria = false;
            }
        }
    
        if(vitoria == true)
        {
            tentativas = 0;            
        }
    }

    function carregaImagemForca(){
        switch(tentativas){
            case 5: 
                document.getElementById("imagem").style.background = "url('./img/forca01.png')";
                break;
            case 4: 
                document.getElementById("imagem").style.background = "url('./img/forca02.png')";
                break; 
                
            case 3: 
                document.getElementById("imagem").style.background = "url('./img/forca03.png')";
                break;

            case 2: 
                document.getElementById("imagem").style.background = "url('./img/forca04.png')";
                break;

            case 1: 
                document.getElementById("imagem").style.background = "url('./img/forca05.png')";
                break;
            case 0: 
                document.getElementById("imagem").style.background = "url('./img/forca06.png')";
                break;

            default: 
                document.getElementById("imagem").style.background = "url('./img/forca.png')";
                break;
            
                
        }
    }