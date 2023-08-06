import { Router } from "express";
import powerSupplyController from "./powerSupply.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post(
    "/create",
    uploadFile.array("file"),
    authorizeUser("ADMIN"),
    powerSupplyController.createPowerSupply
  );
  router.get("/getAllPowerSupply", powerSupplyController.getAllPowerSupply);
  router.get(
    "/getPowerSupplyById/:id",
    powerSupplyController.getPowerSupplyById
  );
  router.delete("/delete/:id/:itemId", authorizeUser("ADMIN"), powerSupplyController.deletePowerSupply);
  router.put(
    "/update/:id", authorizeUser("ADMIN"),
    uploadFile.array("file"),
    powerSupplyController.updatePowerSupply
  );
  router.post(
    "/createWithExistPanel/:id", authorizeUser("ADMIN"),
    uploadFile.array("file"),
    powerSupplyController.createPowerSupplyWithExistPanel
  );
  router.delete(
    "/deletePanel/:id", authorizeUser("ADMIN"),
    powerSupplyController.deletePanelPowerSupply
  );
  return router;
};
