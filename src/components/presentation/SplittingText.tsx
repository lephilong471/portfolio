"use client";
import { FONT_FAMILY } from "@/config";
import useIntersectionObserver from "@/config/hooks/useIntersectionObserver";
import React, { useEffect, useRef, forwardRef } from "react";
import Splitting from "splitting";
import styled from "styled-components";

const StyledSplittingWrapper = styled.div`
   .splitting .char {
      opacity: 0;
      transform: translateX(100px);
      transition: opacity 1s, transform 1s;
   }

   .splitting.animate .char {
      opacity: 1;
      transform: translateX(0);
      transition-delay: calc(60ms * var(--char-index));
   }
   .whitespace {
      width: 8px;
      height: 1px;
   }
`;

const SplittingText = forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, forwardedRef) => {
   // const innerRef = useRef<HTMLDivElement>(null);
   const targetRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (typeof forwardedRef === "function") {
         forwardedRef(targetRef.current);
      } else if (forwardedRef) {
         forwardedRef.current = targetRef.current;
      }
   }, [forwardedRef]);

   const isIntersecting = useIntersectionObserver(targetRef, { threshold: 0.1 });
   const hasAnimated = useRef(false);

   useEffect(() => {
      if (isIntersecting && !hasAnimated.current && targetRef.current) {
         const result = Splitting({ target: targetRef.current, by: "chars" });
         if (result.length > 0) {
            setTimeout(() => {
               targetRef.current?.classList.add("animate");
            }, 100);
            hasAnimated.current = true;
         }
      }
   }, [isIntersecting]);

   return (
      <StyledSplittingWrapper ref={targetRef} className="splitting" style={{ fontFamily: FONT_FAMILY.OUTFIT }}>
         {children}
      </StyledSplittingWrapper>
   );
});

SplittingText.displayName = "SplittingText";

export default SplittingText;
