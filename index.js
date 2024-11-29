import cors from "cors";
import express from "express";

function simpleApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/api/backend-call", (req, res, next) => {
    try {
      return res.json("Wow backend is also connected!");
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
  return app;
}
const app = simpleApp();

app.listen(8080, async () => {
  console.log(`App is running @Port: ${"8080"}`);
});
