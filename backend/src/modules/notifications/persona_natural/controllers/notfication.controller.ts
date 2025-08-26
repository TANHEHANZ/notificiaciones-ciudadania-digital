import { Request, Response } from "express";
import { enviarNotificacion } from "../services/notificar.autoridad";
import { API } from "@/infraestructure/config/response";
import { catchAsync } from "@/infraestructure/middleware/catchAsync";

export const enviarNotificacionController = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await enviarNotificacion(data);
    API.success(res, "Notificación enviada correctamente", result);
  }
);
