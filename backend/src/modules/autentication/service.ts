import { AUTENTICATION } from "@/infraestructure/config/enviroments";
import crypto from "crypto";
import { getTokenCiudadania } from "./getTokenCiudadania";
import { generateSystemToken } from "./JWT";
export const AuthCiudadaniaService = () => {
  const state = crypto.randomBytes(16).toString("hex");
  const nonce = crypto.randomBytes(16).toString("hex");
  const authUrl =
    `${AUTENTICATION.url + "/auth"}?client_id=${AUTENTICATION.client_id}` +
    `&response_type=${AUTENTICATION.response_type}` +
    `&redirect_uri=${encodeURIComponent(AUTENTICATION.redirect_uri)}` +
    `&scope=${encodeURIComponent(AUTENTICATION.scope)}` +
    `&state=${state}` +
    `&nonce=${nonce}`;

  return authUrl;
};

export const callbackAuth = async (code: string): Promise<any> => {
  const tokenCiudadania = await getTokenCiudadania(code);
  // const systemToken = generateSystemToken(tokenCiudadania);

  return tokenCiudadania;
};
