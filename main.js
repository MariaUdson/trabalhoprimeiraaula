const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;

const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if(tamanhoSenha > 1) {
    //tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.TextContent = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha < 20){
    //tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.TextContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = Document. querySelectorAll('.checkbox');

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789'
const simbolos = '!@*?';
geraSenha();

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos; 
    } 
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = Math.random()*alfabeto
    length;
    numeroAleatorio = math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
}
campoSenha.value = senha;
classificaSenha(alfabeto.length);

}

function classificaSenha(){
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (tamanhoSenha > 11){
    forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12){
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha < 6){
        forcaSenha.classList.add('fraca');
    }
}
function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    if (entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Um computador pode levar até" + 
    Math.floor(2**entropia/(100e6*60*60*24)) + "dias para descobrir essa senha.";
    console.log(entropia);
}



