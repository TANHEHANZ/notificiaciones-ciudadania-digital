import { Router } from "express";
import { enviarNotificacionController } from "./persona_natural/controllers/notfication.controller";
import { validate } from "@/infraestructure/utils/helpers/validate";
import { notificacionSchema } from "./persona_natural/validators/v_notification";

const n_router = Router();

n_router.post(
  "/natural",
  validate(notificacionSchema),
  enviarNotificacionController
);

export default n_router;
