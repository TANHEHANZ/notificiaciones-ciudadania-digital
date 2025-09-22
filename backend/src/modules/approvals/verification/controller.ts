import { NotFoundError } from "@/infraestructure/helpers/errors";
import { catchAsync } from "@/infraestructure/middleware/catchAsync";

import { Request, Response } from "express";
import { API } from "@/infraestructure/config/response";
import { ValidateService } from "./service";

export const VerificacionController = {
  individual: catchAsync(async (req: Request, res: Response) => {
    if (!req.file) {
      throw new NotFoundError("Debes proporcionar el documento");
    }
    const result = await ValidateService(req.file);
    const mensaje =
      result.verificacionExitosa === false
        ? "No se tienen registros de aprobación"
        : "Información del documento traída exitosamente";

    API.success(res, mensaje, result);
  }),
};
