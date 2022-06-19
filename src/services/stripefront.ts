import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJS() {
  const apiKey = process.env.NEXT_PUBLIC_STRIPE_API_PUBLIC_KEY;
  const stripejs = await loadStripe(apiKey);

  return stripejs;
}
