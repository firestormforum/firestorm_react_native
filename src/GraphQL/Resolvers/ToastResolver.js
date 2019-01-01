export default {
  defaults: {},
  Query: {},
  Mutation: {
    showToast: (_, { message }) => {
      console.log('showToast', message)
      // Use some toast implementation here
      return null
    }
  }
}
