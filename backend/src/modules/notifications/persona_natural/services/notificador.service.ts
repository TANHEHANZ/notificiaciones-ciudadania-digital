import {
  encriptarSimetricoDatos,
  LlaveSimetricoEntidad,
} from "@/infraestructure/utils/aes-encryption.util";
import { DTO_nNotificador } from "../validators/natural/notificador";

export const s_notificador = (
  notificador: DTO_nNotificador,
  claveSimetrica: LlaveSimetricoEntidad
): string => {
  return encriptarSimetricoDatos(JSON.stringify(notificador), claveSimetrica);
};
