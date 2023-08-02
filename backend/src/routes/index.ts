import { Application, Router } from "express";
import auth from "./auth";
import brand from "./brand/index";
import category from "./category/index";
import cases from "./case/index";
import ram from "./ram/index";
import motherBoard from "./motherBoard/index";
import cpu from "./cpu/index";
import storage from "./storage/index";
import gpu from "./gpu/index";
import powerSupply from "./powerSupply/index";
import customize from "./customize/index";
import passport from "passport";
import "../config/google/google.config";
import "../config/facebook/facebook.config";
import Session from "express-session";
import { authMiddleware } from "../middleware/auth";
import jwt from "../util/jwt-generate";

export default (app: Application) => {
  const route = Router();

  route.use(
    Session({
      secret: "somethingsecretgoeshere",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    })
  );

  route.use(passport.initialize());
  route.use(passport.session());

  route.use("/auth", auth());
  route.use("/brand", authMiddleware, brand());
  route.use("/category", authMiddleware, category());
  route.use("/case", authMiddleware, cases());
  route.use("/ram", authMiddleware, ram());
  route.use("/motherBoard", authMiddleware, motherBoard());
  route.use("/cpu", authMiddleware, cpu());
  // authorizeUser("ADMIN")
  route.use("/storage", authMiddleware, storage());
  route.use("/gpu", authMiddleware, gpu());
  route.use("/powerSupply", authMiddleware, powerSupply());
  route.use("/customize", authMiddleware, customize());

  route.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  route.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/failed" }),
    function (req:any, res: any) {
      res.redirect("http://localhost:4200" + '?token=' + req.user.accessToken+"&refreshToken="+req.user.refreshToken);
    }
  );

  route.get("/facebook", passport.authenticate("facebook"));

  route.get(
    "/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/failed" }),
    function (req, res) {
      // Replace with the actual token
      res.redirect("/success");
    }
  );

  route.get("/success", (req, res: any) => {
    res.redirect("http://localhost:4200");
  });
  route.get("/failed", (req, res) => {
    res.json("failed");
  });

  route.post("/token", async (req, res) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken)
        return res.sendStatus(401).json("token is not present");
      console.log(refreshToken);

      const user = await jwt.verifyRefreshToken(refreshToken);
      const token = await jwt.jwtGenerator(user);
      res.json({
        refreshToken: token.refreshToken,
        accessToken: token.accessToken,
      });
    } catch (error) {
      res.send(error);
    }
  });

  route.get("/logout", (req, res) => {
    req.session.destroy(function (err) {
      res.clearCookie("connect.sid");
      res.send("you logged out");
    });
  });

  app.use("/", route);
  return app;
};