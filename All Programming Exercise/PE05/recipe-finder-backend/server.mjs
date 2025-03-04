import express from "express";
import cors from "cors";
import recipes from "./routes/recipe.mjs";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('credentials', 'true');
  console.log('cors enabled')
  next();
});

app.options("*", cors());
app.use(cors());

app.use("/recipes", recipes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
