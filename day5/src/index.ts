import mongoose from "mongoose";
import Brand from "./models/Brand";
import Customer from "./models/Customer";
import Staff from "./models/Staff";
import Order from "./models/Order";

// Kết nối MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bikestore");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Thêm dữ liệu mẫu vào cơ sở dữ liệu
const seedDatabase = async () => {
  try {
    // Xóa tất cả dữ liệu cũ trong các bộ sưu tập
    await Brand.deleteMany({});
    await Customer.deleteMany({});
    await Staff.deleteMany({});
    await Order.deleteMany({});

    // Tạo dữ liệu mẫu cho từng bộ sưu tập
    const brand = await Brand.create({ name: "Giant" });
    console.log("Brand 'Giant' created");

    const customer = await Customer.create({
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "123456789",
      address: "123 Main St",
    });
    console.log("Customer 'John Doe' created");

    const staff = await Staff.create({
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      phone: "987654321",
      role: "Manager",
    });
    console.log("Staff 'Jane Smith' created");

    // Tạo đơn hàng mẫu
    await Order.create({
      customerId: customer._id,
      staffId: staff._id,
      totalAmount: 500,
    });
    console.log("Order created");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Chạy hàm chính
const main = async () => {
  try {
    await connectDB();
    await seedDatabase();
  } catch (err) {
    console.error("Error in main function:", err);
  } finally {
    mongoose.disconnect(); // Đảm bảo ngắt kết nối sau khi hoàn tất
    console.log("MongoDB connection closed");
  }
};

// Gọi hàm main và bắt lỗi nếu có
main().catch((err) => console.error("Global error handler:", err));
