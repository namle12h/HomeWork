"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = __importDefault(require("./database/database"));
const Brand_1 = __importDefault(require("./models/Brand"));
// import Customer from "./models/Customer";
// import Staff from "./models/Staff";
// import Order from "./models/Order";
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.default)();
    yield Brand_1.default.deleteMany({});
    // await Customer.deleteMany({});
    // await Staff.deleteMany({});
    // await Order.deleteMany({});
    yield Brand_1.default.insertMany([
        { name: "Giant" },
        { name: "Trek" },
        { name: "Cannondale" },
    ]);
    // const customers = await Customer.insertMany([
    //   {
    //     firstName: "Nguyen",
    //     lastName: "An",
    //     email: "an@example.com",
    //     phone: "0123456789",
    //   },
    //   {
    //     firstName: "Tran",
    //     lastName: "Binh",
    //     email: "binh@example.com",
    //     phone: "0987654321",
    //   },
    // ]);
    // const staffs = await Staff.insertMany([
    //   {
    //     firstName: "Pham",
    //     lastName: "Long",
    //     email: "long@example.com",
    //     role: "Manager",
    //   },
    //   {
    //     firstName: "Le",
    //     lastName: "Hanh",
    //     email: "hanh@example.com",
    //     role: "Sales",
    //   },
    // ]);
    // await Order.insertMany([
    //   {
    //     orderDate: new Date(),
    //     customerId: customers[0]._id,
    //     staffId: staffs[0]._id,
    //   },
    //   {
    //     orderDate: new Date(),
    //     customerId: customers[1]._id,
    //     staffId: staffs[1]._id,
    //   },
    // ]);
    console.log("✅ Nhập dữ liệu thành công!");
    mongoose_1.default.connection.close();
});
seedDatabase();
//# sourceMappingURL=seed.js.map