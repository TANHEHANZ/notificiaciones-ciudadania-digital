import qs from "qs";
import { createApiInstance } from "@/infraestructure/lib/axios/config.axios";
import { AUTENTICATION } from "@/infraestructure/config/enviroments";

export const getTokenCiudadania = async (code: string): Promise<any> => {
  const ParamsGetToken = {
    grant_type: "authorization_code",
    client_id: AUTENTICATION.client_id,
    client_secret: AUTENTICATION.secret_client,
    redirect_uri: AUTENTICATION.redirect_uri,
    scope: AUTENTICATION.scope,
    code: code,
  };
  console.log(ParamsGetToken);
  const api = createApiInstance({
    baseURL: AUTENTICATION.url,
  });
  const response = await api.post("/token", qs.stringify(ParamsGetToken), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response;
};
