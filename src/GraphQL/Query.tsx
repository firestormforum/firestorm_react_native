import React, { ReactNode } from 'react'
import { Text, ActivityIndicator , View } from 'react-native'
import { Query, QueryResult } from 'react-apollo'
import Colors from '../Config/Colors'

type PropsLoading = {
  query: any
  variables?: any
  children: (x: QueryResult) => ReactNode
}

export default class MyQuery extends React.PureComponent<PropsLoading> {
  render () {
    const { children, query, ...queryProps } = this.props
    return (
      <Query query={query} {...queryProps}>
        {response => {
          if (response.loading) {
            return <ActivityIndicator style={{ flex: 1 }} size='large' color={Colors.secondary} />
          } else {
            return children(response)
          }
        }}
      </Query>
    )
  }
}
