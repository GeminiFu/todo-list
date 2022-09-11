import React, { useState } from 'react'

const useSetObj = (initObj) => {
  const [state, setState] = useState(initObj)

  function setObj(key, value, secondKey) {

    if (secondKey) {
      state[key][secondKey] = value
    } else {
      state[key] = value
    }
    setState({ ...state })
  }
  return (
    [state, setObj]
  )
}

export default useSetObj