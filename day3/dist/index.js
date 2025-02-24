"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const categories_1 = __importDefault(require("./routes/categories"));
// import brandsRouter from "./routes/brands";
// import customersRouter from "./routes/customers";
// import staffsRouter from "./routes/staffs";
const products_1 = __importDefault(require("./routes/products"));
// import ordersRouter from "./routes/orders";
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/categories", categories_1.default);
// app.use("/brands", brandsRouter);
// app.use("/customers", customersRouter);
// app.use("/staffs", staffsRouter);
app.use("/products", products_1.default);
// app.use("/orders", ordersRouter);
app.listen(port, () => {
    console.log(`Server đang chạy 34 http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map