import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/checkLamda", (req: Request, res: Response) => {
  console.log("Lamda Res ==> ", req);
  res.send(req);
});

const port = 4000;
app.listen(port, () => {
  console.log("Server is up and running on ", port);
});
