import React from 'react'
import ListThreads from '../Components/ListThreads/ListThreads'
import * as Queries from '../GraphQL/queries'
import * as Subscriptions from '../GraphQL/subscriptions'
import Query from '../GraphQL/Query'
import get from 'lodash.get'
import Header from '../Components/Header/Header'
import Screen from '../Components/Screen/Screen'
import * as NavigatorService from '../Navigation/NavigatorService'
import { Icon } from 'react-native-elements'
import { Subscription } from 'react-apollo'
import { prepare } from '../Helpers/RecordsHelper'

type Props = {}

export default class App extends React.Component<Props> {
  render () {
    const categoryId = get(this.props, 'navigation.state.params.categoryId')
    const categoryName = get(this.props, 'navigation.state.params.categoryName')
    return (
      <Query query={Queries.getThreadsByCategory} variables={{ categoryId }}>
        {({ data, refetch }) => {
          let threads = get(data, 'category.threads', [])
          return (< Subscription
            shouldResubscribe
            subscription={Subscriptions.threadAdded}
            variables={{ categoryId }}
          >
            {({ data }) => {
              if (data) {
                threads = prepare([data.threadAdded, ...threads])
              }
              return (
                <Screen>
                  <Header
                    text={`Threads - ${categoryName}`}
                    allowGoBack
                    rightComponent={
                      <Icon
                        onPress={() =>
                          NavigatorService.navigate('CreateThread', {
                            categoryId,
                            refetch
                          })}
                        name='add'
                        color='#fff'
                      />
                    }
                  />
                  <ListThreads
                    refetch={refetch}
                    threads={threads}
                  />
                </Screen>
              )
            }}
          </Subscription>)
        }
        }
      </Query >)
  }
}
