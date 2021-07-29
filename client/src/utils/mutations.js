import { gql } from '@apollo/client';

export const AddUSER = gql`
 mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password:  $password ){
    user {
      _id
      name
      email
    }
  }
}
`;

export const LoginUSER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
   }
}
`;

export const DeleteUSER = gql`
  mutation deleteUser($email: String!, $password: String!) {
    deleteUser(email: $email, password: $password) {
      user {
        _id
        name
        email
      }
    }
  }
`;

export const UpdatePW = gql`
 mutation updatePassword($email: String!, $password: String!, $newpw: String!) {
    updatePassword(email: $email, password: $password, newpassword: $newpw) {
        user {
            _id
            name
            email
        }
    }
}
`;


