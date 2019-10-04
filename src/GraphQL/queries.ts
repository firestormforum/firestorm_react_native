import gql from 'graphql-tag'

export const getThreadsByCategory = gql`
  query threadsByCategory($categoryId: ID!) {
    category(id: $categoryId) {
      threads {
        id
        title
        insertedAt
      }
    }
  }
`

export const getThread = gql`
  query getThread($id: ID!) {
    thread(id: $id) {
      id
      title
      posts {
        id
        body
      }
    }
  }
`

export const getCategories = gql`
  query allCategories($pagination: Pagination) {
    categories(pagination: $pagination) {
      page
      perPage
      entries {
        id
        title
        insertedAt
      }
    }
  }
`

export const getPostsByThread = gql`
  query getPostsByThread($threadId: ID!) {
    thread(id: $threadId) {
      posts {
        id
        body
        insertedAt
        user {
          id
          name
          username
        }
      }
    }
  }
`
