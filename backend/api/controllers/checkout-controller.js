import {
    setSuccessfulResponse,
    setErrorResponse,
    setPostSuccessfulResponse,
    setbodyMissingError,
    setnotFound
} from '../util/statusCodes.js';
import * as userService from '../services/user-service.js';
import * as userSubscriptionService from '../services/userSubscription-service.js';
import stripe from 'stripe';

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

export const post = async (req, res) => {
    const { product } = req.body;
    console.log('-------', product)
    const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ["card"],
        client_reference_id: product.user._id,
        metadata: {
            product_id: product.productId,
        },
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                        metadata: {
                            product_id: product.productId,
                        },
                    },
                    unit_amount: product.price * 100,
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "/success",
        cancel_url: process.env.CLIENT_URL + "/cancel",
    })
    console.log("--------before send", session)
    res.json({ id: session.id });
}

export const checkstatus = async (req, res) => {
    console.log('-------check req', req.body)
    // save the data in userSubscription
    const { id } = req.body;
    const session = await stripeInstance.checkout.sessions.retrieve(id);
    console.log('-------check session', session)

    if (session.payment_status === 'paid') {

        const user = await userService.getById(session.client_reference_id);
        console.log('-------check user', user)
        if (user) {
            const userSubscription = {
                userId: user.id,
                subId: session.metadata.product_id,
                price: session.amount_total / 100,
                createdAt: new Date(session.created),
                // subscriptionEndDate: session.cancel_at_period_end
            }

            console.log('-------userSubscription', userSubscription)
            await userSubscriptionService.save(userSubscription);
        }
    }
    res.json({ status: session.payment_status });
}