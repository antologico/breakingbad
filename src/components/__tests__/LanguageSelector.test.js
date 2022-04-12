import React from 'react'
import { mount, create } from '../../tests/utils'
import LanguageSelector from '../LanguageSelector'

describe('LanguageSelector component', () => {
  test('renders properly', () => {
    const component = create(
        <LanguageSelector
          useDispatch={() => (fn) => fn}
          getLanguage={() => 'es'}
          setLanguage={() => {}}
        />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('calls setLanguage when changes', () => {
    const setLanguage = jest.fn()
    const component = mount(
        <LanguageSelector
        useDispatch={() => (fn) => fn}
        getLanguage={() => 'es'}
        setLanguage={setLanguage}
      />
    )
    component.update()
    const select = component.find('select').at(0)
    expect(component.find('select').exists()).toBe(true)
    select.simulate('change', { target: { value: 'en'} })
    expect(setLanguage).toBeCalledWith('en')
  })
})