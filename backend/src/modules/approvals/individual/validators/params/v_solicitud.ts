import { z } from "zod";

export const SchemaSolicitudParams = z.object({
  tipoDocumento: z.enum(["PDF"]),
  descripcion: z.string(),
  documento: z.any().optional(),
  tokenUserSeccion: z.string().optional(),
});
export type DTO_ParamsSolicitud = z.infer<typeof SchemaSolicitudParams>;
