# ✅ Avaliação Prática - Testes End-to-End com Playwright

Este repositório contém o projeto de automação de testes E2E utilizando a ferramenta [Playwright](https://playwright.dev/).

## 🎯 Objetivo

Automatizar cenários de teste simulando a navegação e interações de um usuário real com o sistema, validando a funcionalidade da tela de login e de checkout (compra).

## 🧪 Tecnologias Utilizadas

- Node.js
- Playwright Test
- JavaScript
- HTML Report (Relatório visual dos testes)

## 📂 Estrutura do Projeto

avaliacao-playwright-e2e/
├── tests/
│   ├── login.spec.js
│   └── checkout.spec.js
├── playwright-report/     # ignorado no Git
├── test-results/          # ignorado no Git
├── package.json
├── .gitignore
└── README.md

## 🚀 Como Executar os Testes

1 Instale as dependências:

npm install

2 Execute os testes :npx playwright test

3 Gere e visualize o relatório: npx playwright show-report

📝 Observações
Os testes simulam um cenário básico de login e checkout.

Um relatório HTML é gerado automaticamente após a execução.

Pastas como node_modules, playwright-report e test-results estão listadas no .gitignore.

👨‍💻 Autor

Lucas Ribeiro
https://github.com/LukRibeiro

