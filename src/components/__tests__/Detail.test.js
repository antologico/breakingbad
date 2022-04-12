import React from 'react'
import { mount } from '../../tests/utils'
import Detail from '../Detail'

jest.mock('../Info', () => () => <div id='info'>INFO</div>)
jest.mock('../Loading', () => () => <div id='loading'>LOADING</div>)
jest.mock('../Error', () => () => <div id='error'>ERROR</div>)

const defaultProps = {
  fetchCharacter: () => {},
  getLoading: () => false,
  getError: () => false,
  getCharacter: () => false,
  useDispatch: () => (fn) => fn,
}

describe('Container component', () => {

  test('renders properly', () => {
    const fetchCharacter = jest.fn()
    const component = mount(
        <Detail
          {...defaultProps}
          fetchCharacter={fetchCharacter}
        />
    )
    component.update()
    expect(fetchCharacter).toBeCalled()
  })

  test('renders loading', () => {
    const component = mount(
        <Detail
          {...defaultProps}
          getLoading={() => true}
        />
    )
    component.update()
    expect(component.find('#info').exists()).toBe(false)
    expect(component.find('#error').exists()).toBe(false)
    expect(component.find('#loading').exists()).toBe(true)
  })

  test('renders with error', () => {
    const component = mount(
        <Detail
          {...defaultProps}
          getError={() => true}
        />
    )
    component.update()
    expect(component.find('#info').exists()).toBe(false)
    expect(component.find('#error').exists()).toBe(true)
    expect(component.find('#loading').exists()).toBe(false)
  })

  test('renders with data', () => {
    const component = mount(
        <Detail
          {...defaultProps}
          getCharacter={(id) => ({ data: { id } })}
        />
    )
    component.update()
    expect(component.find('#info').exists()).toBe(true)
    expect(component.find('#error').exists()).toBe(false)
    expect(component.find('#loading').exists()).toBe(false)
  })
})