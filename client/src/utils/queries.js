import { gql } from '@apollo/client';

//export const query = gql`
//  query singleProfile($profileId: ID!) {
//    profile(profileId: $profileId) {
//      _id
//      name
//      skills
//    }
//  }
//`;


export const GetUser = gql`        
  query user($username: String!) {
    user(username: $username) {
      _id
      name
      email      
    }
  }
`;

export const GetWhois = gql`
  query Whois {
    Whois {
       _id
      name      
      email
    }
  }
`;


export const GetGreetings = gql`
  query greetins {    
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

