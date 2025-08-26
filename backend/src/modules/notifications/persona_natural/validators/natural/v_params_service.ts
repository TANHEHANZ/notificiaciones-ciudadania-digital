import { z } from "zod";
import { EnlaceSchema } from "./enlaces";
import { FormularioSchema } from "./formulario";

export const NotificacionParamsAPI = z.object({
  titulo: z.string().max(255),
  descripcion: z.string().max(600),
  notificador: z.string(),
  autoridad: z.string(),
  notificados: z.array(z.string()),
  enlaces: z.array(EnlaceSchema),
  formularioNotificacion: FormularioSchema,
  entidadNotificadora: z.string().optional(),
});

const MainNotification = z.object({
  notificacion: NotificacionParamsAPI,
  seguridad: z.object({
    iv: z.string(),
    llaveSimetrica: z.string(),
  }),
  sha256: z.string(),
});
export type DTONotificacionParamsAPI = z.infer<typeof NotificacionParamsAPI>;
export type DTO_MainNotification = z.infer<typeof MainNotification>;
