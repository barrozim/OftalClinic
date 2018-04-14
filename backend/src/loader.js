//Configurando o servidor
const server = require('./config/server');
//Conectando com o banco de dados mongodb utilizando o serviço de cloud
require('./config/database');
//Configurando as rotas de acesso a API Rest
require('./config/route')(server);
