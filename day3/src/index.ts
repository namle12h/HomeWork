import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import categoriesRouter from "./routes/categories";
import brandsRouter from "./routes/brands";
import staffsRouter from "./routes/staffs";
import productsRouter from "./routes/products";
import ordersRouter from "./routes/orders";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/brands", brandsRouter);
app.use("/staffs", staffsRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

app.listen(port, () => {
  console.log(`Server đang chạy 34 http://localhost:${port}`);
});
