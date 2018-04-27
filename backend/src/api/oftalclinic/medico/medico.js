const restful = require('node-restful');


const mongoose = restful.mongoose;

const medicoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    rg: { type: String, required: false },
    cpf: { type: String, required: false },
    logradouro: { type: String, required: false },
    numerologradouro: { type: String, required: false },
    bairro: { type: String, required: false },
    cidade: { type: String, required: false },
    estado: { type: String, required: false },
    telefoneresidencial: { type: String, required: false },
    telefonecelular: { type: String, required: true },
    telefoneOpcional1: { type: String, required: false },
    telefoneOpcional2: { type: String, required: false },
    especialidade: { type: String, required: false },
    email: { type: String, required: true },
    crm: { type: String, required: true },
    datanascimento: { type: Date, required: false },
    datacriacao: { type: Date, default: Date.now },
    dataatualizacao: { type: Date, default: Date.now }
});


module.exports = restful.model('Medico', medicoSchema);