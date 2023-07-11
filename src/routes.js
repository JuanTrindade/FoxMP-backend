const express = require('express');
const usercontroller = require('./controllers/usercontroller');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World' })
});
routes.get('/users', usercontroller.index);
routes.get('/users/:id', usercontroller.show);
routes.post('/sessions', usercontroller.sessions);
routes.post('/create', usercontroller.store);
routes.delete('/users/:id', usercontroller.delete);

module.exports = routes;