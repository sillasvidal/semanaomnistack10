const { Router } = require('express');
const DevController = require('./controllers/DevController');
const DevSearch = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', DevSearch.index);

module.exports = routes;