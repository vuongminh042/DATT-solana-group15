import express from "express";
import routerCategory from "./routes/category.js";

const app = express();
const PORT = 8000;

app.use(express.json()); // Parses JSON request bodies
app.use("/category", routerCategory);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
