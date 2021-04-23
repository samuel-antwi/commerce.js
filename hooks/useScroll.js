import { useEffect, useState } from 'react';

const useScroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 1000 ? setShowButton(true) : setShowButton(false);
    });
  }, [showButton]);

  return showButton;
};

export default useScroll;
