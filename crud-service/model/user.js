import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";


const userSchema = mongoose.Schema({
  productCategory: String,
  productDescription: String,
  productFeatures: String,
  productImages: String,
  productName: String,
  productSubcategory: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");

const postUser = mongoose.model("user", userSchema);

export default postUser;
