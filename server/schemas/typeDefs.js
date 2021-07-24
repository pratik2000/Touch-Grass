const { gql } = require ('apollo-server-express');

const typeDefs = gql`
  
type User {
  _id: ID
  username: String
  password: String
}
input UserInput {
  username: String
  password: String
}
type Destination {
  _id: ID
  location: String
  visited: Boolean
  owner_id: ID
}
input DestinationInput {
  location: String
  visited: Boolean
  owner_id: ID!
}
type Query {
  getDestination: [Destination]
  getUsers: [User]
  getUserDestination(owner_id: ID!): [Destination]
}
type Mutation {
  addDestination(destination: DestinationInput): Destination
  addUser(user: UserInput): User
}`
  ;
  module.exports = typeDefs;