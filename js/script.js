// Seleciona o container onde os cards serão inseridos
const container = document.getElementById("lista-alunos");

// Verificação de segurança (boa prática profissional)
if (!container) {
  console.error("Elemento #lista-alunos não encontrado no HTML");
}

// Verifica se a lista existe
if (typeof alunos === "undefined") {
  console.error("Arquivo alunos.js não foi carregado");
}

// Função para criar os cards
function renderAlunos() {
  alunos.forEach(aluno => {

    // Criar elemento card
    const card = document.createElement("div");
    card.classList.add("card");

    // Conteúdo do card
    card.innerHTML = `
      <h3>${aluno.nome}</h3>
      <a href="alunos/${aluno.pasta}/index.html" target="_blank">
        Ver Projeto
      </a>
    `;

    // Adiciona no container
    container.appendChild(card);
  });
}

// Executa após carregar a página
document.addEventListener("DOMContentLoaded", renderAlunos);