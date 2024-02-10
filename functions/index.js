
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51OYszYE0o3He6Tzpoq6mvIjJyJQU8y7NoIdDkCk1IxEvw2dQxjp76QHzKY3ULX21ms6DGOi883Am8VIhGPEt74CY00NRyGFRCj')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true}));

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>> ', total)

    try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: total, 
          currency:"usd",
          });
          response.status(201).send({
            clientSecret: paymentIntent.client_secret,
          });
      } catch (error) {
          response.status(500).send({ error: error.message });
      }
    });

// - Listen command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://127.0.0.1:5001/e-kart-challange/us-central1/api