import express from "express";
import bodyParser from "body-parser";
import contactRoutes from "../../api/routes/contactRoutes";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});