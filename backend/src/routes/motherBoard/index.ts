import { Router } from "express";
import motherBoardController from "./motherBoard.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post(
    "/create",
    uploadFile.array("file"), authorizeUser("ADMIN"),
    motherBoardController.createMotherBoard
  );
  router.get("/getAllMotherBoard", motherBoardController.getAllMotherBoard);
  router.get(
    "/getMotherBoardById/:id",
    motherBoardController.getMotherBoardById
  );
  router.delete("/delete/:id/:itemId", authorizeUser("ADMIN"), motherBoardController.deleteMotherBoard);
  router.put(
    "/update/:id",
    uploadFile.array("file"), authorizeUser("ADMIN"),
    motherBoardController.updateMotherBoard
  );
  router.post(
    "/createWithExistPanel/:id",
    uploadFile.array("file"), authorizeUser("ADMIN"),
    motherBoardController.createMotherBoardWithExistPanel
  );
  router.delete(
    "/deletePanel/:id", authorizeUser("ADMIN"),
    motherBoardController.deletePanelMotherBoard
  );
  return router;
};
