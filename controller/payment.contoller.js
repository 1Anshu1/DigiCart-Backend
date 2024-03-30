import Stripe from "stripe";
const stripe = new Stripe(process.env.APP_STRIPE_SECRET_KEY);


const createPayment = async (req, res) => {
    const { products } = req.body;

    const lineItems = products.map((item) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: item.product.name,
            },
            unit_amount: item.totalPrice * 100,
        },
        quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/failed",
    });

    res.json({ id: session.id });
};

export { createPayment };
