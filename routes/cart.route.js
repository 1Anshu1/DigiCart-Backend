import express from "express";
import {
    getCart,
    modifyCart,
    removeFromCart,
    addToCart,
} from "../controller/cart.controller.js";
import { authentication } from "../middleware/authentication.middleware.js";
const router = express.Router();

// router
//     .route("/")
//     .get(getCart)
//     .post(addToCart)
//     .patch(modifyCart)
//     .delete(removeFromCart);
router
    .route("/")
    .get(authentication, getCart)
    .post(authentication, addToCart)
    .patch(authentication, modifyCart)
    
router.route('/:product_id').delete(authentication, removeFromCart);

export default router;
