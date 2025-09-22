import config from "@/infraestructure/config/config";
import { createApiInstance } from "@/infraestructure/lib/axios/config.axios";

export const ValidateService = async (documento: Express.Multer.File) => {
  const base64File = documento.buffer.toString("base64");
  const api = createApiInstance({
    baseURL: config.APPOVALS.url,
    authType: "Bearer",
    token: config.APPOVALS.token,
  });
  const responseValidate = await api.post("/api/documentos/verificar", {
    archivo: base64File,
  });
  return responseValidate.data?.datos || { registros: [] };
};
