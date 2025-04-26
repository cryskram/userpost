import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type User {
        id: ID!
        name: String!
        email: String!
        posts: [Post]
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        user: User!
    }

    input UserInput {
        name: String!
        email: String!
    }

    input PostInput {
        title: String!
        content: String
        userId: ID!
    }

    type Query {
        getUsers: [User]
        getUser(id: ID!): User
        getPosts: [Post]
        getPost(id: ID!): Post
    }

    type Mutation {
        createUser(input: UserInput): User
        createPost(input: PostInput): Post
    }
`);
