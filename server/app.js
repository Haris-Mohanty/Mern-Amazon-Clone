import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";

//********* DOTENV CONFIGURATION *****/
dotenv.config();

//********* REST OBJECT ********/
const app = express();

//********* MIDDLEWARE **********/
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//********** MIDDLEWARE ROUTES *******/

//********* PORT *********/
const port = process.env.PORT || 8080;

//******* LISTEN ******/
app.listen(port, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} mode in Port ${port}.`
      .bgBrightMagenta.white
  );
});
