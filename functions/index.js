const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPzZBAZNVvSD9546DePHiKbLOzIgznptIHXRf0NCkkQytNb9CUIP4qMicNu2Im47JowTMb48KaMlbBZLRPkSiOI00xz7iV6vQ"
);

// API

// App config
const app = express();

// Middlewares
app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

// API routes
app.get("/", (req, res) => {
  return res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(`Payment request Received for $${total / 100}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // 201 means OK - Created
  return res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen
exports.api = functions.https.onRequest(app);
