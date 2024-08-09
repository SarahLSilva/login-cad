// Função para validar o acesso na tela de login
function acessar() {
    // Obtém os valores dos campos de e-mail e senha
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Verifica se algum dos campos está vazio
    if (!loginEmail || !loginSenha) {
        // Exibe um alerta se algum campo estiver vazio
        alert('favor preencher todos os campos');
    } else {
        // Caso todos os campos estejam preenchidos, redireciona para a página de cadastro
        // alert('campos preenchidos com sucesso');
        window.location.href = 'cadrasto.html';
    }
}

// Array para armazenar os nomes dos usuários
var dadosListas = [];

// Função para salvar o nome do usuário na lista
function salvarUser() {
    // Obtém o valor do campo de entrada do nome do usuário
    let nomeUser = document.getElementById('nomeUser').value;

    // Verifica se o campo de nome não está vazio
    if (nomeUser) {
        // Adiciona o nome à lista
        dadosListas.push(nomeUser);
        // console.log(dadosListas);
        // Atualiza a lista exibida
        criaLista();
        // Limpa o campo de entrada do nome do usuário
        document.getElementById('nomeUser').value = "";
    } else {
        // Exibe um alerta se o nome não for informado
        alert('Favor informar o nome para cadastro');
    }
}

// Função para criar e atualizar a lista na tabela
function criaLista() {
    // Inicializa o conteúdo da tabela com cabeçalhos
    let tabela = "<tr><th>Nome de usuário</th><th>Ações</th></tr>";

    // Itera sobre a lista de nomes para criar as linhas da tabela
    for (let i = 0; i <= (dadosListas.length - 1); i++) {
        // Adiciona uma linha para cada nome na tabela, com um botão para editar
        tabela += "<tr><td>" + dadosListas[i] + "</td><td><button type='button' onclick='editar(" + i + ")'>Editar</button></td><td><button type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
    }
    
    // Atualiza o conteúdo da tabela com a nova linha
    document.getElementById('tabela').innerHTML = tabela;
}

// Função para editar o nome na lista
function editar(i) {
    // Define o campo de entrada do nome do usuário com o nome selecionado para edição
    document.getElementById('nomeUser').value = dadosListas[i];
    // Remove o nome da lista usando o índice
    dadosListas.splice(i, 1);
    // Atualiza a tabela após a edição
    criaLista();
}

// Função para excluir um nome da lista
function excluir(i) {
    // Remove o nome da lista usando o índice
    dadosListas.splice(i, 1);
    //O método splice() é usado principalmente quando você precisa excluir ou adicionar novos elementos a um array. Em algumas situações, você também pode usá-lo para separar um array que tenha conteúdo misto, como no caso acima.
    // Atualiza a tabela após a exclusão
    criaLista();
}

