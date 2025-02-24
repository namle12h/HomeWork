import mongoose from "mongoose";
import connectDB from "./database/database";
import Brand from "./models/Brand";
// import Customer from "./models/Customer";
// import Staff from "./models/Staff";
// import Order from "./models/Order";

const seedDatabase = async () => {
  await connectDB();

  await Brand.deleteMany({});
  // await Customer.deleteMany({});
  // await Staff.deleteMany({});
  // await Order.deleteMany({});

  await Brand.insertMany([
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
  mongoose.connection.close();
};

seedDatabase();
