import { hasSubscription } from '@jumpn/utils-graphql'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { WebSocketLink } from 'apollo-link-ws'
import * as AbsintheSocket from '@absinthe/socket'
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link'
import { Socket as PhoenixSocket } from 'phoenix'
import Resolvers from './Resolvers'
import Config from 'react-native-config'

const WEBSOCKET_API_URL = "ws://frayed-capital-gourami.gigalixirapp.com/socket"
const GRAPHQL_API_URL = "https://frayed-capital-gourami.gigalixirapp.com/graphql"

type ContextType = {
  token?: String
}

let CONTEXT: ContextType = {}

export const setToken = (token: String) => {
  CONTEXT.token = token
}
const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  ...Resolvers
})

const inner = function (operation: any, forward: any) {
  operation.setContext({
    headers: {
      authorization: `Bearer ${this.token}`
    }
  })

  return forward(operation).map((result: any) => {
    return result
  })
}.bind(CONTEXT)

const middlewareLink = new ApolloLink(inner)

const javaScriptWebsocketLink = new WebSocketLink({
  uri: WEBSOCKET_API_URL,
  options: {
    reconnect: true
  }
})

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
  credentials: 'same-origin'
})

const absintheSocketLink = createAbsintheSocketLink(AbsintheSocket.create(
  new PhoenixSocket(WEBSOCKET_API_URL)
))

const subscriptionsLink = Config.BACKEND === 'js' ? javaScriptWebsocketLink : absintheSocketLink

const link = ApolloLink.split(
  operation => hasSubscription(operation.query),
  subscriptionsLink,
  middlewareLink.concat(httpLink)
)

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, errorLink, link]),
  cache
})

export default client
