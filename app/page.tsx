import {
  HomeHero,
  WhoWeAreSection,
  WhatWeDoSection,
  ClientLogos,
  EventsCarousel,
  Testimonials,
  FutureReadyCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <ClientLogos />
      <EventsCarousel />
      <Testimonials />
      <FutureReadyCTA />
    </>
  );
}
