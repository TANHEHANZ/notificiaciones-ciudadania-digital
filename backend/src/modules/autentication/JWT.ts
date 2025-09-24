import { JWT_SERVICE } from "@/infraestructure/config/enviroments";
import jwt from "jsonwebtoken";

export const generateSystemToken = (data: any) => {
  return jwt.sign(
    {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
    },
    JWT_SERVICE,
    { expiresIn: "2h" }
  );
};
