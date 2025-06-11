Feature: Verificar resposta da API

  Scenario: Verificar status 200 da API
    Given que faço uma requisição GET para "https://jsonplaceholder.typicode.com/posts"
    Then o status da resposta deve ser 200
