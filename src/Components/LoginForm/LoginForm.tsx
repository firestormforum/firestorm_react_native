import React, { Fragment } from 'react'
import { View, Image } from 'react-native'
import styles from './LoginFormStyle'
import { FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements'
import Colors from '../../Config/Colors'

type Props = {
  email: string
  password: string
  setEmail: (email: String) => void
  setPassword: (password: String) => void
  authenticate: () => void
}

export default class LoginForm extends React.PureComponent<Props> {
  render () {
    const { email, password, setEmail, setPassword, authenticate } = this.props
    return (
      <Fragment>
        <View style={{ height: '40%', padding: 50 }}>
          <Image
            source={require('../../Images/firestorm-logo.png')}
            resizeMode='contain'
            style={{ height: '100%', width: '100%' }} />
        </View>

        <FormLabel>E-mail</FormLabel>
        <FormInput containerStyle={{ backgroundColor: '#e5e5e5' }} autoCapitalize='none' value={email} onChangeText={email => setEmail(email)} />

        <FormLabel>Password</FormLabel>
        <FormInput containerStyle={{ backgroundColor: '#e5e5e5' }} value={password} secureTextEntry onChangeText={password => setPassword(password)} />

        <View style={{ marginTop: '5%' }}>
          <Button backgroundColor={Colors.action} onPress={() => authenticate()} large title='Login' />
        </View>
      </Fragment>
    )
  }
}
