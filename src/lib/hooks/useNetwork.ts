import { useState, useEffect } from 'react'

export const useNetwork = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine)

  const updateNetwork = (): void => setIsOnline(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener('offline', updateNetwork)
    window.addEventListener('online', updateNetwork)

    return () => {
      window.removeEventListener('offline', updateNetwork)
      window.removeEventListener('online', updateNetwork)
    }
  }, [])

  return isOnline
}
