import React from 'react'
import PropTypes from 'prop-types'
import { getLanguage } from '../selectors'
import { IntlProvider } from 'react-intl'
import messages from '../messages'

const LanguageProvider = ({ children, getLanguage }) => {
    const locale = getLanguage()
    return <IntlProvider messages={messages[locale].messages} locale={locale} defaultLocale={locale}>
        { children }
    </IntlProvider>
}

LanguageProvider.propTypes = {
    children: PropTypes.node,
    getLanguage: PropTypes.func.isRequired,
}

LanguageProvider.defaultProps = {
    getLanguage,
}

export default LanguageProvider