import React, { Fragment } from 'react'
import get from 'lodash.get'
import Header from '../Components/Header/Header'
import Screen from '../Components/Screen/Screen'
import { FormLabel, FormInput } from 'react-native-elements'
import { Mutation } from 'react-apollo'
import * as Mutations from '../GraphQL/mutations'
import * as NavigatorService from '../Navigation/NavigatorService'
import Colors from '../Config/Colors'
import AddButton from '../Components/AddButton/AddButton'
import { TabView, TabBar } from 'react-native-tab-view'
import { View } from 'react-native'
import PrettierLog from 'reactotron-prettier-log'
import PostPreview from '../Components/PostPreview/PostPreview'

type Props = {}

export default class CreatePostScreen extends React.Component<Props> {
  state = {
    title: '',
    body: '',
    index: 0,
    routes: [
      { key: 'create', title: 'Create' },
      { key: 'preview', title: 'Preview' }
    ]
  }

  renderCreateFragment = ({ createThread, title, body, setBody, setTitle }) => {
    return (
      <View>
        <FormLabel>Thread Name</FormLabel>
        <FormInput onChangeText={title => setTitle(title)} value={title} />
        <FormLabel>Your Post</FormLabel>
        <FormInput
          multiline
          containerStyle={{ minHeight: 100 }}
          value={body}
          onChangeText={body => setBody(body)} />
        <AddButton
          text='Create Thread'
          style={{ marginTop: 20 }}
          onPress={() => createThread()}
          large
        />
      </View>
    )
  }

  render () {
    const categoryId = get(this.props, 'navigation.state.params.categoryId')
    const refetch = get(this.props, 'navigation.state.params.refetch')
    const { title, body } = this.state
    return (
      <Screen>
        <Header text='Create a Thread' allowGoBack />
        <Mutation
          mutation={Mutations.createThread}
          variables={{ categoryId, title: this.state.title, body: this.state.body }}
          onCompleted={(data) => {
            PrettierLog.log('data for on completed', { data })
            const thread = get(data, 'createThread', {})
            refetch().then(() => NavigatorService.navigate('Posts', { threadId: thread.id, threadTitle: thread.title }))
          }}
        >
          {createThread => {
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
                      createThread, title, body,
                      setBody: (body) => this.setState({ body }),
                      setTitle: (title) => this.setState({ title })
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
