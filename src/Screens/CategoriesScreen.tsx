import React from 'react'
import * as Queries from '../GraphQL/queries'
import * as Subscriptions from '../GraphQL/subscriptions'
import Query from '../GraphQL/Query'
import get from 'lodash.get'
import Header from '../Components/Header/Header'
import Screen from '../Components/Screen/Screen'
import * as NavigatorService from '../Navigation/NavigatorService'
import { Icon, ListItem, Text } from 'react-native-elements'
import { AsyncStorage, FlatList, View } from 'react-native'
import { prepare } from '../Helpers/RecordsHelper'
import { Subscription } from 'react-apollo'
import set from 'lodash/set'

type Props = { navigation: any }

export default class CategoriesScreen extends React.Component<Props> {
  state = {
    refreshing: false
  }

  merge = (result, oldEntries) => ({
    ...result,
    categories: {
      ...result.categories,
      entries: prepare([...oldEntries, ...result.categories.entries])
    }
  })

  loadMore = (fetchMore, page) => () => {
    fetchMore({
      variables: { pagination: { page: page + 1, perPage: 5 } },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev

        if (prev && prev.categories && prev.categories.entries) {
          return this.merge(fetchMoreResult, prev.categories.entries)
        }
      }
    })
  }

  onPress = (categoryId, categoryName) => {
    return NavigatorService.navigate('Threads', { categoryId, categoryName })
  }

  renderItem = ({ item }) => {
    return <ListItem titleStyle={{ fontSize: 18 }} onPress={() => this.onPress(item.id, item.title)} key={item.id} title={item.title} />
  }

  render () {
    return (
      <Screen>
        <Header
          text='Categories'
          rightComponent={
            <Icon
              onPress={async () => {
                await AsyncStorage.clear()
                NavigatorService.reset('Login')
              }}
              name='exit-to-app'
              color='#fff'
            />
          }
        />
        <Query query={Queries.getCategories} variables={{ pagination: { page: 0, perPage: 5 } }}>
          {({ data, fetchMore, refetch }) => {
            let categories = get(data, 'categories', { entries: [], page: 0 })
            return (
              <Subscription
                shouldResubscribe
                subscription={Subscriptions.categoryAdded}
              >
                {({ data }) => {
                  if (data) {
                    categories = prepare(set(categories, 'entries', [data.categoryAdded, ...categories.entries]))
                  }
                  return (
                    <FlatList
                      onEndReached={this.loadMore(fetchMore, categories.page)}
                      onEndReachedThreshold={0.8}
                      refreshing={this.state.refreshing}
                      onRefresh={refetch}
                      data={categories.entries}
                      keyExtractor={item => item.id}
                      renderItem={this.renderItem}
                    />
                  )
                }}
              </Subscription>
            )
          }}
        </Query>
      </Screen>
    )
  }
}
