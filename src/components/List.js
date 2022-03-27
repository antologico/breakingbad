import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchCharacteres } from '../actions/character'
import { Link } from 'react-router-dom'

const List = () => {
  const state = useSelector(state => state)
  const loading = useSelector(state => state.character.loading)
  const error = useSelector(state => state.character.error)
  const characteres = useSelector(state => state.character.data)
  const dispatch = useDispatch()

  useEffect(() => {
    (characteres.length === 0) && !error && dispatch(fetchCharacteres())
  }, [ fetchCharacteres, characteres, error ])
  
  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return <div>
    <div>Braking Bad</div>
    <div>
    {characteres && characteres.map(({ data }) => {
      const key=`character_${data.id}`
      return <nav><Link to={`/detail/${data.id}`} dataTest={key} key={key} >
            {data.name}
      </Link></nav>
  })}</div></div>
}

export default List
