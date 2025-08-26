import config from "@/infraestructure/config/config";
import {
  encriptarRSA,
  LlaveSimetricoEntidad,
} from "@/infraestructure/utils/aes-encryption.util";
import { generarClaveYIV } from "@/infraestructure/utils/crypto.util";
import { generarSHA256 } from "@/infraestructure/utils/sha256";
import {
  DTO_MainNotification,
  DTONotificacionParamsAPI,
} from "../validators/natural/v_params_service";
import { DTO_NotificationNatural } from "../validators/v_notification";
import { s_descripcion } from "./descripcion.service";
import { s_elaces } from "./enlaces.service";
import { s_formulario } from "./formulario.service";
import { s_notificador } from "./notificador.service";
import { s_notificados } from "./notificados.service";
import { s_autoridad } from "./autoridad.service";

export const enviarNotificacion = async (data: DTO_NotificationNatural) => {
  const { clave, iv } = generarClaveYIV();

  const llaveSimetricaCifrada = encriptarRSA(clave, config.PEM.NOTIFICATION);
  const ivCifrado = encriptarRSA(iv, config.PEM.NOTIFICATION);
  const claveSimetrica: LlaveSimetricoEntidad = {
    llaveAES: clave,
    ivAES: iv,
  };

  const E_autoridad = s_autoridad(data.autoridad, claveSimetrica);
  const E_enlaces = s_elaces(data.enlaces, claveSimetrica);
  const E_notificador = s_notificador(data.notificador, claveSimetrica);
  const E_descripcion = s_descripcion(data.descripcion, claveSimetrica);
  const E_notificados = s_notificados(data.notificados, claveSimetrica);
  const E_formulario = s_formulario(data.formulario, claveSimetrica);

  const notificacion: DTONotificacionParamsAPI = {
    titulo: data.titulo,
    autoridad: E_autoridad,
    descripcion: E_descripcion,
    notificador: E_notificador,
    notificados: E_notificados,
    enlaces: E_enlaces,
    formularioNotificacion: E_formulario,
  };
  const sha = generarSHA256(notificacion);
  const formatData: DTO_MainNotification = {
    notificacion,
    seguridad: {
      iv: ivCifrado,
      llaveSimetrica: llaveSimetricaCifrada,
    },
    sha256: sha,
  };

  console.log(JSON.stringify(formatData, null, 2));
  return formatData;
};
