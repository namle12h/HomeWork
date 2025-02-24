import mongoose, { Schema, Document, Model } from "mongoose";

interface IBrand extends Document {
  name: string;
}

const BrandSchema: Schema = new Schema({
  name: { type: String, required: true },
});

const Brand: Model<IBrand> = mongoose.model<IBrand>("Brand", BrandSchema);

export default Brand;
