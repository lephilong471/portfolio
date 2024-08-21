"use client";

import React from "react";
import ServiceContent from "@/components/Home/Content/ServiceContent";
import SliderContent from "@/components/Home/Content/SliderContent";
import AboutContent from "@/components/Home/Content/AboutContent";
import SliderCarousel from "@/components/Home/Content/SliderCarousel";
import ProjectContent from "@/components/Home/Content/ProjectContent";
import NewsContent from "@/components/Home/Content/NewsContent";
import StaffContent from "@/components/Home/Content/StaffContent";
import ContactContent from "@/components/Home/Content/ContactContent";
import SubFooter from "@/Layouts/SubFooter";

import BackgroundImage from "@/public/static/bg-image.jpg";
export default function Home() {
   return (
      <>
         <SliderContent />
         <ServiceContent />
         <AboutContent />
         <SliderCarousel />
         <ProjectContent />
         <NewsContent />
         <StaffContent />
         <ContactContent bgImage={BackgroundImage} />
         <SubFooter />
      </>
   );
}
