import express from "express";
import cors from "cors";
import { rootRouter } from "./src/routers/root.router";
import logApi from "./src/common/morgan/init.morgan";
const app = express();
const port = 3069;

app.use(express.json());
//morgan with chalk
app.use(logApi);
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use(rootRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
