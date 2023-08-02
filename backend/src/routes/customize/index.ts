import { Router } from "express";
import customizeService from "./customize.controller";
export default () => {
  const router = Router();
  router.post("/create", customizeService.createCustomize);
  router.post("/share", customizeService.shareCustomize);
  router.post("/copyCustomize", customizeService.copyCustomize);
  router.get("/getAllCustomize", customizeService.getAllCustomize);
  router.get(
    "/getAllCustomizeByUserId",
    customizeService.getAllCustomizeByUserId
  );
  router.get("/getAllAdminCustomize", customizeService.getAllAdminCustomize);
  router.get("/getCustomizeById/:id", customizeService.getCustomizeById);
  router.delete("/delete/:id", customizeService.deleteCustomize);
  router.put("/update/:id", customizeService.updateCustomize);
  router.get("/random/:id?:type", customizeService.getRandom);
  router.get("/community", customizeService.getCustomizeComunity);
  return router;
};
