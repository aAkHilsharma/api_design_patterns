import { Router } from "express";
import { body } from "express-validator";
import { validateRequest } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/products";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdate,
  updateUpdate,
} from "./handlers/update";

const router = Router();
/**
 * Product
 */
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.post(
  "/product",
  body("name").isString(),
  validateRequest,
  createProduct
);
router.put(
  "/product/:id",
  body("name").isString(),
  validateRequest,
  updateProduct
);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

router.get("/update", getUpdate);
router.get("/update/:id", getOneUpdate);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  validateRequest,
  createUpdate
);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("version").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  validateRequest,
  updateUpdate
);
router.delete("/update/:id", deleteUpdate);

export default router;
