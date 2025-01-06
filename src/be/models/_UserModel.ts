import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  category: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  category: { type: String, required: true, unique: true },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
