import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { totalUSD } = req.body;

    if (!totalUSD) {
      return res.status(400).json({ error: "Missing totalUSD" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Fox & Fern Custom Skin Order",
            },
            unit_amount: Math.round(totalUSD * 100), // convert dollars to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://fox-and-fern-l3hp6gdby-marissa-swings-projects.vercel.app/success",
      cancel_url: "https://fox-and-fern-l3hp6gdby-marissa-swings-projects.vercel.app/cart",
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(4242, () => console.log("Server running on port 4242"));