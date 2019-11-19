import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import * as NavigatorService from '../../Navigation/NavigatorService'
import Colors from '../../Config/Colors'

type Props = { text?: any; allowGoBack?: boolean; rightComponent?: any }

const ArrowBack = () => (
  <TouchableOpacity onPress={NavigatorService.goBack}>
    <Icon name='arrow-back' color='#fff' />
  </TouchableOpacity>
)

export default class MyHeader extends React.PureComponent<Props> {
  render () {
    const { text, allowGoBack, rightComponent } = this.props
    return (
      <Header
        backgroundColor={Colors.secondary}
        leftComponent={allowGoBack ? <ArrowBack /> : null}
        rightComponent={rightComponent}
        centerComponent={{ text, style: { color: '#fff' } }}
        outerContainerStyles={{ height: 80 }}
      />
    )
  }
}
