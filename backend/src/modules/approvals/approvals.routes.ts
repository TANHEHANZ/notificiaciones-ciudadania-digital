import { upload } from "@/infraestructure/lib/multer/multer.config";
import { Router } from "express";
import { solicitarController } from "./individual/controller/solicitar.controller";
import { validate } from "@/infraestructure/utils/helpers/validate";
import { SchemaSolicitudParams } from "./individual/validators/params/v_solicitud";
const approvals_router = Router();
approvals_router.post(
  "/solicitar/upload",
  upload.single("documento"),
  validate(SchemaSolicitudParams, "body"),
  solicitarController.solicitud
);
export default approvals_router;
