import {gql} from '@apollo/client'
export const REGISTER_USER = gql`
   mutation Signup($name: String!, $email: String!, $password: String!, $role: String!) {
  signup(name: $name, email: $email, password: $password, role: $role) {
    id
  }
}`

export const LOGIN_USER =gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
    }
    token
  }
}
`   
export const FORGOT_PASSWORD = gql`
mutation Mutation($email: String!) {
  foregetPassword(email: $email)
}
`;

export const RESET_PASSWORD = gql`
mutation Mutation($password: String!, $token: String!) {
  resetPassword(password: $password, token: $token)
}

`;