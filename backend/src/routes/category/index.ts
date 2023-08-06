import { Router } from "express";
import categoryController from "./category.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post(
    "/create",
    uploadFile.single("file"), authorizeUser("ADMIN"),
    categoryController.createCategory
  );
  router.get("/getAllCategory", categoryController.getAllCategory);
  router.get("/getCategoryById/:id", categoryController.getCategoryById);
  router.delete("/delete/:id", authorizeUser("ADMIN"), categoryController.deleteCategory);
  router.put(
    "/update/:id",
    uploadFile.single("file"), authorizeUser("ADMIN"),
    categoryController.updateCategory
  );
  return router;
};
