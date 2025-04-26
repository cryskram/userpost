import Post, { IPost } from "../models/Post";
import User from "../models/User";

export const PostResolver = {
  getPosts: async () => {
    return await Post.find();
  },
  getPost: async ({ id }: { id: string }) => {
    return await Post.findById(id);
  },
  createPost: async ({ input }: { input: IPost }) => {
    const post = new Post(input);
    await post.save();
    return post;
  },
  user: async (post: IPost) => {
    return await User.findById(post.userId);
  },
};
