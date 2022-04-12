import React from 'react'
import { create } from '../../tests/utils'
import Loading from '../Loading'

jest.mock('../../images/loader.svg', () => 'loader')

jest.mock('react-router-dom', () => ({
  Link: ({children}) => <a id='link'>{children}</a>
}))

describe('Loading component', () => {
  test('renders properly', () => {
    const component = create(
        <Loading />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})