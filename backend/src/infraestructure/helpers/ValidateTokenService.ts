import jwt, { JwtPayload } from "jsonwebtoken";
import { NotFoundError } from "./errors";

interface Props {
  token: string;
  token_key: string;
}

interface TokenData extends JwtPayload {
  id: string;
}

export const ValidateTokenService = ({
  token,
  token_key,
}: Props): TokenData => {
  try {
    const decoded = jwt.verify(token, token_key) as TokenData;
    return decoded;
  } catch (err) {
    throw new NotFoundError("Token inválido o expirado");
  }
};
