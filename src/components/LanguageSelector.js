import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setLanguage } from '../actions/language'
import messages from '../messages'
import { Select } from '../ui'
import { getLanguage } from '../selectors'

const LanguageSelector = ({ useDispatch, getLanguage, setLanguage }) => {
    const dispatch = useDispatch()
    const locale = getLanguage()
    return <Select data-test='language-selector' 
        value={locale}
        onChange={(e) => dispatch(setLanguage(e.target.value))}>
        {Object.keys(messages).map(key => 
            <option key={key} value={key}>
                {messages[key].name}
            </option>)
        }
    </Select>
}

LanguageSelector.propTypes = {
    getLanguage: PropTypes.func.isRequired,
    setLanguage: PropTypes.func.isRequired,
    useDispatch: PropTypes.func.isRequired,
}

LanguageSelector.defaultProps = {
    useDispatch,
    getLanguage,
    setLanguage,
}


export default LanguageSelector
