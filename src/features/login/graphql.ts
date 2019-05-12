import { gql } from 'apollo-boost'

export const translations = gql`
  query getLabelByKey($key: String!) {
    getLabelByKey(key: $key) {
      id
      translationTexts {
        text
      }
    }
  }
`

export const login = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
    }
  }
`
