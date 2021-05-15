# Desafio técnico #

Sobre o desafio: Você deve criar uma API Rest que seja responsável por cadastrar transações, editar transações, listar transações e buscar transações.
Por dentro do contexto: Imagine que você irá criar uma API Rest para uma casa de câmbio. A qual terá o atendente que irá cadastrar uma nova transação em Dollar e terá o retorno desse cadastro com a moeda já convertida para Real Brasieiro.
O atendente também pode editar uma transação, pode listar todas as transações e também pode buscar por uma transação específica.

### Features ###

* Deverá haver um endpoint de cadastro de usuário
* Deverá haver um endpoint de autenticação

* Deverá haver um endpoint para cadastro de trasações.
* Deverá haver um endpoint para listagem de transações, exibindo valor da moeda recebida, a moeda que foi recebida, o valor convertido em reais e o valor da cotação na hora do cadastro da transação.
* Deverá haver um endpoint para busca de transação.
* Deverá haver um endpoint para editar uma transação.
* Deverá haver um endpoint para excluir uma transação.

### Requisitos ###

* Utilizar corretamente os Verbos HTTP
* Criar endpoints de entrada e saída de dados de transação    
* Criar interface de conversão de moeda
    - Para isso utilize da api https://docs.awesomeapi.com.br/api-de-moedas
* Arquitetura Limpa

### Diferencial ###

* API Rest nível 3 (Hypermidia controls)
* Typescript
* Testes unitários
* Utilização do Framework para node, NestJS
* Dockerizar aplicação

### Regras de negócio ###

* A autenticação deverá ser feita com JWT
* O cadastro de usuário deve conter os campos: username e password

* Usuário precisa criar uma conta e se autenticar para pode executar uma transação;
* O usuário pode cadastrar uma nova transação
* O usuário pode buscar uma transação
* O usuário pode listar todas as transações
* O usuário pode apagar uma transação

* Uma transação deve conter os campos: id, received_value, received_coin, brl_received_value, convertion_value
* Para uma nova transação caso o valor recebido e a moeda sejam o mesmo da última transação cadastrada deve-se enviada uma confirmação. (confirm_duplicate_transaction)

### Como submeter ###

* Abra sua branch no modelo seunome/resolucao-teste-tecnico
* Procure fazer o máximo de commits com todas suas decisões
* Faça um Pull request para a branch master
