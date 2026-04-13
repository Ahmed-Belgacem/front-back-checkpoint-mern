const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const connectDB = require("./config/dbconnect");
app.use(express.json());
connectDB();











app.use(cors({
  origin: "https://front-back-checkpoint-mern.vercel.app"
}));
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(process.env.PORT, (err) =>
  err ? console.log("err") : console.log("Server is running"),
);


