const User = require('../models/User');

// index (retorna uma listagem de sessoes), 
// show (lista uma unica sessao), 
//store (quando queremos criar uma sessao), 
// update (atualizar uma sessao), 
// destroy (deletar uma sessao)

module.exports = {
   async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};