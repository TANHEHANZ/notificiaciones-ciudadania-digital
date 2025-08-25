import { z } from "zod";

export const SchemaSolicitudParams = z.object({
  tipoDocumento: z.enum(["PDF"]),
  descripcion: z.string(),
  documento: z.any(),
  tokenUserSeccion: z.string(),
});
export type DTO_ParamsSolicitud = z.infer<typeof SchemaSolicitudParams>;
