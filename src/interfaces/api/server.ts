import express from "express";
import contactRoutes from "./routes/contactRoutes";


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use("/api/contacts", contactRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});