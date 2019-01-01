import React, { PureComponent, Ref, ReactElement, ReactNode } from 'react'
import AppNavigation from './Navigation/AppNavigation'
import { ApolloProvider } from 'react-apollo'
import client from './GraphQL/client'
import { Text } from 'react-native-elements'
import * as NavigatorService from './Navigation/NavigatorService'
import { NavigationComponent } from 'react-navigation'
import './Config/ReactotronConfig'

export default class RootContainer extends PureComponent {
  render () {
    if (client) {
      return (
        <ApolloProvider client={client}>
          <AppNavigation
            ref={(nav: NavigationComponent) => {
              NavigatorService.setNavigator(nav)
            }}
          />
        </ApolloProvider>
      )
    } else {
      return <Text>Loading...</Text>
    }
  }
}
