import mongoose from "mongoose";

const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
});
export default mongoose.model("Users", UserSchema);
