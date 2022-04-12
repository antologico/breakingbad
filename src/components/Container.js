import React from 'react'
import { Wrapper, LanguageSelectorWrapper } from '../ui'
import LanguageSelector from './LanguageSelector'

const Container = ({ children }) => <Wrapper>
    <LanguageSelectorWrapper><LanguageSelector /></LanguageSelectorWrapper>
    { children }
</Wrapper>

export default Container
