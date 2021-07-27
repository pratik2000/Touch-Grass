const { gql } = require ('apollo-server-express');

const typeDefs = gql`
  
type User {
    _id: ID!
    name: String!    
    email: String!
    password:String!
  }
  
  type Auth {
    token: ID!
    user: User 
  }

  type Query {
    greeting:String
    me: User
    users: [User]
    user(name: String!): User        
    getUser:String    
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    signIn(email: String!, password: String!): Auth
    deleteUser(email: String!, password: String!): Auth
    updatePassword(email: String!, password: String!, newpassword:String!): User
  }
  `;

module.exports = typeDefs;