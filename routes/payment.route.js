import express from "express";
import { authentication, authorizePermission } from "../middleware/authentication.middleware.js";
import { createPayment } from "../controller/payment.contoller.js";

const router = express.Router();

router.route("/create-checkout-session").post(createPayment);

export default router;
