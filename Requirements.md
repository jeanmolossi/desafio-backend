## API REST

Requirements:

Converter:
USS -> BRL

- Autenticação com JWT
- Cadastro de user:

  - username
  - password

- Transação:

  - id
  - received_value
  - received_coin
  - brl_received_value
  - convertion_value

- OBS:
  - Transação duplicada -> precisa confirmação

### USUÁRIO

- [x] Cadastro de usuário
- [x] Autenticação de Usuário

### TRANSAÇÕES

- [x] Cadastro - POST
  - Show quantidade moeda recebida
  - Show Dollar
  - Show cotação no momento
  - Show do valor final
- [x] Edição - PUT
- [x] Listar transações - GET
- [x] Buscar - GET
- [x] Excluir - DELETE

### ARQUITETURA

- default

### STEPS

- [x] Startar aplicação com NestJS
- [x] Dockerizar applicação
- [x] Criar cadastro de usuário
- [x] Criar autenticação
- [x] Criar endpoints de transação
