import { gql } from "apollo-server-express";
export const typeDef = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: Date!
    sentMessages: [Message]
    receivedMessages: [Message]
  }
  type Query {
    users: [UserQuery]
  }
  type UserQuery {
    id: ID!
    name: String!
    email: String!
    createdAt: Date!
  }
  type Mutation {
    register(name: String!, email: String!, password: String!): AuthPayLoad!
    login(email: String!, password: String!): AuthPayLoad!
  }
  type AuthPayLoad {
    token: String!
  }
`;
