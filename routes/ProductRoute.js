import { Router } from 'express';
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from '../controllers/ProductController.js';

const productRoute = Router();

productRoute.get('/product', getAllProduct);
productRoute.post('/product', createProduct);
productRoute.get('/product/:id', getProductById);
productRoute.put('/product/:id', updateProduct);
productRoute.delete('/product/:id', deleteProduct);

export default productRoute;
