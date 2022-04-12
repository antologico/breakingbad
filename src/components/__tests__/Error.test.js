import React from 'react'
import { create } from '../../tests/utils'
import Error from '../Error'

jest.mock('react-router-dom', () => ({
  Link: ({children}) => <a id='link'>{children}</a>
}))

describe('Error component', () => {
  test('renders properly', () => {
    const component = create(
        <Error />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})