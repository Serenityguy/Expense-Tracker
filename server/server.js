
require("dotenv").config();

const express = require("express");
const { connectDB } = require("./config/connectDB");
const cors = require("cors");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT,
    credentials: true,
  })
);

app.use(express.json());

require("./middleware/prod")(app);

app.use("/api", router);

connectDB()
  .then(() => {
    console.log("Connected to DB");

    app.listen(PORT, () => {
      console.log("Listening on " + PORT);
    });
  })
  .catch((err) => {
    console.error("Database startup failed:", err.message);
    process.exit(1);
  });

