const express = require('express');
const auth = require('./auth')

module.exports = function (server) {


    //API Protegida
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    // OftalClinic Routes
    const oftalclinicServiceCliente = require('../api/oftalclinic/cliente/clienteService');
    oftalclinicServiceCliente.register(protectedApi, '/oftalclinic/cliente');


    const oftalclinicServiceUsuario = require('../api/oftalclinic/usuario/usuarioService');
    oftalclinicServiceUsuario.Usuario.register(protectedApi, '/oftalclinic/usuario');

    const oftalclinicServiceMedico = require('../api/oftalclinic/medico/medicoService');
    oftalclinicServiceMedico.register(protectedApi, '/oftalclinic/medico');


    const oftalclinicServiceConsulta = require('../api/oftalclinic/consulta/consultaService');
    oftalclinicServiceConsulta.register(protectedApi, '/oftalclinic/consulta');

    // API Aberta
    const router = express.Router();
    server.use('/oapi', router);
    
    router.post('/login', oftalclinicServiceUsuario.login)
    router.post('/signup', oftalclinicServiceUsuario.signup)
    router.post('/validateToken', oftalclinicServiceUsuario.validateToken)
}
