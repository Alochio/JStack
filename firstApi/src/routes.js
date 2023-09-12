const userController = require('./controllers/userController');

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        hendler: userController.listUsers,

    },
];