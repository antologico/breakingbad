import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Title, Input, Characteres } from '../ui'
import { injectIntl } from 'react-intl'
import imdb from '../images/imdb.svg'
import CharacterItem from './CharacterItem'

const List = ({ characteres, intl }) => {
  const [filter, setFilter] = useState('')
  const filtered = filter !== ''
    ? characteres.filter(({ data }) => data.name.includes(filter))
    : characteres

  return <>
    <Title><img src={imdb} alt='IMBd' height='30px' /> Breaking Bad</Title>
    <div>
        <Input
          data-test='search-box'
          placeholder={'🔎 ' + intl.formatMessage({  id: 'example', defaultMessage: 'Ex, Walter' },)}
          width='100%'
          value={filter}
          onChange={(e) => setFilter(e.target.value)} />
    </div>
    <Characteres>
      {filtered && filtered.map(({ data }, index) => <CharacterItem key={`item_${index}`} { ...data } />)}
    </Characteres>
  </>
}

List.propTypes = {
  intl: PropTypes.object,
  characteres: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }))
}

export default injectIntl(List)
