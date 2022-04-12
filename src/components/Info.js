import React from 'react'
import PropTypes from 'prop-types'

import { FormattedDate, FormattedMessage } from 'react-intl'
import { CharacterWrapper, CharacterSection, CharacterInfoList, CharacterImage, HorizontalRule, LinkButton, Title } from '../ui'

const Info = ({
    name,
    image,
    nickname,
    appearance,
    occupation,
    birthday,
    status,
    portrayed,
}) => <CharacterWrapper>
        <Title data-test='name'>
            {name} <br /> <sup><i>"{nickname}"</i></sup>
        </Title>
        <CharacterImage data-test='image' src={image} alt={name} height='300px' width='100%'/>
        <CharacterSection>
            <FormattedMessage defaultMessage='Birthday' id='birthday' />
            : <strong>{birthday !== 'Unknown'
                ? <FormattedDate data-test='birthday'
                    value={new Date(birthday)}
                    year="numeric"
                    month="long"
                    day="numeric"
                    weekday="long"
                />
                : <FormattedMessage defaultMessage='-' id='unknown' />}</strong>
        </CharacterSection>
        <CharacterSection>
            <FormattedMessage defaultMessage='Status' id='status' />
            : <strong>{status}</strong>
        </CharacterSection>
        <CharacterSection>
            <FormattedMessage defaultMessage='Actor' id='actor' />
            : <strong>{portrayed}</strong>
        </CharacterSection>
        <CharacterSection data-test='occupation'>
            <FormattedMessage defaultMessage='Occupation' id='occupation' />:
            {occupation && <CharacterInfoList>
                {occupation.map(item => (<li key={item}>{item}</li>))}
            </CharacterInfoList>}
        </CharacterSection>
        <CharacterSection data-test='seassons'>
            <FormattedMessage defaultMessage='Seassons' id='seassons' />:
            {appearance && <CharacterInfoList>
                {appearance.map(item => (<li key={item}>{item}</li>))} 
            </CharacterInfoList>}
        </CharacterSection>
        <LinkButton to='/' data-test='back-button'>
            <span><FormattedMessage defaultMessage='Return' id='return' /></span>
            <span>&#8617;</span> 
        </LinkButton>
    </CharacterWrapper>

Info.propTypes = {
    name: PropTypes.string,
    nickname: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    portrayed: PropTypes.string,
    appearance: PropTypes.arrayOf(PropTypes.string),
    occupation: PropTypes.arrayOf(PropTypes.string),
}

export default Info