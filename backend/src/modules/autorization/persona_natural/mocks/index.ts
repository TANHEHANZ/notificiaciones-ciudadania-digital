import { DTO_apNotificado } from "../validators/v_apNotificado";
import { DTO_apNotificador } from "../validators/v_apNotificador";

const dataNotifcador: DTO_apNotificador = {
  numeroDocumento: "7511786236-8Y",
  tipoDocumento: "CI",
  fechaNacimiento: "1974-05-01",
};
const dataNotificado: DTO_apNotificado = {
  tipoDocumento: "CI",
  numeroDocumento: "6488817037-0R",
  fechaNacimiento: "1968-07-16",
};

export const A_notificador: string = JSON.stringify(dataNotifcador);
export const A_notificado: string = JSON.stringify(dataNotificado);
