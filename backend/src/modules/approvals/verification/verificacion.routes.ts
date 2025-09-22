import { Router } from "express";
import { VerificacionController } from "./controller";
import { upload } from "@/infraestructure/lib/multer/multer.config";

const VerificacionRouter = Router();
VerificacionRouter.post(
  "/individual",
  upload.single("documento"),
  VerificacionController.individual
);
export default VerificacionRouter;
