export function useLoadedFlag (id) {
  const loaded = useState(`comp-loaded-${id}`, () => false)
  const error = useState(`comp-error-${id}`, () => false)

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

