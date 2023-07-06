const express = require('express');
const usercontroller = require('./controllers/usercontroller');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World' })
});
routes.get('/users', usercontroller.index);
routes.post('/create', usercontroller.store)

module.exports = routes;