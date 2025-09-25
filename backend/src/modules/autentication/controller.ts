import { catchAsync } from "@/infraestructure/middleware/catchAsync";
import { Request, Response } from "express";
import { AuthCiudadaniaService, callbackAuth } from "./service";
import { API } from "@/infraestructure/config/response";
import { AUTENTICATION } from "@/infraestructure/config/enviroments";

export const AutenticacionController = {
  url: catchAsync(async (req: Request, res: Response) => {
    const getUrl = AuthCiudadaniaService();
    res.redirect(getUrl);
  }),

  //   callback: catchAsync(async (req: Request, res: Response) => {
  //     const systemToken = "asdkjasñda sdlknakmksdlkasdñalknfldshfasjñ.bfnb";
  //     res.send(`
  //  <script>

  //   window.opener.postMessage({ token: "${systemToken}" }, "*");
  // </script>
  //   `);
  //   }),

  callback: catchAsync(async (req: Request, res: Response) => {
    console.log(req.query);
    console.log(req.params);
    const systemToken = "abc.123.token";
    if (!systemToken) {
      res.redirect(`${AUTENTICATION.redirect_client}/ciudadania/auth/failed`);
    }
    res.redirect(
      `${AUTENTICATION.redirect_client}/ciudadania/auth/success/?token=${systemToken}`
    );
  }),
};
