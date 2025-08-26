import {
  encriptarSimetricoDatos,
  LlaveSimetricoEntidad,
} from "@/infraestructure/utils/aes-encryption.util";

export const s_descripcion = (
  descripcion: string,
  claveSimetrica: LlaveSimetricoEntidad
) => {
  return encriptarSimetricoDatos(descripcion, claveSimetrica);
};
