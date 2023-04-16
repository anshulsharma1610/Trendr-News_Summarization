import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';
import * as userService from '../services/user-service.js';
import stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

export const post = async (req, res) => {
    const { product } = req.body;
    const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price * 100,
                },
                quantity: product.quantity,
            },
        ],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "/success",
        cancel_url: process.env.CLIENT_URL + "/cancel",
    });
    res.json({ id: session.id });
}
