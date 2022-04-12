import React from 'react'
import { create } from '../../tests/utils'
import Info from '../Info'

jest.mock('react-router-dom', () => ({
  Link: ({children}) => <a id='link'>{children}</a>
}))

describe(' component', () => {
  test('renders properly', () => {
    const component = create(
        <Info 
          name='Walt'
          image='image.png'
          nickname='Nickname'
          appearance={['1', '2']}
          occupation={['Bank']}
          birthday={['2020-02-02']}
          status='single'
          portrayed='Actor Name'
        />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})