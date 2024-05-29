# Sistema de Gerenciamento de Usuários

Este repositório tem como objetivo fornecer uma aplicação web robusta e eficaz de gerenciamento de usuários, que pode ser reutilizada para a construção de sistemas maiores.

A aplicação possui funcionalidades de criação, edição, remoção, autenticação, redefinição de senha e recuperação de senha de usuários.

### A aplicação é composta por:

- **Back-end**: O back-end foi construído com o framework Express.js, implementando uma API REST para fornecer as funcionalidades de gerenciamento de usuários. A API pode ser facilmente integrada a outros projetos que necessitem de um sistema de gerenciamento de usuários.

- **Front-end**: O front-end da aplicação foi construído com o framework Vue.js, fornecendo uma interface simples e amigável para acessar as funcionalidades de gerenciamento de usuários fornecidas pela API do projeto.

- **Banco de Dados**: Para a persistência dos dados da aplicação, foi utilizado o banco de dados PostgreSQL, que nos oferece um sistema de banco de dados robusto e eficiente.

- **Arquitetura**: Para a criação e execução da aplicação, utilizamos Docker Compose, facilitando a execução da aplicação.

### Dependências

- Docker
- Docker Compose

### Executando a aplicação

Na pasta do projeto, execute os comandos:

```sh
docker-compose up --build
