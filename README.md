# Projeto_Final_PW
# 💼 Sistema de Gerenciamento Bancário

Um sistema completo para gerenciamento de contas bancárias, clientes e operações financeiras básicas. Este projeto foi desenvolvido como parte de um trabalho acadêmico com foco em boas práticas de desenvolvimento web, testes e documentação.

---

## 📅 Entregas do Projeto

### ✅ Primeira Entrega – *Projeto Inicial* (Até **25/08**)

#### ✔️ Tema Validado:
**Sistema Web para Controle de Contas Bancárias**

#### 🎨 Protótipos de Interface:
- Tela de login
- Cadastro de cliente
- Criação de conta bancária
- Tela de transferências
- Visualização de extrato/saldo

#### 📝 Funcionalidades & Backlog:

| Prioridade | Funcionalidade               | Descrição                                    |
|------------|------------------------------|----------------------------------------------|
| 🔥 Alta     | Cadastro de Clientes          | Nome, CPF, e-mail, etc.                      |
| 🔥 Alta     | Criação de Contas Bancárias   | Conta vinculada a um cliente                 |
| 🔥 Alta     | Transferências Internas       | Transferência entre contas do sistema        |
| ⚙️ Média    | Consulta de Extrato           | Histórico de transações                      |
| ⚙️ Média    | Atualização de Dados          | Atualizar informações do cliente             |
| ⭐ Baixa    | Exclusão de Contas Inativas   | Remoção de contas sem movimentações          |

---

### 🛠 Segunda Entrega – *Front & Back* (Até **30/09**)

#### 🗓️ Cronograma:

| Semana         | Tarefa                                      |
|----------------|---------------------------------------------|
| 26/08 – 01/09  | Estrutura inicial do projeto                |
| 02/09 – 08/09  | Cadastro de clientes                        |
| 09/09 – 15/09  | Criação de contas bancárias                 |
| 16/09 – 22/09  | Transferências e extrato                    |
| 23/09 – 29/09  | Atualizações e testes preliminares         |
| 30/09          | ✅ Entrega final da Fase 2                   |

#### 💻 Tecnologias Utilizadas:
- **Frontend:** React.js ou Next.js
- **Backend:** Node.js + Express
- **Banco de Dados:** PostgreSQL ou MongoDB
- **Autenticação:** JWT (JSON Web Token)

---

### 🔄 Métodos HTTP Utilizados

Todos os **5 principais métodos HTTP** foram utilizados:

| Método  | Endpoint                    | Ação                                             |
|---------|-----------------------------|--------------------------------------------------|
| **GET**    | `/accounts/:id`              | Buscar dados da conta                            |
| **POST**   | `/accounts`                  | Criar uma nova conta                             |
| **PUT**    | `/clients/:id`               | Atualização total do cliente                     |
| **PATCH**  | `/clients/:id`               | Atualização parcial (ex: e-mail)                 |
| **DELETE** | `/accounts/:id`              | Deletar conta bancária                           |

---

### 🧪 Terceira Entrega – *Testes e Documentação* (Até **27/10**)

#### ✅ Testes:

| Tipo          | Ferramenta      | Descrição                                |
|---------------|------------------|-------------------------------------------|
| Unitários     | **Jest**         | Teste de funções principais               |
| API           | **Postman**      | Testes de endpoints REST                  |
| Funcionais    | **Selenium IDE** | Fluxo completo (ex: login > transferir)   |

#### 📘 Documentação:
Documentação da API com **Swagger**:

- `GET /accounts/:id`
- `POST /transfer`
- `PATCH /clients/:id`
- `DELETE /accounts/:id`
- etc.

---