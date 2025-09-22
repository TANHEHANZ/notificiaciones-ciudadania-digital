import { Request, Response, Router } from "express";
import { getFormHtml } from "../templates/noFile";

const routerTest = Router();
routerTest.post("/form", async (req: Request, res: Response): Promise<void> => {
  const { client, token } = req.query;
  console.log(token);
  console.log(req.body);
  const html = getFormHtml(
    "MARCO CESAR POZUETA OKAFOR",
    "CI 7511786236-8Y",
    "correo-7511786236-8Y@yopmail.com",
    "6581040606"
  );

  res.send(html);
});

export default routerTest;
