const restful = require('node-restful');

const mongoose = restful.mongoose;

const usuarioSchema = new mongoose.Schema({
    nome : { type: String, required: true },
    email : { type: String, required: true },
    senha : { type: String, required: true },
    datacriacao : { type: Date, default: Date.now },
    dataatualizacao: { type: Date, default: Date.now },
    tipo : { type: String, required: false }
});

module.exports = restful.model('usuario', usuarioSchema);