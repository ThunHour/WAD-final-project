import rateLimit from "express-rate-limit";

export const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 10 * 1000,
  max: 100,
  message: "You have exceeded the 30 requests in 1 mn limit!",
  standardHeaders: true,
  legacyHeaders: false,
});
