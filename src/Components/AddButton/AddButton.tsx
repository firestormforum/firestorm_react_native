import React from 'react'
import { ViewStyle, StyleProp } from 'react-native'
import { Button } from 'react-native-elements'
import Colors from '../../Config/Colors'

type Props = { text: string; large?: boolean, onPress: () => void, style: StyleProp<ViewStyle> }

export default class AddButton extends React.PureComponent<Props> {
  render () {
    const { text, style, large, onPress } = this.props
    return (
      <Button
        style={style}
        large={large}
        onPress={onPress}
        backgroundColor={Colors.action}
        icon={{ name: 'plus', type: 'font-awesome' }}
        title={text} />
    )
  }
}
