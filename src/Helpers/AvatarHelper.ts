import { User } from 'src/GraphQL/types'

export const getUrl = (user: User) => {
  const name = user.name
  return `https://ui-avatars.com/api/?name=${encodeURI(name)}`
}
