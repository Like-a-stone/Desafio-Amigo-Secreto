let listaDeAmigosEscolhidos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if(nome.trim() == ""){
        alert("Digite o nome de um amigo!")
    } else {
        
        let novoItem = document.createElement("li");
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    }
}

function sortearAmigo(){
    let quantidadeDePessoas = listaAmigos.children.length;
    if (quantidadeDePessoas == 0){
        alert("Antes de fazer o sorteio adicione os nomes ");

    } else if (quantidadeDePessoas == listaDeAmigosEscolhidos.length){
        mostrarResultado("Todos os nomes já foram sorteados, adicione mais nomes ou recomece o sorteio")

    } else {
        let indiceAleatorio = parseInt(Math.random() * quantidadeDePessoas);
        let amigoAleatorio = listaAmigos.children[indiceAleatorio].textContent;

        if (listaDeAmigosEscolhidos.includes(amigoAleatorio)){
            sortearAmigo();
        }else{
            listaDeAmigosEscolhidos.push(amigoAleatorio);
            mostrarResultado (`O amigo secreto sorteado é :${amigoAleatorio}`);
        }
    }
}

function mostrarResultado (amigoAleatorio){
    resultado.innerHTML = amigoAleatorio;
}

function recomecarSorteio (){
    listaDeAmigosEscolhidos = [];
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
}
