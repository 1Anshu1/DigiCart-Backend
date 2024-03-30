import express from 'express'

import { authentication, authorizePermission } from "../middleware/authentication.middleware.js";
import { getAllOrder, getSingleOrder, getCurrentUserOrder, createOrder, updateOrder } from "../controller/order.controller.js";

const router = express.Router()

router.route('/')
    .get(authentication, authorizePermission('admin'), getAllOrder)
    .post(authentication, createOrder)

router.route('/showAllMyOrder/:id')
    .get(authentication, getCurrentUserOrder)

router.route('/:id')
    .get(authentication, getSingleOrder)
    .patch(authentication, authorizePermission, updateOrder)


export default router