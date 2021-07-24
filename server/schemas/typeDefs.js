const { gql } = require ('apollo-server-express');

const typeDefs = gql`
  
type User {
  _id: ID
  username: String
  password: String
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