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
            source={{ uri: 'https://raw.githubusercontent.com/dailydrip/firestorm/master/assets/static/images/firestorm-logo.png' }}
            resizeMode='contain'
            style={{ height: '100%', width: '100%' }} />
        </View>

        <FormLabel>E-mail</FormLabel>
        <FormInput autoCapitalize='none' value={email} onChangeText={email => setEmail(email)} />

        <FormLabel>Password</FormLabel>
        <FormInput value={password} secureTextEntry onChangeText={password => setPassword(password)} />

        <Button backgroundColor={Colors.action} onPress={() => authenticate()} large style={{ marginTop: 30 }} title='Login' />
      </Fragment>
    )
  }
}
