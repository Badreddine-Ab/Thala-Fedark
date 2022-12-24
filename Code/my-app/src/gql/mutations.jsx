import {gql} from '@apollo/client'
export const REGISTER_USER = gql`
    mutation createUser($userNew:UserInput!){
        user:registerUser(userNew:$userNew){
            name
        }
    }`

export const LOGIN_USER =gql`
    mutation LoginUser($userLogin:UserLoginInput!){
        user:loginUser(userLogin:userLogin){
            token
        }
    }
`   
export const FORGOT_PASSWORD_MUTATION = gql`
  mutation ForgotPasswordMutation($email: String!) {
    forgotPassword(email: $email)
  }
`;

const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPasswordMutation($resetToken: String!, $password: String!) {
    resetPassword(resetToken: $resetToken, password: $password)
  }
`;