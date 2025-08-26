import { z } from "zod";
import { notificadorSchema } from "./natural/notificador";
import { AutoridadSchema } from "./natural/autoridad";
import { NotificadoSchema } from "./natural/notificados";
import { EnlaceSchema } from "./natural/enlaces";
import { FormularioSchema } from "./natural/formulario";

export const notificacionSchema = z.object({
  titulo: z.string().max(255),
  descripcion: z.string().max(600),
  notificador: notificadorSchema,
  autoridad: AutoridadSchema,
  notificados: z.array(NotificadoSchema),
  enlaces: z.array(EnlaceSchema),
  formulario: FormularioSchema,
  entidadNotificadora: z.string().optional(),
});

export type DTO_NotificationNatural = z.infer<typeof notificacionSchema>;
