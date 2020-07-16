const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController')


const products_url = '/products'
const products_url_id = products_url + '/:id'

routes.get(products_url, ProductController.index);
routes.post(products_url, ProductController.store);
routes.put(products_url_id, ProductController.update);
routes.get(products_url_id, ProductController.show);
routes.delete(products_url_id, ProductController.destroy);



module.exports = routes;