import mongoose, { Schema, Document, Model } from "mongoose";

interface IOrder extends Document {
  customerId: mongoose.Schema.Types.ObjectId;
  staffId: mongoose.Schema.Types.ObjectId;
  orderDate: Date;
  totalAmount: number;
}

const OrderSchema: Schema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  staffId: { type: Schema.Types.ObjectId, ref: "Staff", required: true },
  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
});

const Order: Model<IOrder> = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
