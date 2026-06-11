
/* Configurações Globais e Variáveis de Cores Temáticas */
:root {
    --primary: #2e7d32;
    --primary-dark: #1b5e20;
    --bg-main: #f4f7f5;
    --text-dark: #2c3e50;
    --text-muted: #718096;
    --water-color: #2b6cb0;
    --soil-color: #8c7853;
    --money-color: #b7791f;
    --danger: #e53e3e;
    --success: #38a169;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-main);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: var(--text-dark);
}

.game-container {
    width: 100%;
    max-width: 650px;
    padding: 20px;
}

/* Cabeçalho Estilo Dashboard */
header {
    background-color: var(--primary);
    color: white;
    padding: 20px 25px;
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

header h1 { 
    margin: 0; 
    font-
