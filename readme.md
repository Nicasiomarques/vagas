# SFC Brasil


> Breve descrição do projeto.

Projeto SFC Brasil é uma aplicação desenvolvida com Node.js e Express.js para SFC. A aplicação segue os princípios do clean code e utiliza uma arquitetura modular. Foi implementado o graceful shutdown para garantir um encerramento correto da aplicação. O projeto possui poucas dependências para manter um controle mais eficiente.

## Recursos Principais

- **Node.js**
- **Express.js**
- **Swagger**

## Instalação

1. Clone este repositório:

   ```shell
   git clone https://github.com/Nicasiomarques/vagas .
   ```

2. Instale as dependências:

   ```shell
   npm install
   ```

3. Crie um arquivo de ambiente:

   ```shell
   cp .env.example .env
   ```

4. Preencha as variáveis de ambiente no arquivo `.env` com as informações necessárias.

## Executando a Aplicação

### Modo de Desenvolvimento

Execute o seguinte comando para iniciar a aplicação no modo de desenvolvimento:

```shell
npm run dev
```

### Modo de Produção

Execute o seguinte comando para iniciar a aplicação no modo de produção:

```shell
npm start
```

## Documentação da API

A API do projeto está documentada utilizando o Swagger. Para acessar a documentação, acesse [Swagger documentação online](https://vagas-port.up.railway.app/api-docs/).

Exemplo de uso da API:

- **Base URL**: https://vagas-port.up.railway.app/

1. Endpoint de exemplo:
   - **GET** `/users`
   - Descrição: Retorna todos os usuários cadastrados.
   - Exemplo de uso: `GET https://vagas-port.up.railway.app/users`

2. Endpoint de exemplo:
   - **POST** `/api/users`
   - Descrição: Cria um novo usuário.
   - Corpo da requisição (JSON):
     ```json
     {
       "name": "Nicásio Silva",
       "job": "Developer",
     }
     ```
   - Exemplo de uso: `POST https://vagas-port.up.railway.app/users`

## Contato
- E-mail: nicasiomarques18@gmail.com
- LinkedIn: [Nicasio Silva](https://www.linkedin.com/in/nicasio-silva-70320a182/)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

*Observação: Devido à simplicidade do projeto, alguns recursos como arquiteturas, testes automatizados, replicação, cache, autenticação JWT, entre outros, não foram implementados para manter a objectividade do projecto.*
