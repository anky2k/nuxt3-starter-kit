export function useLoadedFlag () {
  const loaded = useState('comp-loaded', () => false)
  const error = useState('comp-error', () => false)

  const setLoaded = () => loaded.value = !loaded.value

  const setError = () => {
    setLoaded()
    error.value = !error.value
  }
  
  return {
    loaded,
    setLoaded,
    error,
    setError
  }  
}

