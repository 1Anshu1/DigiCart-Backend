import express from 'express'
import { getAllReview, getReview, createReview, updateReview, deleteReview } from '../controller/review.controller.js'
import { authentication } from '../middleware/authentication.middleware.js'
const router = express.Router()

router.route('/')
    .get(getAllReview)
    .post(authentication, createReview)

router.route('/:id')
    .get(getReview)
    .patch(authentication, updateReview)
    .delete(authentication, deleteReview)

export default router