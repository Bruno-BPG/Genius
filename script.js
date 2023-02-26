    let pontuacaoAtual = 0
    let melhorPontuacao = 0

    const main = document.querySelector("main")
    main.innerHTML = `
        <div class="contJogo">
            <section id="ladoDeCima">
                <div class="botaoColorido, btnVermelho"></div>
                <div class="botaoColorido, btnAzul"></div>
            </section>
            <section id="ladoDeBaixo">
                <div class="botaoColorido, btnAmarelo"></div>
                <div class="botaoColorido, btnVerde"></div>
            </section>
        </div>


        <section id="caixaDeResultados">
            <div id='divResultados'>
            <div id="divBottons"><button class="botaoComecar">Começar</button></div>  
            <div id="placares"> 
                <div id="placarAtual"><span>Placar Atual: </span><span id="pontuacaoAtualNumero">${pontuacaoAtual}</span></div>  
                <div id="melhorPlacar"><span>MelhorPlacar: </span><span id="melhorPontuacaoNumero">${melhorPontuacao}</span></div>
            </div>  
            </div>
        </section>
    `

    const divBottons = document.querySelector("#divBottons")
    const botaoIniciar = document.querySelector(".botaoComecar")
    botaoIniciar.addEventListener("click", ()=>{
        gerarCorAleatoria()
        piscarAoIniciarNovaRodada()
    })

    const spanPontuacaoAtual = document.querySelector("#pontuacaoAtualNumero")
    const spanMelhorPontuacao = document.querySelector("#melhorPontuacaoNumero")


    function AtualizaPlacares(){
        spanPontuacaoAtual.innerHTML = `${pontuacaoAtual}`
        spanMelhorPontuacao.innerHTML = `${melhorPontuacao}`
        if(pontuacaoAtual > melhorPontuacao){melhorPontuacao = pontuacaoAtual}}

    function VocePerdeuJogarNovamente(){
        divBottons.innerHTML = ""
        divBottons.id = "jogarNovamente"
        divBottons.innerHTML = `
        <div id="jogarNovamentePontuacao"><span>Sua pontuação foi</span><small> ${pontuacaoAtual} </small> </div>
        <div id="botaoJogarNovamente"> <small>Não foi dessa Vez ☹</small>
        <button class="btnJogarNovamente">Jogar Novamente</button></div>
        `
        arrDeCoresGeradas = []
        arrDoJogador = []
        AtualizaPlacares()
        let btnJogarNovamente = document.querySelector(".btnJogarNovamente")
        btnJogarNovamente.addEventListener("click", () =>{
            pontuacaoAtual = 0
            criaFraseInicial()
            gerarCorAleatoria()
            piscarAoIniciarNovaRodada()
                })
    }

    let arrDoJogador = []
    let arrDeCoresGeradas = []

    function criaFraseInicial(){
        divBottons.innerHTML = ""
        divBottons.innerHTML = `<small id="avisoInicio"> Atenção prestes a iniciar! </small>`}
    function Parabens(){
        divBottons.InnerHTML = ""
        divBottons.innerHTML = `<small id="passouDeFase">Parabens voce passou de fase !!</small>`}

    const listaDeCores = ['azul', 'verde', 'vermelho', 'amarelo'];

    function gerarCorAleatoria(){
        let corGerada = listaDeCores[Math.floor(Math.random() * 4)];
        arrDeCoresGeradas.push(corGerada)  
        return corGerada
    } 

    const btnVermelho = document.querySelector(".btnVermelho")
    const btnAzul = document.querySelector(".btnAzul")
    const btnAmarelo = document.querySelector(".btnAmarelo")
    const btnVerde = document.querySelector(".btnVerde")


    btnVermelho.addEventListener("click", () =>{
        arrDoJogador.push("vermelho")
        BrilhaBrilhaVermelho()
        if(verificacao() == true){
            if(arrDoJogador.length == arrDeCoresGeradas.length){
                Parabens()
                arrDoJogador = []
                pontuacaoAtual++
                AtualizaPlacares()
                setTimeout(()=>{
                    gerarCorAleatoria()
                    piscarAoIniciarNovaRodada()
                },2000)
            }
        }
        if(verificacao() == false){
            VocePerdeuJogarNovamente()
        }
    })

    btnAzul.addEventListener("click", () =>{
        arrDoJogador.push("azul")
        BrilhaBrilhaAzul()
        if(verificacao() == true){
            if(arrDoJogador.length == arrDeCoresGeradas.length){
                Parabens()
                arrDoJogador = []
                pontuacaoAtual++
                AtualizaPlacares()
                setTimeout(()=>{
                    gerarCorAleatoria()
                    piscarAoIniciarNovaRodada()
                },2000)
            }
        }
        if(verificacao() == false){
            VocePerdeuJogarNovamente()
        }
    })

    btnAmarelo.addEventListener("click", () =>{
        arrDoJogador.push("amarelo")
        BrilhaBrilhaAmarelo()
        if(verificacao() == true){
            if(arrDoJogador.length == arrDeCoresGeradas.length){
                Parabens()
                arrDoJogador = []
                pontuacaoAtual++
                AtualizaPlacares()
                setTimeout(()=>{
                    gerarCorAleatoria()
                    piscarAoIniciarNovaRodada()
                },2000)
            }
        }
        if(verificacao() == false){
            VocePerdeuJogarNovamente()
        }
    })

    btnVerde.addEventListener("click", () =>{
        arrDoJogador.push("verde")
        BrilhaBrilhaVerde()
        if(verificacao() == true){
            if(arrDoJogador.length == arrDeCoresGeradas.length){
                Parabens()
                arrDoJogador = []
                pontuacaoAtual++
                AtualizaPlacares()
                setTimeout(()=>{
                    gerarCorAleatoria()
                    piscarAoIniciarNovaRodada()
                },2000)
            }
        }
        if(verificacao() == false){
            VocePerdeuJogarNovamente()
        }
    })

    let vermelhoSorteado = "#FF4242"
    let azulSorteado = "#00FFFF"
    let verdeSorteado = "#06fa1a"
    let amareloSorteado = "yellow"  
    let vermelhoOriginal = "#C30000"
    let azulOriginal = "blue"
    let verdeOriginal = "green"
    let amareloOriginal = "goldenrod"

    function piscarAoIniciarNovaRodada(arr = arrDeCoresGeradas){
        criaFraseInicial()
        let cont = 0
        let interval = setInterval(function(){
            switch (arr[cont]) {
                case "vermelho" :
                    setTimeout(function(){
                        btnVermelho.style.backgroundColor = vermelhoSorteado;          
                    }, 1000);

                    setTimeout(function() {
                        btnVermelho.style.backgroundColor = vermelhoOriginal;
                    }, 3000);  
                    cont++
                    break;
                case "amarelo" :
                    setTimeout(function(){
                        btnAmarelo.style.backgroundColor = amareloSorteado;
                        
                    }, 1000);

                    setTimeout(function() {
                        btnAmarelo.style.backgroundColor = amareloOriginal;
                    }, 3000);
                    cont++
                    break;
                case "azul":
                    setTimeout(function(){
                        btnAzul.style.backgroundColor = azulSorteado;
                        
                    }, 1000);

                    setTimeout(function() {
                        btnAzul.style.backgroundColor = azulOriginal;
                    }, 3000);
                    cont++
                    break;
                case "verde":
                    setTimeout(function(){
                        btnVerde.style.backgroundColor = verdeSorteado;
                        
                    }, 1000);

                    setTimeout(function() {
                        btnVerde.style.backgroundColor = verdeOriginal;
                    }, 3000);
                    cont++
                break;
            }
            if(cont == arr.length){
                clearInterval(interval)
                cont = 0
            }
        },3000)
    } 

    function verificacao(testee = arrDoJogador){
        let acerto = true
        for(let i = 0; i<testee.length; i++){
            if(arrDeCoresGeradas[i] !== arrDoJogador[i]){ acerto = false}
        }
    return acerto
    }

    function BrilhaBrilhaVerde(){
        setTimeout(function(){
            btnVerde.style.backgroundColor = verdeSorteado;
        }, 100);

        setTimeout(function() {
            btnVerde.style.backgroundColor = verdeOriginal;
        }, 500);
    }
    function BrilhaBrilhaAmarelo(){
        setTimeout(function(){
            btnAmarelo.style.backgroundColor = amareloSorteado;
        }, 100);

        setTimeout(function() {
            btnAmarelo.style.backgroundColor = amareloOriginal;
        }, 500);
    }
    function BrilhaBrilhaVermelho(){
        setTimeout(function(){
            btnVermelho.style.backgroundColor = vermelhoSorteado;
        }, 100);

        setTimeout(function() {
            btnVermelho.style.backgroundColor = vermelhoOriginal;
        }, 500);
    }
    function BrilhaBrilhaAzul(){
        setTimeout(function(){
            btnAzul.style.backgroundColor = azulSorteado;
        }, 100);

        setTimeout(function() {
            btnAzul.style.backgroundColor = azulOriginal;
        }, 500);
    }