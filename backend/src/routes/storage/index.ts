import { Router } from "express";
import storageController from "./storage.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post(
    "/create",
    authorizeUser("ADMIN"),
    uploadFile.array("file"),
    storageController.createStorage
  );
  router.get("/getAllStorage", storageController.getAllStorage);
  router.get("/getStorageById/:id", storageController.getStorageById);
  router.delete("/delete/:id/:itemId",
    authorizeUser("ADMIN"),
    storageController.deleteStorage);
  router.put(
    "/update/:id",
    authorizeUser("ADMIN"),
    uploadFile.array("file"),
    storageController.updateStorage
  );
  router.post(
    "/createWithExistPanel/:id",
    uploadFile.array("file"),
    authorizeUser("ADMIN"),
    storageController.createStorageWithExistPanel
  );
  router.delete("/deletePanel/:id", authorizeUser("ADMIN"), storageController.deletePanelStorage);
  return router;
};
