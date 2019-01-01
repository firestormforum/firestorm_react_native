import React from 'react'
import { Text, View } from 'react-native'
import styles from './HomeStyle'

type Props = {}

export default class Home extends React.PureComponent<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    )
  }
}
