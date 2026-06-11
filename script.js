// Base de dados aprimorada com dados climáticos e impactos reais nos recursos
const niveisJogo = [
    {
        nivel: 1,
        titulo: "Nível 1 (O Despertar)",
        clima: "Seca Extrema",
        desc: "Gestão de uma pequena fazenda familiar. O desafio é sobreviver à primeira grande seca.",
        pergunta: "Qual a porcentagem ideal de cobertura de solo para evitar a lixiviação em chuvas tropicais?",
        alternativas: [
            "Apenas 10% de cobertura", 
            "No mínimo 70% de cobertura", 
            "Cerca de 35% de cobertura", 
            "O solo deve ficar totalmente limpo"
        ],
        correta: 1, // Segunda opção
        // Impactos nos recursos: [Água, Solo, Capital]
        impactos: [
            { agua: -20, solo: -30, capital: +10 }, // Errada
            { agua: +30, solo: +20, capital: -15 }, // Correta (Gasta capital para implantar palhada, mas ganha recursos)
            { agua: -10, solo: -10, capital: +5 },  // Errada
            { agua: -35, solo: -40, capital: +20 }  // Errada
        ],
        txtSucesso: "Excelente! A palhada protegeu o solo, manteve a umidade e sua fazenda familiar sobreviveu à seca extrema! Progredindo...",
        txtCrise: "🚨 CRISE AMBIENTAL! O solo exposto secou completamente e a chuva lavou os poucos nutrientes restantes. Sua fazenda faliu."
    },
    {
        nivel: 3,
        titulo: "Nível 3 (Escala Industrial)",
        clima: "Instabilidade Climática",
        desc: "Você controla grandes latifúndios. O risco aqui é a compactação do solo e a perda de exportação.",
        pergunta: "Para mitigar a compactação do solo pesado pelo maquinário e obter certificação ambiental, qual estratégia utilizar?",
        alternativas: [
            "Uso intensivo de arado profundo", 
            "Aumento da irrigação subsuperficial", 
            "Tráfego controlado de máquinas e rotação com plantas de raízes pivotantes", 
            "Aplicação massiva de calcário calcítico"
        ],
        correta: 2, // Terceira opção
        impactos: [
            { agua: 0, solo: -25, capital: -20 },
            { agua: -40, solo: -10, capital: -30 },
            { agua: +15, solo: +30, capital: -10 }, // Correta
            { agua: 0, solo: -15, capital: -25 }
        ],
        txtSucesso: "Sucesso! O tráfego controlado evitou a compactação e os auditores internacionais liberaram seus selos de exportação!",
        txtCrise: "🚨 EMBARGO INTERNACIONAL! O maquinário pesado esmagou a estrutura do solo. Sem certificação verde, os compradores cancelaram os contratos."
    },
    {
        nivel: 5,
        titulo: "Nível 5 (Nação Sustentável)",
        clima: "Transição Global 2050",
        desc: "Você define políticas públicas. O equilíbrio é global e decisões erradas geram crises diplomáticas.",
        pergunta: "Qual o mecanismo mais eficiente para incentivar a preservação de APPs em larga escala sem quebrar o PIB do agronegócio?",
        alternativas: [
            "Estatização de terras produtivas", 
            "Subsídio pesado ao óleo diesel agrícola", 
            "Criação de programas de Pagamento por Serviços Ambientais (PSA) via mercado de carbono", 
            "Proibição total de fertilizantes minerais"
        ],
        correta: 2, // Terceira opção
        impactos: [
            { agua: -10, solo: -10, capital: -50 },
            { agua: -20, solo: -20, capital: -30 },
            { agua: +25, solo: +20, capital: +40 }, // Correta
            { agua: 0, solo: -30, capital: -45 }
        ],
        txtSucesso: "Vitória Global! O PSA uniu lucro e preservação. O país virou a superpotência sustentável de 2050!",
        txtCrise: "🚨 CAOS DIPLOMÁTICO! Políticas ineficientes fizeram o desmatamento disparar. Sanções internacionais severas paralisaram a economia."
    }
];

// Estado Inicial dos Recursos do Simulador (Valores em %)
let recursos = {
    agua: 60,
    solo: 60,
    capital: 50
};

let indiceAtual = 0;
let pontuacao = 0;

// Seletores do DOM
const txtNivel = document.getElementById('level-display');
const txtPontos = document.getElementById('score-display');
const tituloNivel = document.getElementById('level-title');
const descNivel = document.getElementById('level-desc');
const badgeClima = document.getElementById('climate-badge');
const containerPergunta = document.getElementById('question-text');
const containerOpcoes = document.getElementById('options-container');
const painelFeedback = document.getElementById('feedback');

// Seletores das Barras de Progresso
const barraAgua = document.getElementById('bar-water');
const barraSolo = document.getElementById('bar-soil');
const barraCapital = document.getElementById('bar-money');

// Atualiza visualmente o painel de recursos da interface
function atualizarPainelVisual()
