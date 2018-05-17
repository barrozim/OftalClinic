const express = require('express');
const auth = require('./auth')

module.exports = function (server) {


    //API Protegida
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

     // API Aberta
     const router = express.Router();
     server.use('/oapi', router);


    // OftalClinic Routes
    const oftalclinicServiceCliente = require('../api/oftalclinic/cliente/clienteService');
    oftalclinicServiceCliente.register(router, '/oftalclinic/cliente');


    const oftalclinicServiceUsuario = require('../api/oftalclinic/usuario/usuarioService');
    oftalclinicServiceUsuario.Usuario.register(router, '/oftalclinic/usuario');

    const oftalclinicServiceMedico = require('../api/oftalclinic/medico/medicoService');
    oftalclinicServiceMedico.register(router, '/oftalclinic/medico');


    const oftalclinicServiceConsulta = require('../api/oftalclinic/consulta/consultaService');
    oftalclinicServiceConsulta.register(router, '/oftalclinic/consulta');

   
    
    router.post('/login', oftalclinicServiceUsuario.login)
    router.post('/signup', oftalclinicServiceUsuario.signup)
    router.post('/validateToken', oftalclinicServiceUsuario.validateToken)
}
