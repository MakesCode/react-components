import { useState, useEffect } from "react";

export default function useDimension() {
  const [dimension, setDimension] = useState(window.innerWidth);

  useEffect(() => {
    const resizeFunc = () => {
      setDimension(window.innerWidth);
    }
    window.addEventListener('resize', resizeFunc);
    return () => {
      window.removeEventListener('resize', resizeFunc);
    }
  }, [])

  return dimension
}