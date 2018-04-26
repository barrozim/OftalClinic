const Medico = require('./medico');

Medico.methods(['get', 'post', 'put', 'delete']);
Medico.updateOptions({ new: true, runValidators: true });

module.exports = Medico;