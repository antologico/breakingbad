import React from 'react'
import { create } from '../../tests/utils'
import Container from '../Container'

jest.mock('../LanguageSelector', () => () => <div id='selector' />)

describe('Container component', () => {
  test('renders properly', () => {
    const component = create(
        <Container>Content</Container>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})