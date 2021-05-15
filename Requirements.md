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

- Cadastro de usuário
- Autenticação de Usuário

### TRANSAÇÕES

- Cadastro - POST
  - Show quantidade moeda recebida
  - Show Dollar
  - Show cotação no momento
  - Show do valor final
- Edição - PUT
- Listar transações - GET
- Buscar - GET
- Excluir - DELETE

### ARQUITETURA

- default

### STEPS

- [x] Startar aplicação com NestJS
- [x] Dockerizar applicação
- Criar cadastro de usuário
- Criar autenticação
- Criar endpoints de transação
