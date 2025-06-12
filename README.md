
# ✅ Avaliação Prática - Testes End-to-End com Playwright e Cucumber

Este repositório contém um projeto de automação de testes E2E utilizando [Playwright](https://playwright.dev/) em conjunto com [Cucumber](https://cucumber.io/) e Gherkin, para uma abordagem orientada a comportamento (BDD).

---

## 🎯 Objetivo

Automatizar cenários de teste simulando a navegação e interações de um usuário real com o sistema, validando funcionalidades como login e checkout de forma legível e colaborativa com Cucumber.

---

## 🧪 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)
- [Cucumber](https://cucumber.io/)
- [TypeScript](https://www.typescriptlang.org/)
- Gherkin
- Relatórios HTML

---

## 📁 Estrutura do Projeto

avaliacao-playwright-cucumber/ ├── features/              # Cenários de teste em Gherkin (.feature) ├── steps/                 # Implementações dos passos (step definitions) ├── tests/                 # Scripts complementares ou suporte ├── node_modules/          # Dependências (ignorado no Git) ├── .gitignore             # Arquivos ignorados no versionamento ├── cucumber.config.ts     # Configuração do Cucumber ├── cucumber.mjs           # Script para executar os testes ├── playwright.config.ts   # Configuração do Playwright ├── tsconfig.json          # Configuração do TypeScript ├── package.json           # Dependências e scripts do projeto ├── package-lock.json └── README.md

---

## 🚀 Como Executar os Testes

1. **Instale as dependências:**

```bash
npm install

2. Execute os testes com Cucumber + Playwright:



npm run test:cucumber

> Isso executa os cenários definidos nos arquivos .feature e gera um relatório HTML.



3. (Opcional) Visualizar o relatório:



Se configurado para gerar relatório HTML, ele estará disponível no diretório definido na configuração (test-results/, por exemplo).


---

📌 Observações

Os testes seguem a abordagem BDD com Gherkin, facilitando o entendimento e colaboração entre QA, Devs e POs.

As pastas node_modules, test-results e playwright-report estão no .gitignore.

Todos os testes são escritos em TypeScript.

A estrutura modular permite escalar facilmente a automação.



👨‍💻 Autor

Lucas Ribeiro
https://github.com/LukRibeiro


