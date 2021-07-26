import { gql } from '@apollo/client';


export const addUser = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      User {
        _id
        name
      }
    }
  }
`;


export const loginUser = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        _id
        name
      }
    }
  }
`;