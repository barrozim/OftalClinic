const restful = require('node-restful');

const mongoose = restful.mongoose;

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    rg: { type: String, required: false },
    cpf: { type: String, required: false },
    logradouro: { type: String, required: false },
    numerologradouro: { type: String, required: false },
    bairro: { type: String, required: false },
    cidade: { type: String, required: false },
    estado: { type: String, required: false },
    telefone1: { type: String, required: true },
    telefone2: { type: String, required: false },
    telefone3: { type: String, required: false },
    telefone4: { type: String, required: false },
    ocupacao: { type: String, required: false },
    email: { type: String, required: true },
    datanascimento: { type: Date, required: false },
    datacriacao: { type: Date, default: Date.now },
    dataatualizacao: { type: Date, default: Date.now }
});

module.exports = restful.model('Cliente', clienteSchema);