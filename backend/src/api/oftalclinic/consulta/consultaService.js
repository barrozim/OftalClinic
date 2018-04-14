const Consulta = require('./consulta');

Consulta.methods(['get', 'post', 'put', 'delete']);
Consulta.updateOptions({ new: true, runValidators: true });

module.exports = Consulta;