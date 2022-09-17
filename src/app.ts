import express, { Application, Response, Request } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(5000, () => console.log("Server started"));
