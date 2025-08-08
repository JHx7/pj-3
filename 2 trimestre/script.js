const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está assistindo a uma partida de futebol e vê um novo recurso tecnológico sendo usado para analisar os lances em tempo real. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é impressionante!",
                afirmacao: "Ficou maravilhado com o uso da tecnologia para tornar o jogo mais justo e emocionante."
            },
            {
                texto: "Isso é estranho!",
                afirmacao: "Ficou surpreso com a ideia de usar tecnologia para analisar decisões durante o jogo."
            }
        ]
    },
    {
        enunciado: "Você está em um treino e o treinador sugere usar um aplicativo de análise de desempenho para melhorar o jogo do time. O que você faz?",
        alternativas: [
            {
                texto: "Aceito a sugestão e tento usar o app para analisar meus próprios dados e melhorar meu desempenho.",
                afirmacao: "Conseguiu usar a tecnologia para identificar pontos de melhoria no seu jogo."
            },
            {
                texto: "Prefiro treinar da maneira tradicional, sem usar a tecnologia.",
                afirmacao: "Sentiu mais confortável com o método tradicional de treino, sem depender de tecnologias."
            }
        ]
    },
    {
        enunciado: "Durante uma partida importante, você escuta um debate sobre como a tecnologia está mudando o futebol. Qual é sua opinião sobre o impacto das inovações tecnológicas no esporte?",
        alternativas: [
            {
                texto: "A tecnologia pode melhorar as decisões dos árbitros e tornar o jogo mais justo.",
                afirmacao: "Defende que a inovação tecnológica é essencial para melhorar a precisão e a equidade nas decisões durante as partidas."
            },
            {
                texto: "As tecnologias podem prejudicar a dinâmica do jogo e tiram um pouco da emoção.",
                afirmacao: "Acredita que o futebol deve manter seu caráter imprevisível e que a tecnologia pode interferir na experiência do jogo."
            }
        ]
    },
    {
        enunciado: "Após o jogo, o time precisa criar uma estratégia para a próxima partida. Você precisa criar um gráfico com o desempenho dos jogadores. O que você faz?",
        alternativas: [
            {
                texto: "Usar uma ferramenta de design para criar um gráfico simples e fácil de entender.",
                afirmacao: "Notou que muitos jogadores ainda têm dificuldades em entender as análises tradicionais e decidiu compartilhar suas habilidades para ajudar a equipe."
            },
            {
                texto: "Usar uma plataforma de inteligência artificial para gerar gráficos e analisar automaticamente os dados dos jogadores.",
                afirmacao: "Aproveitou a IA para acelerar o processo de análise e conseguiu ensinar a equipe a usar essas ferramentas para melhorar o desempenho."
            }
        ]
    },
    {
        enunciado: "Durante a final de um campeonato, um jogador do seu time foi expulso após uma decisão polêmica do árbitro. A tecnologia de VAR foi utilizada para revisar o lance. Qual sua opinião sobre o uso do VAR no futebol?",
        alternativas: [
            {
                texto: "O VAR é uma ótima ferramenta, pois ajuda a corrigir erros importantes durante a partida.",
                afirmacao: "Acredita que o VAR torna o futebol mais justo, corrigindo decisões erradas de forma eficiente."
            },
            {
                texto: "O VAR tira um pouco da emoção do jogo, pois demora muito e altera o ritmo da partida.",
                afirmacao: "Preocupa-se com o impacto do VAR na fluidez e emoção do jogo, achando que ele pode quebrar a continuidade e o ritmo das partidas."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();