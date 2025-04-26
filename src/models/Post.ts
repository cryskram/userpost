import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  userId: mongoose.Types.ObjectId;
}

const PostSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model<IPost>("Post", PostSchema);
