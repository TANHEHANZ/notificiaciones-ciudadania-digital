import { upload } from "@/infraestructure/lib/multer/multer.config";
import { Router } from "express";
import { validate } from "@/infraestructure/middleware/validate";
import { SchemaSolicitudParams } from "./validators/params/v_solicitud";
import { solicitarController } from "./controller/solicitar.controller";
const IndividualRouter = Router();
IndividualRouter.post(
  "/solicitud",
  upload.single("documento"),
  validate(SchemaSolicitudParams, "body"),
  solicitarController.solicitud
);

export default IndividualRouter;
