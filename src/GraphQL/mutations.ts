import gql from 'graphql-tag'

export const createPost = gql`
  mutation createPost($body: String!, $threadId: ID!) {
    createPost(body: $body, threadId: $threadId) {
      id
      body
    }
  }
`

export const createThread = gql`
  mutation createThread($title: String!, $categoryId: ID!, $body: String!) {
    createThread(title: $title, categoryId: $categoryId, body: $body) {
      id
      title
    }
  }
`

export const authenticate = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`
