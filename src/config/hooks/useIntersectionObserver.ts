import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (ref, options = {}) => {
   const [isIntersecting, setIsIntersecting] = useState(false);
   const hasIntersected = useRef(false);

   useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting && !hasIntersected.current) {
            setIsIntersecting(true);
            hasIntersected.current = true;
         }
      }, options);

      observer.observe(ref.current);

      return () => {
         if (ref.current) {
            observer.unobserve(ref.current);
         }
      };
   }, [ref, options]);

   return isIntersecting;
};

export default useIntersectionObserver;
