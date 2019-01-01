import React from 'react'
import LoginForm from './LoginForm'
import renderer from 'react-test-renderer'

describe('Login Form Component test', () => {
  it('should render', () => {
    const tree = renderer
      .create(<LoginForm authenticate={() => null} email='' password='' setEmail={() => null} setPassword={() => null} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Test', () => {
  it('works', () => {
    expect(true).toBe(true)
  })
})
