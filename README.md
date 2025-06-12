---

# Avaliação Prática – Automação de Testes E2E com Playwright e Cucumber

Este repositório apresenta uma solução de automação de testes End-to-End (E2E) utilizando [Playwright](https://playwright.dev/) em conjunto com [Cucumber](https://cucumber.io/) e a linguagem Gherkin, adotando uma abordagem orientada a comportamento (BDD).

---

## Objetivo

Implementar cenários de teste automatizados simulando a navegação e interações de um usuário real com o sistema, validando funcionalidades essenciais como login e fluxo de checkout. A escolha do Cucumber visa garantir uma estrutura legível, colaborativa e de fácil manutenção, promovendo alinhamento entre áreas técnicas e de negócio.

---

## Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [Playwright](https://playwright.dev/)
* [Cucumber](https://cucumber.io/)
* [TypeScript](https://www.typescriptlang.org/)
* Gherkin
* Geração de relatórios HTML

---

## Estrutura do Projeto

```
avaliacao-playwright-cucumber/
├── features/              # Definição dos cenários de teste (.feature)
├── steps/                 # Implementação dos passos (step definitions)
├── tests/                 # Scripts complementares e utilitários
├── node_modules/          # Dependências do projeto
├── .gitignore             # Arquivos e pastas ignorados no versionamento
├── cucumber.config.ts     # Configuração do Cucumber
├── cucumber.mjs           # Script de execução dos testes
├── playwright.config.ts   # Configuração do Playwright
├── tsconfig.json          # Configuração do TypeScript
├── package.json           # Dependências e scripts do projeto
├── package-lock.json
└── README.md
```

---

## Execução dos Testes

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes com Cucumber + Playwright:

```bash
npm run test:cucumber
```

> Os cenários definidos em Gherkin serão executados e, se configurado, um relatório HTML será gerado automaticamente.

3. (Opcional) Acesse o relatório de testes:

Caso esteja configurado, o relatório estará disponível em um diretório como `test-results/` ou `playwright-report/`.

---

## Considerações

* A estrutura segue os princípios de BDD, promovendo clareza e colaboração entre QAs, desenvolvedores e stakeholders.
* Pastas como `node_modules`, `test-results` e `playwright-report` estão corretamente ignoradas no controle de versão via `.gitignore`.
* Todo o projeto é escrito em TypeScript, garantindo maior segurança e organização no código.
* A estrutura modular facilita a manutenção e escalabilidade da automação.

---

## Autor

**Lucas Ribeiro**
[https://github.com/LukRibeiro](https://github.com/LukRibeiro)

---

