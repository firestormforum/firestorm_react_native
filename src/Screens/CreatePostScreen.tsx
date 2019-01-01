import React from 'react'
import get from 'lodash.get'
import Header from '../Components/Header/Header'
import Screen from '../Components/Screen/Screen'
import { FormLabel, FormInput } from 'react-native-elements'
import { View } from 'react-native'
import { Mutation } from 'react-apollo'
import * as Mutations from '../GraphQL/mutations'
import * as NavigatorService from '../Navigation/NavigatorService'
import AddButton from '.././Components/AddButton/AddButton'
import Colors from '../Config/Colors'
import { TabView, TabBar } from 'react-native-tab-view'
import PostPreview from '../Components/PostPreview/PostPreview'

type Props = {}

export default class CreatePostScreen extends React.Component<Props> {
  state = {
    body: '',
    index: 0,
    routes: [
      { key: 'create', title: 'Create' },
      { key: 'preview', title: 'Preview' }
    ]
  }

  renderCreateFragment = ({ createPost, body, setBody }) => {
    return (
      <View>
        <FormLabel>Your Post</FormLabel>
        <FormInput
          multiline
          containerStyle={{ minHeight: 100 }}
          value={body}
          onChangeText={body => setBody(body)} />
        <AddButton
          text='Create Post'
          style={{ marginTop: 20 }}
          onPress={() => createPost()}
          large
        />
      </View>
    )
  }

  render () {
    const threadId = get(this.props, 'navigation.state.params.threadId')
    const refetch = get(this.props, 'navigation.state.params.refetch')
    const { body } = this.state
    return (
      <Screen>
        <Header text='Create a Post' allowGoBack />
        <Mutation
          mutation={Mutations.createPost}
          variables={{ threadId, body: this.state.body }}
          onCompleted={() => {
            refetch().then(() => NavigatorService.goBack())
          }}
        >
          {createPost => {
            return (<TabView
              style={{ marginTop: -5 }}
              navigationState={this.state}
              renderTabBar={props =>
                <TabBar
                  {...props}
                  style={{ backgroundColor: Colors.secondary }}
                  pressColor='blue'
                  indicatorStyle={{ height: 2, backgroundColor: 'white' }}
                />
              }
              renderScene={({ route, focused }) => {
                switch (route.key) {
                  case 'create':
                    return this.renderCreateFragment({
                      createPost, body,
                      setBody: (body) => this.setState({ body })
                    })
                  case 'preview':
                    return <PostPreview body={body} />
                  default:
                    return null
                }
              }}
              onIndexChange={index => this.setState({ index })}
            />)
          }}
        </Mutation>
      </Screen>
    )
  }
}
