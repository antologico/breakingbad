import React from 'react'
import { FormattedMessage } from 'react-intl'
import { LoadingWrapper } from '../ui'
import loader from '../images/loader.svg'

export default () => <LoadingWrapper>
    <img src={loader} height='100px' />
    <div>
        <FormattedMessage id='loading' defaultMessage='...' />
    </div>
</LoadingWrapper>
