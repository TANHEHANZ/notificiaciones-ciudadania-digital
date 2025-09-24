import crypto, { randomUUID } from "crypto";
import { DTO_ParamsSolicitud } from "../validators/params/v_solicitud";
import { createApiInstance } from "@/infraestructure/lib/axios/config.axios";
import config from "@/infraestructure/config/config";
import { PropsUpload, UploadFile } from "./upload";
import { generarSHAFile } from "@/infraestructure/utils/sha256";

export const sendApprovels = async (data: DTO_ParamsSolicitud) => {
  const base64File = await data.documento.buffer.toString("base64");
  const hash = crypto.createHash("sha256").update(base64File).digest("hex");

  // const hashFile = generarSHAFile(data.documento); /// este es para el notificador
  const params = {
    documento: base64File,
    hashDocumento: hash,
    tipoDocumento: data.tipoDocumento,
    accessToken: data.tokenUserSeccion,
    idTramite: randomUUID(),
    descripcion: data.descripcion,
  };

  const api = createApiInstance({
    baseURL: config.APPOVALS.url,
    authType: "Bearer",
    token: config.APPOVALS.token,
  });
  const props: PropsUpload[] = [
    {
      key: "sistema_id",
      value: config.sistem_id,
      type: "text",
    },
    {
      key: "collector",
      value: "presupuesto",
      type: "file",
    },
    {
      key: "file",
      value: data.documento,
      type: "file",
    },
  ];

  const responseSolicitud = await api.post("/api/solicitudes", params);
  const resultado = await UploadFile(props);
  console.log("URL:", resultado);
  // console.log("RESPUESTA SOLICITUD", responseSolicitud);
  return responseSolicitud.data;
};
