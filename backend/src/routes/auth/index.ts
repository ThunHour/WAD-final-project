import { Router } from "express";
import authController from "./auth.controller";

export default () => {
  const router = Router();
  router.post("/login", authController.login);
  router.post("/signup", authController.signUp);
  router.post("/admin/login", authController.adminlogin);
  return router;
};
