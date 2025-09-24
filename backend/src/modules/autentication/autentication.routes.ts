import { Router } from "express";
import { AutenticacionController } from "./controller";

const AutenticactionRoutes = Router();
AutenticactionRoutes.get("/auth", AutenticacionController.url);
AutenticactionRoutes.get("/auth/callback", AutenticacionController.callback);

export default AutenticactionRoutes;
