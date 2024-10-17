import { useEffect, useRef, useState } from 'react'
import { useIntersection as intersectionHook } from 'react-use'

export const useIntersection = (threshold = 1) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)
  
  const intersection = intersectionHook(ref, {
    root: null,
    rootMargin: '0px',
    threshold: threshold,
  })
  
  useEffect(() => {
    if (!intersection || !ref) return
    setIsIntersecting(intersection.isIntersecting)
  }, [intersection])
  
  return { ref, isIntersecting }
}
