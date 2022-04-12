import React from 'react'
import { create, mount } from '../../tests/utils'
import List from '../List'

jest.mock('react-router-dom', () => ({
  Link: ({children}) => <a id='link'>{children}</a>
}))

jest.mock('../../images/imdb.svg', () => 'image')

const characteres = [
  { data: { id: 1, name: 'Alt', image: 'image1.png' } },
  { data: { id: 2, name: 'Control', image: 'image1.png' } },
]

describe(' component', () => {
  test('renders properly', () => {
    const component = create(
        <List characteres={characteres} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  test('filter properly', () => {
    const component = mount(
        <List characteres={characteres} />
    )
    component.update()
    expect(component.find('[data-test="character_1"]').exists()).toBe(true)
    expect(component.find('[data-test="character_2"]').exists()).toBe(true)
    
    const input = component.find('input').at(0)
    expect(input.exists()).toBe(true)
    input.simulate('change', { target: { value: 'Alt'} })
   
    component.update()
    expect(component.find('[data-test="character_1"]').exists()).toBe(true)
    expect(component.find('[data-test="character_2"]').exists()).toBe(false)
  })
})