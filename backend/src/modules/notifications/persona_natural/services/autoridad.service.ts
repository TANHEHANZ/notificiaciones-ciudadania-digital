import {
  encriptarSimetricoDatos,
  LlaveSimetricoEntidad,
} from "@/infraestructure/utils/aes-encryption.util";
import { DTO_nAutoridad } from "../validators/natural/autoridad";

export const s_autoridad = (
  params: DTO_nAutoridad,
  claveSimetrica: LlaveSimetricoEntidad
): string => {
  const encriptado = encriptarSimetricoDatos(
    JSON.stringify(params),
    claveSimetrica
  );
  return encriptado;
};
