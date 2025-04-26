import app from "./app";
import { connectDB } from "./config/database";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`);
  });
};

startServer();
