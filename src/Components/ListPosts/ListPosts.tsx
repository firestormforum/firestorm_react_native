import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import styles from './ListPostsStyle'
import { Card, Avatar, Divider } from 'react-native-elements'
import { Post } from '../../GraphQL/types'
import * as AvatarHelper from '../../Helpers/AvatarHelper'
import Markdown from 'react-native-simple-markdown'
import Colors from '../../Config/Colors'

type Props = {
  posts: Array<Post>
  refetch: () => void
}

export default class ListPosts extends React.PureComponent<Props> {
  state = {
    refreshing: false
  }

  renderPost = ({ item }) => {
    const post = item

    return (
      <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 5 }}>
        <View style={styles.containerAvatar}>
          <Avatar rounded source={{ uri: AvatarHelper.getUrl(post.user) }} activeOpacity={0.7} />
        </View>
        <View style={{ flex: 1 }}>
          <Card containerStyle={{ backgroundColor: Colors.cardBackground }}>
            <View style={styles.generalContainer}>
              <View style={styles.containerBody}>
                <View style={styles.width100Percent}>
                  <Text style={styles.username}>{post.user.name}</Text>
                  <Text style={styles.dateText}>{new Date(post.insertedAt).toLocaleString()}</Text>
                </View>
                <View style={styles.markdownContainer}>
                  <Markdown>{post.body}</Markdown>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </View>
    )
  }
  render () {
    const { posts, refetch } = this.props
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={posts}
          onRefresh={refetch}
          refreshing={this.state.refreshing}
          renderItem={this.renderPost}
          keyExtractor={item => item.id} />
      </View>
    )
  }
}
