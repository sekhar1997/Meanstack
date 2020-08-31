import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { router } from "../src/config/routes";
import logger from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger.json";

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/userdata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
// mongoose.connect("mongodb://localhost/userdata");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);
app.use("/api", router);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  error.message = "Invalid route";
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: { message: error.message },
  });
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
