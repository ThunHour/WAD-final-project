import { Router } from "express";
import ramController from "./ram.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post("/create", authorizeUser("ADMIN"), uploadFile.array("file"), ramController.createRam);
  router.get("/getAllRam", ramController.getAllRam);
  router.get("/getRamById/:id", ramController.getRamById);
  router.delete("/delete/:id/:itemId", authorizeUser("ADMIN"), ramController.deleteRam);
  router.put("/update/:id", authorizeUser("ADMIN"), uploadFile.array("file"), ramController.updateRam);
  router.post(
    "/createWithExistPanel/:id", authorizeUser("ADMIN"),
    uploadFile.array("file"),
    ramController.createRamWithExistPanel
  );
  router.delete("/deletePanel/:id", authorizeUser("ADMIN"), ramController.deletePanelRam);
  return router;
};
