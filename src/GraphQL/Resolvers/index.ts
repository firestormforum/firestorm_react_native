import ToastResolver from './ToastResolver'

export default {
  defaults: {
    ...ToastResolver.defaults,
    count: { value: 0, __typename: 'Count' }
  },
  resolvers: {
    Query: {
      ...ToastResolver.Query
    },
    Mutation: {
      ...ToastResolver.Mutation
    }
  }
}
