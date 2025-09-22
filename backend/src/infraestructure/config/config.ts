import fs from "fs";
import path from "path";
const config = {
  env: process.env.NODE_ENV || "development",
  sistem_id: "00e8a371-8927-49b6-a6aa-0c600e4b6a19",
  port: parseInt(process.env.PORT || "3000"),
  PEM: {
    NOTIFICATION: fs.readFileSync(
      path.resolve(process.cwd(), "src/.infra/key/TECNICO_NOTIFICADOR.pem"),
      "utf8"
    ),
    AUTH: fs.readFileSync(
      path.resolve(process.cwd(), "src/.infra/key/AUTORIZACION_LLAVE.pem"),
      "utf8"
    ),
  },
  API: {
    upload: process.env.URL_UPLOAD_FILE || "Url del servicio upload",
    notifications: process.env.URL_NOTIFICATION || "url Notifications",
    auth: process.env.URL_AUTORIZATION || "url Notifications",
  },
  token: {
    notifications: process.env.TOKEN_NOTIFICATION || "url Notifications",
    auth: process.env.TOKEN_AUTORIZATION || "url Notifications",
  },

  APPOVALS: {
    token: process.env.TOKEN_APPOVALS ?? "acces token",
    url: process.env.URL_APPOVALS ?? "URL",
  },
};
export default config;
