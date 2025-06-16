import express from "express";
import cors from "cors";
const app = express();
const port = 3069;

app.use(express.json());
app.use(
  cors({
    origin: ["https://google.com", "http://localhost:3000"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello Cu bi!");
});

app.get("/hello", (req, res, next) => {
  res.status(200).json("Upload thanh cong");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
