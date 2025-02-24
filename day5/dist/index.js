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
const Brand_1 = __importDefault(require("./models/Brand"));
const Customer_1 = __importDefault(require("./models/Customer"));
const Staff_1 = __importDefault(require("./models/Staff"));
const Order_1 = __importDefault(require("./models/Order"));
// Kết nối MongoDB
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb://localhost:27017/bikestore");
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});
// Thêm dữ liệu mẫu vào cơ sở dữ liệu
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Xóa tất cả dữ liệu cũ trong các bộ sưu tập
        yield Brand_1.default.deleteMany({});
        yield Customer_1.default.deleteMany({});
        yield Staff_1.default.deleteMany({});
        yield Order_1.default.deleteMany({});
        // Tạo dữ liệu mẫu cho từng bộ sưu tập
        const brand = yield Brand_1.default.create({ name: "Giant" });
        console.log("Brand 'Giant' created");
        const customer = yield Customer_1.default.create({
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            phone: "123456789",
            address: "123 Main St",
        });
        console.log("Customer 'John Doe' created");
        const staff = yield Staff_1.default.create({
            firstName: "Jane",
            lastName: "Smith",
            email: "janesmith@example.com",
            phone: "987654321",
            role: "Manager",
        });
        console.log("Staff 'Jane Smith' created");
        // Tạo đơn hàng mẫu
        yield Order_1.default.create({
            customerId: customer._id,
            staffId: staff._id,
            totalAmount: 500,
        });
        console.log("Order created");
    }
    catch (error) {
        console.error("Error seeding database:", error);
    }
});
// Chạy hàm chính
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB();
        yield seedDatabase();
    }
    catch (err) {
        console.error("Error in main function:", err);
    }
    finally {
        mongoose_1.default.disconnect(); // Đảm bảo ngắt kết nối sau khi hoàn tất
        console.log("MongoDB connection closed");
    }
});
// Gọi hàm main và bắt lỗi nếu có
main().catch((err) => console.error("Global error handler:", err));
//# sourceMappingURL=index.js.map