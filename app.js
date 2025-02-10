let listaDeAmigosEscolhidos = [];
let pilhaAmigosSorteados = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let amigoAleatorio;
let ultimoAmigoSoteardo;

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if(nome.trim() == "") return alert("Digite o nome de um amigo!");
  
    if (amigoEstaNaLista(nome)) return alert("Esse amigo já está na lista!");
        
    let novoItem = document.createElement("li");
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem)
}

function amigoEstaNaLista(amigo){
    if (listaAmigos.length == 0) return false;
    
    const amigos = listaAmigos.children;
    for (i = 0; i < amigos.length; i++){

        if(amigos[i].textContent == amigo) return true;
    }

    return false;
}

function sortearAmigo(){
    let quantidadeDePessoas = listaAmigos.children.length;
    if (quantidadeDePessoas == 0) return alert("Antes de fazer o sorteio adicione os nomes");

    if (quantidadeDePessoas == listaDeAmigosEscolhidos.length){
        mostrarResultado("Todos os nomes já foram sorteados, adicione mais nomes ou recomece o sorteio")
    } 

    let indiceAleatorio = parseInt(Math.random() * quantidadeDePessoas);
    amigoAleatorio = listaAmigos.children[indiceAleatorio].textContent;

    if (listaDeAmigosEscolhidos.includes(amigoAleatorio)) return sortearAmigo();

    listaDeAmigosEscolhidos.push(amigoAleatorio);
    pilhaAmigosSorteados.push(amigoAleatorio);
    ultimoAmigoSoteardo = amigoAleatorio;
    mostrarResultado (`O amigo secreto sorteado é :${ultimoAmigoSoteardo}`);
    revelarBtnEuSou();
}

function confirmarMeuNome() {
    let resposta = confirm("Este é o seu nome? Se sim, clique em OK para desfazer o sorteio e sortear novamente. Se não, clique em Cancelar para continuar.");
    if (resposta)  return desfazerUltimoSorteio();

    alert("Obrigado por confirmar! Por favor, passe o dispositivo para a próxima pessoa.");
    esconderBtnEuSou();
    resultado.innerHTML = "";
}

function desfazerUltimoSorteio(){
    if (pilhaAmigosSorteados.length > 0) {
        let ultimoSorteado = pilhaAmigosSorteados.pop();
        let index = listaDeAmigosEscolhidos.indexOf(ultimoSorteado);
        if (index > -1) {
            listaDeAmigosEscolhidos.splice(index, 1);
        }
        mostrarResultado("Último sorteio desfeito. Sorteie novamente um novo nome.");
    } else {
        mostrarResultado("Não há sorteios para desfazer.");
    }
}

function revelarBtnEuSou(){
    let btnEuSou = document.getElementById('btnEuSou');
    if (btnEuSou.classList.contains('hidden-button')){
        btnEuSou.classList.replace('hidden-button', 'button-draw');
        btnEuSou.textContent = `Epa! Eu sou ${ultimoAmigoSoteardo}`;
    }
}

function esconderBtnEuSou(){
    let btnEuSou = document.getElementById('btnEuSou');
    btnEuSou.classList.replace('button-draw', 'hidden-button');
}

function mostrarResultado (amigoAleatorio){
    resultado.innerHTML = amigoAleatorio;
}

function recomecarSorteio (){
    listaDeAmigosEscolhidos = [];
    pilhaAmigosSorteados = [];
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
    esconderBtnEuSou();
}
