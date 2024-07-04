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
       console.log(dadosListas);
       document.getElementById('nomeUser').value = "";
    }else{
        alert('Favor informar o nome para cadastro');
    }
}