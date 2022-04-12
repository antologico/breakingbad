/* istanbul ignore file */
import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import LanguageProvider from '../components/LanguageProvider'

Enzyme.configure({ adapter: new Adapter() })

const createWithIntl = (node) => renderer.create(<LanguageProvider getLanguage={() => 'es'}>
    {node}
</LanguageProvider>)

const mountWithIntl = (node) => mount(<LanguageProvider getLanguage={() => 'es'}>
    {node}
</LanguageProvider>)

export {
    createWithIntl as create,
    mountWithIntl as mount,
    shallow,
}
