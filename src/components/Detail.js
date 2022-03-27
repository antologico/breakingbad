import React from 'react'
import { useSelector } from 'react-redux'

const Detail = () => {
  const error = useSelector(state => state.character.error)  
  return <div>
    <div>Braking Bad DETAIL</div>
    <div>
    </div></div>
}

export default Detail
