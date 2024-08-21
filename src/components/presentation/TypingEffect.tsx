import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, delay = 100, loop = true }) => {
   const [displayText, setDisplayText] = useState("");
   const [index, setIndex] = useState(0);

   useEffect(() => {
      if (index < text.length) {
         const timer = setTimeout(() => {
            setDisplayText((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
         }, delay);
         return () => clearTimeout(timer);
      } else if (loop) {
         const timer = setTimeout(() => {
            setDisplayText("");
            setIndex(0);
         }, 2000);
         return () => clearTimeout(timer);
      }
   }, [index, text, delay, loop]);

   return <span>{displayText}</span>;
};

export default TypingEffect;
