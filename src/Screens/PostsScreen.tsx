import React from 'react'
import ListPosts from '../Components/ListPosts/ListPosts'
import * as Queries from '../GraphQL/queries'
import Query from '../GraphQL/Query'
import get from 'lodash.get'
import Header from '../Components/Header/Header'
import Screen from '../Components/Screen/Screen'
import { Icon } from 'react-native-elements'
import * as NavigatorService from '../Navigation/NavigatorService'
import * as Subscriptions from '../GraphQL/subscriptions'
import { Subscription } from 'react-apollo'
import { prepare } from '../Helpers/RecordsHelper'

type Props = {}

export default class PostsScreen extends React.Component<Props> {
  render () {
    const threadId = get(this.props, 'navigation.state.params.threadId')
    const threadTitle = get(this.props, 'navigation.state.params.threadTitle')

    return (
      <Query query={Queries.getPostsByThread} variables={{ threadId }}>
        {({ data, refetch }) => {
          let posts = get(data, 'thread.posts', [])
          return (< Subscription
            shouldResubscribe
            subscription={Subscriptions.postAdded}
            variables={{ threadId }}
          >
            {({ data }) => {
              if (data) {
                posts = prepare([data.postAdded, ...posts], ['insertedAt', 'id'], false)
              }
              return (
                <Screen>
                  <Header
                    text={`${threadTitle}`}
                    allowGoBack
                    rightComponent={
                      <Icon
                        onPress={() => NavigatorService.navigate('CreatePost', { threadId, refetch })}
                        name='add'
                        color='#fff'
                      />
                    }
                  />
                  <ListPosts refetch={refetch} posts={posts} />
                </Screen>
              )
            }}</Subscription>)
        }}
      </Query>
    )
  }
}
