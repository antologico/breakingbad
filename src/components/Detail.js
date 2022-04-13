import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCharacter } from '../actions/character'
import Info from './Info'
import Loading from './Loading'
import Error from './Error'
import { getCharacter, getError, getLoading } from '../selectors'

const Detail = ({ fetchCharacter, useDispatch, getError, getLoading, getCharacter }) => {
  const id = parseInt(useParams().id)
  const dispatch = useDispatch()
  const error = getError()
  const character = getCharacter(id)
  const loading = getLoading()

  useEffect(() => {
    !character && !loading && dispatch(fetchCharacter(id))
  }, [ fetchCharacter, id, character ])

  if (error) {
    return <Error />
  }

  return !character || loading
    ? <Loading />
    : <Info {...character.data} />
}

Detail.propTypes = {
  fetchCharacter: PropTypes.func.isRequired,
  useDispatch: PropTypes.func.isRequired,
  getError: PropTypes.func.isRequired,
  getLoading: PropTypes.func.isRequired,
  getCharacter: PropTypes.func.isRequired,
}

Detail.defaultProps = {
  fetchCharacter,
  useDispatch,
  getError,
  getLoading,
  getCharacter,
}

export default Detail
