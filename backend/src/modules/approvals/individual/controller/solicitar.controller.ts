import { Request, Response } from "express";
import { API } from "@/infraestructure/config/response";
import { sendApprovels } from "../service/send.service";
import { catchAsync } from "@/infraestructure/middleware/catchAsync";
import { NotFoundError } from "@/infraestructure/utils/helpers/errors";

export const solicitarController = {
  solicitud: catchAsync(async (req: Request, res: Response) => {
    if (!req.file) {
      throw new NotFoundError("Debes de proporcionar el documento");
    }
    const result = await sendApprovels({
      documento: req.file,
      ...req.body,
    });
    API.success(res, "Solicitud enviada correctamente", result);
  }),
};
