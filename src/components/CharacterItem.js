import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { CharacterImage } from '../ui'

const CharacterItem = ({
    name,
    image,
    id
}) => {
    const key=`character_${id}`
    return <nav data-test={key} data-test-group='character-item'>
        <Link to={`/detail/${id}`} >
            <span>{name}</span>
            <CharacterImage
                src={image}
                alt={name}
                height='40px'
                width='40px'/>
        </Link>
    </nav>
}

CharacterItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
}

export default CharacterItem
