import mongoose, { Schema, Document, Model } from "mongoose";

interface IStaff extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
}

const StaffSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
});

const Staff: Model<IStaff> = mongoose.model<IStaff>("Staff", StaffSchema);

export default Staff;
