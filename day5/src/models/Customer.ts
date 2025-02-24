import mongoose, { Schema, Document, Model } from "mongoose";

interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

const CustomerSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

const Customer: Model<ICustomer> = mongoose.model<ICustomer>(
  "Customer",
  CustomerSchema
);

export default Customer;
