const restful = require('node-restful');

const mongoose = restful.mongoose;

const consultaSchema = new mongoose.Schema({
    clienteId :  mongoose.Schema.Types.ObjectId,
    medicoId : mongoose.Schema.Types.ObjectId,
    datahora : { type: Date, default: Date.now, require : true },
    datacriacao: { type: Date, default: Date.now },
    dataatualizacao: { type: Date, default: Date.now },
    observacao : {type : String }
});

module.exports = restful.model('consulta', consultaSchema);