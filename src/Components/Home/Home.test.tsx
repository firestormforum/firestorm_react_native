import React from 'react'
import Home from './Home'
import renderer from 'react-test-renderer'

describe('Home Component test', () => {
  it('should render', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Test', () => {
  it('works', () => {
    expect(true).toBe(true)
  })
})
