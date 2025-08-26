import {
  encriptarSimetricoDatos,
  LlaveSimetricoEntidad,
} from "@/infraestructure/utils/aes-encryption.util";
import { DTO_nFormulario } from "../validators/natural/formulario";

export const s_formulario = (
  FormNotificacion: DTO_nFormulario,
  claveSimetrica: LlaveSimetricoEntidad
) => {
  return {
    ...FormNotificacion,
    url: encriptarSimetricoDatos(FormNotificacion.url, claveSimetrica),
  };
};
