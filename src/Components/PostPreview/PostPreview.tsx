import React from 'react'
import { ScrollView } from 'react-native'
import Markdown from 'react-native-simple-markdown'

type Props = {body: string}

export default class Home extends React.PureComponent<Props> {
  render () {
    const { body } = this.props
    return (<ScrollView style={{ flex: 1 }}>
      <Markdown>
        {body}
      </Markdown>
    </ScrollView>)
  }
}
