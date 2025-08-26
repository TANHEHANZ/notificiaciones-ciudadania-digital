import {
  encriptarSimetricoDatos,
  LlaveSimetricoEntidad,
} from "@/infraestructure/utils/aes-encryption.util";
import { DTO_nNotificados } from "../validators/natural/notificados";

export const s_notificados = (
  notificados: DTO_nNotificados,
  claveSimetrica: LlaveSimetricoEntidad
) => {
  return notificados.map((item) =>
    encriptarSimetricoDatos(JSON.stringify(item), claveSimetrica)
  );
};
