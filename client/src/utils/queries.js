import { gql } from '@apollo/client';

export const query = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;


export const GetUser = gql`         //QUERY_USER
  query user($username: String!) {
    user(username: $username) {
      _id
      name
      email      
    }
  }
`;

export const GetMe = gql`
  query me {
    me {
       _id
      name      
      email
    }
  }
`;


export const GetGreetings = gql`
  query me {
    me {
       _id
      name      
      email
    }
  }
`;



export const GetAllUsers = gql`
query users {
  users {
    name
    email
    password
  }
}
`;

