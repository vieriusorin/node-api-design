import { getProducts, createProduct, updateProduct, deleteProduct, getOneProduct } from './handlers/product';
import { Router } from "express";
import { body } from "express-validator";
import { handleInputError } from "./modules/middleware";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';

const router = Router();

/**
 * Product
 */
router.get("/product", getProducts);

router.get("/product/:id", getOneProduct);

router.post(
	'/product',
	body('name').isString(),
	handleInputError,
	createProduct
)

router.put(
	"/product/:id",
	body('name').isString(),
	handleInputError,
	updateProduct
);

router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id',
	body('title').optional(),
	body('body').optional(),
	body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
	body('version').optional(),
	updateUpdate
)
router.post('/update',
	body('title').exists().isString(),
	body('body').exists().isString(),
	body('productId').exists().isString(),
	createUpdate
)
router.delete('/update/:id', deleteUpdate)


/**
 * Update Point
 */

router.get("/updatePoint", (req, res) => { });

router.get("/updatePoint/:id", (req, res) => { });

router.post("/updatePoint",
	body('name').optional().isString(),
	body('description').optional().isString(),
	body('updateId').exists().isString(),
	(req, res) => { });

router.put("/updatePoint/:id",
	body('name').optional().isString(),
	body('description').optional().isString(),
	(req, res) => { });

router.delete("/updatePoint/:id", (req, res) => { });

export default router;
