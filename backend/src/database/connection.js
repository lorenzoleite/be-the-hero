const knex = require('knex');
const configuration = require('../../knexfile');/*volta duas pastas pra chegar no src e kenxfile*/

const connection = knex(configuration.development);/*dentro de knexfile tem a parte de development*/

module.exports = connection;/*exportando a conexão com o banco de dados*/