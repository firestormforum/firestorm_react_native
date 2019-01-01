import React, { Fragment } from 'react'
import get from 'lodash.get'
import Header from '../Components/Header/Header'
import Screen from '../Components/Screen/Screen'
import { FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements'
import { ScrollView, View, Alert, AsyncStorage } from 'react-native'
import { Mutation } from 'react-apollo'
import * as Mutations from '../GraphQL/mutations'
import * as Queries from '../GraphQL/queries'
import * as NavigatorService from '../Navigation/NavigatorService'
import LoginForm from '../Components/LoginForm/LoginForm'
import { setToken } from '../GraphQL/client'

type Props = {}

export default class LoginScreen extends React.Component<Props> {
  state = {
    email: '',
    password: ''
  }

  async componentWillMount () {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setToken(token)
      NavigatorService.navigate('Categories')
    }
  }

  render () {
    const { email, password } = this.state
    return (
      <Screen>
        <Mutation
          mutation={Mutations.authenticate}
          variables={{ email, password }}
          onCompleted={async (response) => {
            const token = response.authenticate
            await AsyncStorage.setItem('token', token)
            setToken(token)
            NavigatorService.navigate('Categories')
          }}
          refetchQueries={[ { query: Queries.getCategories } ]}
          onError={error => {
            Alert.alert(error.message)
          }}
        >
          {authenticate => {
            return (
              <LoginForm
                email={email}
                password={password}
                setEmail={email => this.setState({ email })}
                setPassword={password => this.setState({ password })}
                authenticate={authenticate}
              />
            )
          }}
        </Mutation>
      </Screen>
    )
  }
}
