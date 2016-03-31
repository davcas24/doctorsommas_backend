
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1')}}},
	{method: 'GET', path: '/v1/usuarios', config: usersController.getUsers},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'GET', path: '/v1/usuario/{correo}', config: usersController.getUser},
	{method: 'GET', path: '/v1/pendientes', config: usersController.getPendientes},
	{method: 'GET', path: '/v1/doctors', config: usersController.getDoctors},
	{method: 'PUT', path: '/v1/authorize', config: usersController.updatedocadmin},
	{method: 'PUT', path: '/v1/editDoctor', config: usersController.updateDoctor},
	{method: 'PUT', path: '/v1/editPaciente', config: usersController.updatePaciente},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'PUT', path: '/v1/recibirmensaje', config: usersController.updatemensajes},
	{method: 'PUT', path: '/v1/updateExp', config: usersController.updateexpediente},
	{method: 'POST', path: '/v1/login', config: authController.login}];
