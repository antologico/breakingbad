import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Title, Input, Characteres, CharacterImage } from '../ui'
import { injectIntl } from 'react-intl'
import imdb from '../images/imdb.svg'

const List = ({ characteres, intl }) => {
  const [filter, setFilter] = useState('')
  const filtered = filter !== ''
    ? characteres.filter(({ data }) => data.name.includes(filter))
    : characteres

  return <>
    <Title><img src={imdb} alt='IMBd' height='30px' /> Breaking Bad</Title>
    <div>
        <Input
          placeholder={'🔎 ' + intl.formatMessage({
            id: 'example',
            defaultMessage: 'Ex, Walter',
          },)}
          width='100%'
          value={filter}
          onChange={(e) => setFilter(e.target.value)} />
    </div>
    <Characteres>
      {filtered && filtered.map(({ data }) => {
        const key=`character_${data.id}`
        const { name, image } = data
        return <nav key={key} data-test={key}>
            <Link to={`/detail/${data.id}`} >
                <span>{name}</span>
                <CharacterImage data-test='image' src={image} alt={name} height='40px' width='40px'/>
            </Link>
        </nav>
    })}</Characteres>
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
