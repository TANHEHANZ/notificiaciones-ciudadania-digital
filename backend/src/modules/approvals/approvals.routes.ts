import { Router } from "express";

import IndividualRouter from "./individual/individual.routes";
import VerificacionRouter from "./verification/verificacion.routes";
const approvals_router = Router();

approvals_router.use("/individual", IndividualRouter);
approvals_router.use("/verificar", VerificacionRouter);

export default approvals_router;
