import React from 'react'
import ListThreads from './ListThreads'
import renderer from 'react-test-renderer'
import { Thread } from '../../GraphQL/types'

describe('ListThread Component test', () => {
  it('should render', () => {
    const tree = renderer.create(<ListThreads refetch={() => null} threads={new Array<Thread>()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Test', () => {
  it('works', () => {
    expect(true).toBe(true)
  })
})
