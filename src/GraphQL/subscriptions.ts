import gql from 'graphql-tag'

export const categoryAdded = gql`
subscription categoryAddedSub {
    categoryAdded{
      id
      title
      slug
    }
  }
`

export const threadAdded = gql`
subscription threadAdded($categoryId: ID!) {
    threadAdded(categoryId: $categoryId) {
      id
      title
      slug
    }
  }
`

export const postAdded = gql`
subscription postAdded($threadId: ID!) {
  postAdded(threadId: $threadId) {
      id
      body
      insertedAt
      user {
        id
        name
      }
    }
  }
`
