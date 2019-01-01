import React from 'react'
import renderer from 'react-test-renderer'
import { Thread, Post } from '../../GraphQL/types'
import ListPosts from './ListPosts'

describe('ListThread Component test', () => {
  it('should render', () => {
    const tree = renderer.create(<ListPosts posts={new Array<Post>()} refetch={() => null} / >).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Test', () => {
  it('works', () => {
    expect(true).toBe(true)
  })
})
