// validar acesso de tela de login

function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha =  document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha) {
        alert('favor preencher todos os campos');
    }else{
        //alert('campos preenchidos com sucesso');
        window.location.href = 'cadrasto.html';
    }
}


// Função que armazena em array nome na tabela de cadastro

var dadosListas = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
       dadosListas.push(nomeUser);
       //console.log(dadosListas);
       criaLista();
       document.getElementById('nomeUser').value = "";
    }else{
        alert('Favor informar o nome para cadastro');
    }
}

//função para criar lista
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome de usuário</th><th>Açoes</th></tr>";
    for(let i =0; i <= (dadosListas.length - 1 ) ; i++) {
        tabela += "<tr><td>" + dadosListas[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIdex)'>Editar</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;

    }
}

// Função para editar nome da lista

function editar(i){
    document.getElementById('nomeUser').value = dadosListas[(i - 1)];
    dadosListas.splice(dadosListas[(i - 1)], 1);



}