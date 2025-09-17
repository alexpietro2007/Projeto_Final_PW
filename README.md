# MintTrust

# 💼 Sistema de Gerenciamento Bancário

Um sistema completo para gerenciamento de **contas bancárias**, **clientes** e **operações financeiras básicas**, desenvolvido como parte de um trabalho acadêmico com foco em **boas práticas de desenvolvimento web**, **testes** e **documentação**.

---

## 🎯 Objetivo Geral
Desenvolver uma aplicação web que permita o cadastro, gerenciamento e operação de contas bancárias de forma **segura**, **intuitiva** e **eficiente**.

## 📌 Objetivos Específicos
1. Implementar cadastro e autenticação de clientes.
2. Criar funcionalidades para abertura e finalização de contas e movimentações internas.
3. Permitir consultas de saldo e extrato de transações.
4. Realizar testes unitários, de API e funcionais.
5. Documentar a API utilizando Swagger.

---

## 📅 Entregas do Projeto

### ✅ 1ª Entrega – Projeto Inicial *(até 25/08)*
- Tema validado: **Sistema Web para Controle de Contas Bancárias**
- Protótipos: Login, cadastro de cliente, abertura e finalização de conta, transferência, extrato,.

**Backlog de funcionalidades:**
| Prioridade | Funcionalidade             | Descrição                                  |
|------------|---------------------------|--------------------------------------------|
| 🔥 Alta    | Cadastro de Clientes       | Nome, CPF, e-mail, etc.                    |
| 🔥 Alta    | Criação de Contas          | Conta vinculada a um cliente               |
| 🔥 Alta    | Saque e Deposito           | sacar e depositar dinheiro                 |
| 🔥 Alta    | Consulta de Extrato        | Histórico de transações                    |
| ⚙️ Média   | fecha a conta              | Finalizar a Conta do Cliente               |
| ⚙️ Média  | Transferências Internas    | Entre contas do próprio sistema            | 
| ⚙️ Média   | Atualização de Dados       | Alterar informações do cliente             |
| ⭐ Baixa   | Exclusão de Contas Inativas| Remoção de contas sem movimentação         |
| ⭐ Baixa   | Transferências Externas    | Entra em contato com contas externas       |

---

### 🛠 2ª Entrega – Frontend & Backend *(até 30/09)*

**Cronograma:**
1. **26/08 – 01/09**: Estrutura inicial do projeto  
2. **02/09 – 08/09**: Cadastro de clientes  
3. **09/09 – 15/09**: Criação de contas  
4. **16/09 – 22/09**: Transferências e extrato  
5. **23/09 – 29/09**: Atualizações e testes preliminares  
6. **30/09**: Entrega da fase 2  

**Tecnologias Utilizadas:**
- **Frontend:** Next.js  
- **Backend:** Node.js + Express  
- **Banco de Dados:** MySQL  
- **Autenticação:** JWT (JSON Web Token)  

---

### 🧪 3ª Entrega – Testes e Documentação *(até 27/10)*

**Testes:**
- **Unitários:** Jest  
- **API:** Postman  
- **Funcionais:** Selenium IDE  

**Documentação com Swagger** contendo endpoints como:
- `GET /accounts/:id`
- `POST /transfer`
- `PATCH /clients/:id`
- `DELETE /accounts/:id`

---

## 🔄 Métodos HTTP Utilizados

| Método  | Endpoint         | Ação                                  |
|---------|-----------------|---------------------------------------|
| **GET**    | `/accounts/:id` | Buscar dados da conta                 |
| **POST**   | `/accounts`     | Criar uma nova conta                  |
| **PUT**    | `/clients/:id`  | Atualização total do cliente          |
| **PATCH**  | `/clients/:id`  | Atualização parcial (ex.: e-mail)     |
| **DELETE** | `/accounts/:id` | Deletar conta bancária                |
| **GET**    | `/statement/:id`| acessar o extrato                     |
| **POST**   | `/deposit/:id`      | Depositar dinheiro                    |
| **POST     | `/withdraw/:id`     | Sacar dinheiro                        |
---

## 📂 Estrutura do Projeto
Projeto_Final_PW/
├── backend/ # Código do servidor (Node.js + Express)
├── frontend/ # Código do cliente (Next.js)
├── docs/ # Documentação e diagramas
├── tests/ # Testes automatizados
└── README.md # Documentação do projeto 
