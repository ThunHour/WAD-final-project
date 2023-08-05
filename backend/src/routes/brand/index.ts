import { Router } from "express";
import brandController from "./brand.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post(
    "/create",
    uploadFile.single("file"), authorizeUser("ADMIN"),
    brandController.createBrand
  );
  router.get("/getAllBrand", brandController.getAllBrand);
  router.get("/getBrandById/:id", brandController.getBrandById);
  router.delete("/delete/:id", authorizeUser("ADMIN"), brandController.deleteBrand);
  router.put(
    "/update/:id",
    uploadFile.single("file"), authorizeUser("ADMIN"),
    brandController.updateBrand
  );
  return router;
};
