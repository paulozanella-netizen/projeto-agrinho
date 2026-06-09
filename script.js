body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f7f5;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #2c3e50;
}

.game-container {
    width: 100%;
    max-width: 650px;
    padding: 20px;
}

header {
    background-color: #2e7d32;
    color: white;
    padding: 20px;
    border-radius: 12px 12px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

header h1 { margin: 0; font-size: 22px; }
.status span { margin-left: 15px; font-size: 16px; }

.card {
    background: white;
    padding: 30px;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

hr {
    border: 0;
    height: 1px;
    background: #e0e0e0;
    margin: 20px 0;
}

.oracle-box h3 {
    color: #1b5e20;
    margin-top: 0;
}

.options-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 20px;
}

.btn-option {
    background-color: #f1f8e9;
    border: 2px solid #c5e1a5;
    color: #33691e;
    padding: 14px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    transition: all 0.2s;
}

.btn-option:hover {
    background-color: #dcedc8;
    border-color: #9ccc65;
}

/* Consequências Pesadas */
.hidden { display: none; }

#feedback {
    margin-top: 25px;
    padding: 15px;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    animation: slideUp 0.4s ease;
}

.sucesso {
    background-color: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #a5d6a7;
}

.crise {
    background-color: #ffebee;
    color: #c62828;
    border: 1px solid #ef9a9a;
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
