import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styles from './ListThreadsStyle'
import { ListItem } from 'react-native-elements'
import { Thread } from '../../GraphQL/types'
import * as NavigatorService from '../../Navigation/NavigatorService'

type Props = {
  refetch: () => void
  threads: Array<Thread>
}

export default class ListThreads extends React.PureComponent<Props> {
  state = {
    refreshing: false
  }

  renderThread = ({ item }) => {
    const thread = item
    return <ListItem
      titleStyle={{ fontSize: 18 }}
      onPress={() => NavigatorService.navigate('Posts', { threadId: thread.id, threadTitle: thread.title })}
      title={thread.title}
    />
  }
  render () {
    const { threads, refetch } = this.props
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={threads}
          onRefresh={refetch}
          refreshing={this.state.refreshing}
          renderItem={this.renderThread}
          keyExtractor={item => item.id} />
      </View>
    )
  }
}
