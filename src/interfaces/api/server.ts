import  express  from "express";
import { Routers } from "./routes/contactRoutes";
export const app = express()
app.use(express.json());

export function startServer() {
  const PORT =  3000;

  for(const [path, router] of Routers){
    app.use(path, router)
  }

  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 }
