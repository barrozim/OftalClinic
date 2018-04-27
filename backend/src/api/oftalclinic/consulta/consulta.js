const restful = require('node-restful');


const mongoose = restful.mongoose;

const consultaSchema = new mongoose.Schema({
    clienteId :  { type : mongoose.Schema.Types.ObjectId, ref : 'Cliente'} ,
    medicoId : { type : mongoose.Schema.Types.ObjectId, ref : 'Medico'},
    datahora : { type: Date, default: Date.now, require : true },
    datacriacao: { type: Date, default: Date.now },
    dataatualizacao: { type: Date, default: Date.now },
    observacao : {type : String }
});



module.exports = restful.model('consulta', consultaSchema);