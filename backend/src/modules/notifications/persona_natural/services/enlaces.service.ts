import {
  encriptarSimetricoDatos,
  LlaveSimetricoEntidad,
} from "@/infraestructure/utils/aes-encryption.util";
import { DTO_nEnlaces } from "../validators/natural/enlaces";

export const s_elaces = (
  enlaces: DTO_nEnlaces,
  claveSimetrica: LlaveSimetricoEntidad
) => {
  return enlaces.map((item) => ({
    ...item,
    url: encriptarSimetricoDatos(item.url, claveSimetrica),
    hash: item.hash ?? "", //--- hash del documento que contiene la url
  }));
};
