import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import OpenAIApi from 'openai';
import openAiRoutes from "./routes/openai.js";
/*CONFIGURATIONS*/

dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());

app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

/*Open Ai CONFIGURATION */ 
export const openai = new OpenAIApi({
  apiKey: process.env.OPEN_API_KEY, // This is the default and can be omitted
});

/*ROUTES*/
app.use('/openai',openAiRoutes);


/*Server Setup*/
const PORT =process.env.PORT  || 9000;
app.listen(PORT,()=>{
 console.log(`App listening at the port ${PORT}`);
});