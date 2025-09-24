import { Router } from "express";
import approvals_router from "./approvals/approvals.routes";
import AutenticactionRoutes from "./autentication/autentication.routes";
import auth_router from "./autorization/autorization.routes";
import n_router from "./notifications/notifications.routes";
const router = Router();
router.use("/approvals", approvals_router);
router.use("/notification", n_router);
router.use("/autotization", auth_router);
router.use("/autenticacion", AutenticactionRoutes);

export default router;
