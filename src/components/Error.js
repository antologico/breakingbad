import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ErrorWrapper, LinkButton } from '../ui'

export default () => <ErrorWrapper>
    <div>
        <FormattedMessage id='error' defaultMessage='Error' />
    </div>
    <LinkButton to='/' data-test='back-button'>
        <span><FormattedMessage defaultMessage='Return' id='return' /></span>
        <span>&#8617;</span> 
    </LinkButton>
</ErrorWrapper>