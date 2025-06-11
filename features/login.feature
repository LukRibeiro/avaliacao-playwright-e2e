Feature: Login

  Scenario: Usuário faz login com sucesso
    Given que estou na página de login
    When preencho usuário e senha válidos
    Then devo ver a página de inventário
