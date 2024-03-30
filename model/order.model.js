import {Schema, model, Types} from 'mongoose'

const singleCartItemSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, requried: true},
    quantity: {type: String, required: true},
    price: {type: Number, required: true},
    product: {
        type: Types.ObjectId,
        ref: 'Product',
        required: true
    }
})

const orderSchema = new Schema({
    shippingFee: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    cartItems: {
        type: [singleCartItemSchema],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled', 'return'],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'not paid', 'refund complete'],
        default: 'not paid'
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    clientSecret: {
        type: String,
        required: true
    }, 
    paymentIntentId: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Order = model('Order', orderSchema)
export default Order