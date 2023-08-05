import { Router } from "express";
import gpuController from "./gpu.controller";
import { authorizeUser } from '../../middleware/authorize';
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post("/create", uploadFile.array("file"), authorizeUser("ADMIN"), gpuController.createGpu);
  router.get("/getAllGpu", gpuController.getAllGpu);
  router.get("/getGpuById/:id", gpuController.getGpuById);
  router.delete("/delete/:id/:itemId", authorizeUser("ADMIN"), gpuController.deleteGpu);
  router.put("/update/:id", authorizeUser("ADMIN"), uploadFile.array("file"), gpuController.updateGpu);
  router.post(
    "/createWithExistPanel/:id",
    uploadFile.array("file"), authorizeUser("ADMIN"),
    gpuController.createGpuWithExistPanel
  );
  router.delete("/deletePanel/:id", authorizeUser("ADMIN"), gpuController.deletePanelGpu);
  return router;
};
