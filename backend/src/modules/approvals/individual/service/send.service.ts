import crypto, { randomUUID } from "crypto";
import { DTO_ParamsSolicitud } from "../validators/params/v_solicitud";
import { createApiInstance } from "@/infraestructure/lib/axios/config.axios";
import config from "@/infraestructure/config/config";

export const sendApprovels = async (data: DTO_ParamsSolicitud) => {
  const base64File = data.documento.buffer.toString("base64");
  const hash = crypto.createHash("sha256").update(base64File).digest("hex");
  const params = {
    documento: base64File,
    hashDocumento: hash,
    tipoDocumento: data.tipoDocumento,
    accessToken: data.tokenUserSeccion,
    idTramite: randomUUID(),
    descripcion: data.descripcion,
  };
  console.log(params);
  const api = createApiInstance({
    baseURL: config.APPOVALS.url,
    authType: "Bearer",
    token: config.APPOVALS.accesToken,
  });

  const responseSolicitud = await api.post("/api/solicitudes", params);

  return responseSolicitud;
};
