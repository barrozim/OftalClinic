const express = require('express');

module.exports = function (server) {
    // API Routes
    const router = express.Router();
    server.use('/api', router);
    // OftalClinic Routes
    const oftalclinicServiceCliente = require('../api/oftalclinic/cliente/clienteService');
    oftalclinicServiceCliente.register(router, '/oftalclinic/cliente');

    const oftalclinicServiceConsulta = require('../api/oftalclinic/consulta/consultaService');
    oftalclinicServiceConsulta.register(router, '/oftalclinic/consulta');

    const oftalclinicServiceUsuario = require('../api/oftalclinic/usuario/usuarioService');
    oftalclinicServiceUsuario.register(router, '/oftalclinic/usuario');

    const oftalclinicServiceMedico = require('../api/oftalclinic/medico/medicoService');
    oftalclinicServiceMedico.register(router, '/oftalclinic/medico');
}
