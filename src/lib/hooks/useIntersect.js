import { useState, useRef, useEffect } from 'react'

export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, setEntry] = useState(null)
  const [node, setNode] = useState(null)

  const observer = useRef(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(([entry]) =>
      setEntry(entry, {
        root,
        rootMargin,
        threshold,
      })
    )

    const { current: currentObserver } = observer

    if (node) currentObserver.observe(node.current)

    return () => currentObserver.disconnect()
  }, [node, root, rootMargin, threshold])

  return [setNode, entry]
}
