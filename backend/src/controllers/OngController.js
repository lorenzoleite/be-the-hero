const crypto = require('crypto');/*importando so para ter a função de randomBytes*/
const connection = require('../database/connection');/*importando conexão com BD*/

module.exports = {

    async index(request, response) { /*Listagem de tudo que tem no BD*/
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request,response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');/*estrategia em que id recebe a função random*/
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return response.json({ id });
    }
};