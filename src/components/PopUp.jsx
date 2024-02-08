import React, { useCallback, useEffect, useRef, useState } from 'react'


export default function PopUp({message, timeout=5000, dismiss=true}) {
  const [display, setDisplay] = useState(true);
  const bodyRef = useRef(null)
  
  // states
  const hiddenState = 'scale-0 right-[-100%]';
  const displayedState = `scale-1 right-[0]`;

  const startTimer = useCallback(
    () => {
      setTimeout(() => {
        setDisplay(false)
      }, timeout);
    },
    [timeout],
  )
  // timer effect
  useEffect(() => {
    startTimer()
  }, [startTimer]);

  useEffect(() => {
    if (dismiss) {
      const handleClick = (event) => {
        setDisplay(false);
      };
  
      document.body.addEventListener('click', handleClick);
  
      return () => {
        document.body.removeEventListener('click', handleClick);
      };
    }
  }, [dismiss]);

  return (
    <div ref={bodyRef} className={`flex fixed 
                                  ${display? displayedState: hiddenState} bottom-2
                                  w-1/4 p-2
                                  border-0 rounded-l-xl shadow-xl
                                  text-white bg-gradient-to-r from-rose-500 via-cherry-400 to-[#4B0F19]
                                  duration-500`}>
      <p className='first-letter:uppercase'>{message}</p>
    </div>
  )
}