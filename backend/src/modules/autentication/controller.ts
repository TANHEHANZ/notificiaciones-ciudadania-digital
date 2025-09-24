import { catchAsync } from "@/infraestructure/middleware/catchAsync";
import { Request, Response } from "express";
import { AuthCiudadaniaService, callbackAuth } from "./service";
import { API } from "@/infraestructure/config/response";
import { AUTENTICATION } from "@/infraestructure/config/enviroments";

export const AutenticacionController = {
  url: catchAsync(async (req: Request, res: Response) => {
    const getUrl = AuthCiudadaniaService();
    API.success(res, "Url para autenticaion obtenida exitosamente", getUrl);
  }),

  //   callback: catchAsync(async (req: Request, res: Response) => {
  //     const systemToken = "asdkjasñda sdlknakmksdlkasdñalknfldshfasjñ.bfnb";
  //     res.send(`
  //   <script>
  //     try {
  //       window.opener.postMessage(
  //         { token: "${systemToken}" },
  //         "${AUTENTICATION.redirect_client}"
  //       );
  //       console.log("Mensaje enviado al opener");
  //     } catch (err) {
  //       console.error("Error enviando mensaje:", err);
  //     }
  //     window.close();
  //   </script>
  // `);
  //   }),
  callback: catchAsync(async (req: Request, res: Response) => {
    const systemToken = "abc.123.token";
    res.redirect(
      `${AUTENTICATION.redirect_client}/auth/success/?token=${systemToken}`
    );
  }),
};
