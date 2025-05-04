import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))

app.use(express.json())

app.use('/api/v1')

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
})