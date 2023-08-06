import { Router } from "express";
import cpuController from "./cpu.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post("/create", uploadFile.array("file"), authorizeUser("ADMIN"), cpuController.createCpu);
  router.get("/getAllCpu", cpuController.getAllCpu);
  router.get("/getCpuById/:id", cpuController.getCpuById);
  router.delete("/delete/:id/:itemId", authorizeUser("ADMIN"), cpuController.deleteCpu);
  router.put("/update/:id", uploadFile.array("file"), authorizeUser("ADMIN"), cpuController.updateCpu);
  router.post(
    "/createWithExistPanel/:id",
    uploadFile.array("file"), authorizeUser("ADMIN"),
    cpuController.createCpuWithExistPanel
  );
  router.delete("/deletePanel/:id",  authorizeUser("ADMIN"),cpuController.deletePanelCpu);
  return router;
};
