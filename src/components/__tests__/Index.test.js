import React from 'react'
import { mount } from '../../tests/utils'
import Index from '../Index'

jest.mock('../List', () => () => <div id='list'>INFO</div>)
jest.mock('../Loading', () => () => <div id='loading'>LOADING</div>)
jest.mock('../Error', () => () => <div id='error'>ERROR</div>)

const defaultProps = {
  fetchCharacteres: () => {},
  getLoading: () => false,
  getError: () => false,
  getCharacteres: () => false,
  useDispatch: () => (fn) => fn,
}

describe('Container component', () => {

  test('renders properly', () => {
    const fetchCharacteres = jest.fn()
    const component = mount(
        <Index
          {...defaultProps}
          fetchCharacteres={fetchCharacteres}
        />
    )
    component.update()
    expect(fetchCharacteres).toBeCalled()
  })

  test('renders loading', () => {
    const component = mount(
        <Index
          {...defaultProps}
          getLoading={() => true}
        />
    )
    component.update()
    expect(component.find('#list').exists()).toBe(false)
    expect(component.find('#error').exists()).toBe(false)
    expect(component.find('#loading').exists()).toBe(true)
  })

  test('renders with error', () => {
    const component = mount(
        <Index
          {...defaultProps}
          getError={() => true}
        />
    )
    component.update()
    expect(component.find('#list').exists()).toBe(false)
    expect(component.find('#error').exists()).toBe(true)
    expect(component.find('#loading').exists()).toBe(false)
  })

  test('renders with data', () => {
    const component = mount(
        <Index
          {...defaultProps}
          getCharactereses={(id) => ({ data: { id } })}
        />
    )
    component.update()
    expect(component.find('#list').exists()).toBe(true)
    expect(component.find('#error').exists()).toBe(false)
    expect(component.find('#loading').exists()).toBe(false)
  })
})