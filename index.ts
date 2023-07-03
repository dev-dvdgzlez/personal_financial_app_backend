import express, { Express, Request, Response } from "express";
import env from "./dotenvconfig";

import { testDbConnection } from "./db/connect";

const app: Express = express();
const port = env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  await testDbConnection();
  res.send("Express + TypeScript Server :D ⚡️");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
