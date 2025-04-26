import User, { IUser } from "../models/User";
import Post from "../models/Post";

export const UserResolver = {
  getUsers: async () => {
    return await User.find();
  },

  getUser: async ({ id }: { id: string }) => {
    return await User.findById(id);
  },

  createUser: async ({ input }: { input: IUser }) => {
    const user = new User(input);
    await user.save();
    return user;
  },

  posts: async (user: IUser) => {
    return await Post.find({ userId: user._id });
  },
};
