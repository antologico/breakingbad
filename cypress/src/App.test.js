import React from 'react'
import { mount } from '@cypress/react'
import App from '../../src/App'

it('renders default', () => {
    mount(<App />)
    cy.get('a').contains('Breaking bad')
})