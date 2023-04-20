import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';
import * as userService from '../services/user-service.js';
import * as userSubscriptionService from '../services/userSubscription-service.js';
import * as subscriptionsService from '../services/subscriptions-service.js';
import stripe from 'stripe';
// import { subscribe } from 'diagnostics_channel';

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

// Asynchronous function which receives a request and response as parameters,
//  creates a Stripe checkout session with the provided product data, and sends a response with the session ID.

export const post = async (req, res) => {
    const { product } = req.body;
    console.log('-------', product)
    const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ["card"],
        client_reference_id: product.user._id,
        metadata: {
            product_id: product.productId,
            product_tenureDays: product.tenureDays
        },
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        metadata: {
                            product_id: product.productId,
                            product_tenureDays: product.tenureDays
                        },
                        name: product.name,
                    },
                    unit_amount: product.price * 100,
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "/user/success",
        cancel_url: process.env.CLIENT_URL + "/user/cancel",
    })
    console.log("--------before send", session)
    res.json({ id: session.id });
}

// asynchronous function that retrieves data on a user's payment status using Stripe's API,
//  saves the user's subscription details to a database if the payment has been made,
//   and returns the payment status as a JSON object.

export const checkstatus = async (req, res) => {
    console.log('-------check req', req.body)
    // save the data in userSubscription
    const { id } = req.body;
    const session = await stripeInstance.checkout.sessions.retrieve(id);
    console.log('-------check session', session)

    if (session.payment_status === 'paid') {

        const user = await userService.getById(session.client_reference_id);
        const product = await subscriptionsService.getById(session.metadata.product_id);
        console.log('-------check user', user)
        if (user) {
            const userSubscription = {
                userId: user.id,
                subId: session.metadata.product_id,
                price: session.amount_total / 100,
                createdAt: new Date(),
                validTill: new Date().setDate(new Date().getDate() + product.tenureDays),
            }

            console.log('-------userSubscription', userSubscription)
            await userSubscriptionService.save(userSubscription);
        }
    }
    res.json({ status: session.payment_status });
}