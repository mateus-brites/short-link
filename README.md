# Encurtador de URL

Esta aplicação foi criada para resolver o desafio de backend de encurtamento de URLs.

## Sobre o Sistema

O intuito é construir um sistema que encurte as URLs.

## Requisitos

- **Desenvolvimento**: Implementado com NodeJS na última versão estável, construído como API REST.
- **Escalabilidade**: O sistema será implementado em uma infraestrutura que escala verticalmente.
- **Cadastro e Autenticação de Usuários**: O sistema deve possibilitar o cadastro de usuários e a autenticação dos mesmos.
- **Encurtamento de URLs**: A partir de uma URL enviada, ela deve ser encurtada para no máximo 6 caracteres.  
  **Exemplo**:  
  Entrada: `https://teddy360.com.br/material/marco-legal-das-garantias-sancionado-entenda-o-que-muda/`  
  Saída: `http://localhost/aZbKq7`
- **Requisitos de Acesso**:
  - Qualquer um pode solicitar que a URL seja encurtada.
  - Deve haver apenas um endpoint para encurtar.
  - Usuários autenticados devem ter seus URLs registrados como pertencentes a eles.
  - Um usuário autenticado pode listar, editar o endereço de destino e excluir URLs encurtadas por ele.
- **Contabilização de Acessos**: Todo acesso a qualquer URL encurtada deve ser contabilizado no sistema.
- **Listagem de URLs**: Ao listar os URLs, deve aparecer a quantidade de cliques.
- **Registros Atualizados**: Todos os registros devem ter uma forma de saber quando foram atualizados.
- **Deleção Lógica**: Os registros só poderão ser deletados logicamente do banco, com um campo que guarda a data de exclusão. Se a data estiver nula, o registro é válido; se preenchida, foi excluído e não pode ser lido ou escrito.

## Instruções para Execução

Para rodar a aplicação, execute o comando:

```bash
docker compose up
```

Para iniciar o servidor, é necessário ter um arquivo .env com as seguintes credenciais:

```bash
DATABASE_URL="postgresql://admin:admin@localhost:5432/api?schema=public"
JWT_SECRET=cfd61b8a7397fa7c10b2ae548f5bfaef
BASE_URL="http://localhost:3000"
```

O comando para iniciar o servidor é:

```bash
npm run start:dev
```
