import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { router } from './routes/v1';

dotenv.config();
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))

app.use(express.json())

app.use('/api/v1', router)


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
})