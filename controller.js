// Função para acessar a página de cadastro após validação de login
function acessar() {
    // Obtém o valor dos campos de e-mail e senha
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Verifica se os campos de e-mail e senha estão preenchidos
    if (!loginEmail || !loginSenha) {
        // Exibe um alerta se algum campo estiver vazio
        alert("Favor preencher todos os campos");
    } else {
        // Redireciona para a página de cadastro se todos os campos estiverem preenchidos
        window.location.href = 'cadrastro.html';
    }
}

// Arrays para armazenar dados dos usuários
var dadosLista = []; // Array para armazenar os nomes dos usuários
var salvaEmail = []; // Array para armazenar os e-mails dos usuários

// Função para salvar os dados do usuário
function salvarUser() {
    // Obtém o valor dos campos de nome e e-mail
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    // Verifica se os campos de nome e e-mail estão preenchidos
    if (nomeUser && emailUser) {
        // Adiciona o nome e o e-mail aos arrays correspondentes
        dadosLista.push(nomeUser);
        salvaEmail.push(emailUser);

        // Cria a lista atualizada na tabela
        criaLista();

        // Limpa os campos de entrada após salvar
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
    } else {
        // Exibe um alerta se algum campo estiver vazio
        alert("Favor preencher todos campos!");
    }
}

// Função para criar a lista na tabela
function criaLista() {
    // Inicializa o conteúdo da tabela com o cabeçalho
    let table = "<tr><th>Nome Usuário</th><th>E-mail</th><th>Ações</th></tr>";

    // Adiciona uma linha para cada usuário na lista
    for (let i = 0; i < dadosLista.length; i++) {
        table += "<tr><td>" + dadosLista[i] + "</td><td>" + salvaEmail[i] + "</td><td><button type='button' onclick='editar(" + i + ")'>Editar</button><button id='btnaltera' type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
    }

    // Atualiza o conteúdo da tabela com a nova lista
    document.getElementById('table').innerHTML = table;
}

// Função para editar um usuário na lista
function editar(i) {
    // Preenche os campos de entrada com os dados do usuário selecionado
    document.getElementById('nomeUser').value = dadosLista[i];
    document.getElementById('emailUser').value = salvaEmail[i];

    // Remove o usuário da lista para permitir re-adicionar com alterações
    dadosLista.splice(i, 1);
    salvaEmail.splice(i, 1);
}

// Função para excluir um usuário da lista
function excluir(i) {
    // Remove o usuário da lista
    dadosLista.splice(i, 1);
    salvaEmail.splice(i, 1);

    // Remove a linha correspondente da tabela
    document.getElementById('table').deleteRow(i + 1); // +1 para ajustar o índice da tabela
}
                                                                                                                                                                                                                                                                                                                                            
 