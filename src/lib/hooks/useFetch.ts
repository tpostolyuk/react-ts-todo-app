import { useEffect, useState } from 'react'

export function useFetch<T>(
  url: string
): {
  data: T | null
  hasError: boolean
  errorMessage: string | null
  loading: boolean
} {
  const [data, setData] = useState<T | null>(null)
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true)
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
        setLoading(false)
      } catch (error) {
        setHasError(true)
        setErrorMessage(error.message)
      }
    }
    fetchData()
  }, [url])
  return { data, loading, hasError, errorMessage }
}
