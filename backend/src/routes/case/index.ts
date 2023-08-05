import { Router } from "express";
import caseController from "./case.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post("/create", uploadFile.array("file"), authorizeUser("ADMIN"), caseController.createCase);
  router.get("/getAllCase", caseController.getAllCase);
  router.get("/getCaseById/:id", caseController.getCaseById);
  router.delete("/delete/:id/:itemId", authorizeUser("ADMIN"), caseController.deleteCase);
  router.put(
    "/update/:id",
    uploadFile.array("file"), authorizeUser("ADMIN"),
    caseController.updateCase
  );
  router.post(
    "/createWithExistPanel/:id",
    uploadFile.array("file"), authorizeUser("ADMIN"),
    caseController.createCaseWithExistPanel
  );
  router.delete("/deletePanel/:id", authorizeUser("ADMIN"), caseController.deletePanelCase);
  return router;
};
