import { useEffect, useState } from 'react'

const useScroll = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const bottom = window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false)
      return bottom
    })

    return () => {
      window.removeEventListener('scroll', bottom)
    }
  }, [showButton])

  return showButton
}

export default useScroll
