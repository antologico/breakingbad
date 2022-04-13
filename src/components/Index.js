import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {fetchCharacteres } from '../actions/character'
import Loading from './Loading'
import Error from './Error'
import { getCharacteres, getLoading, getError } from '../selectors'
import List from './List'
import PropTypes from 'prop-types'

const Index = ({
  fetchCharacteres,
  useDispatch,
  getError,
  getLoading,
  getCharacteres,
}) => {
  const error = getError()
  const loading = getLoading()
  const characteres = getCharacteres()
  const dispatch = useDispatch()

  useEffect(() => {
    !characteres && !loading && dispatch(fetchCharacteres())
  }, [ fetchCharacteres, characteres, loading ])
  
  if (error) {
    return <Error />
  }
  if (loading) {
    return <Loading />
  }

  return <List characteres={characteres} />
}


Index.propTypes = {
  fetchCharacteres: PropTypes.func.isRequired,
  useDispatch: PropTypes.func.isRequired,
  getError: PropTypes.func.isRequired,
  getLoading: PropTypes.func.isRequired,
  getCharacteres: PropTypes.func.isRequired,
}

Index.defaultProps = {
  fetchCharacteres,
  useDispatch,
  getError,
  getLoading,
  getCharacteres,
}

export default Index
