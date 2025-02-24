"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const categories_1 = __importDefault(require("./routes/categories"));
// import productsRouter from "./routes/products";
// import brandsRouter from "./routes/brands";
// import staffsRouter from "./routes/staffs";
// import ordersRouter from "./routes/orders";
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/categories", categories_1.default);
// app.use("/products", productsRouter);
// app.use("/brands", brandsRouter);
// app.use("/staffs", staffsRouter);
// app.use("/orders", ordersRouter);
app.listen(port, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map