import React, { useEffect } from 'react'

const useWatchState = (name, state) => {
  return useEffect(() => {
    console.log(`${name}新值是`)
    console.log(state)

    return () => {
      console.log(`${name}舊值是`)
      console.log(state)
    }
  }, [state])
}

export default useWatchState