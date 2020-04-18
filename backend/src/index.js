const express = require('express');
const cors = require('cors'); //importando modulo de segurança cors
const routes = require('./routes'); /*./ indica que ta importando arquivo*/

const app = express();

app.use(cors()); //em desenvolvimento só isso basta e o front se comunica com o back
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso ('/')
 */

/**
 * Métodos HTTP:
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação no bakend
 */

 /**
  * Tipos de parâmetros:
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para indentificar recursos
  * Request Body: Corpo da requisição utlizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */