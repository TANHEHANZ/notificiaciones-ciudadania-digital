import { Request, Response } from "express";
import { API } from "@/infraestructure/config/response";
import { enviarAuthorization } from "../service/autorizar";
import { catchAsync } from "@/infraestructure/middleware/catchAsync";

export const enviarNotificacionController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await enviarAuthorization();
    API.success(res, "Auth enviada correctamente", result);
  }
);
