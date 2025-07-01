import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      tl.from("#part-1", { x: -300, y: -300, opacity: 0 })
        .from("#part-2", { x: 300, y: -300, opacity: 0 }, "<")
        .from("#part-3", { x: -300, y: 300, opacity: 0 }, "<")
        .from("#part-4", { x: 300, y: 300, opacity: 0 }, "<");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen flex justify-center items-center"
    >
      {/* <Image
        ref={imageRef}
        src="/images/hero-section-logo.webp"
        alt="hero-section-logo"
        className="w-32 h-32"
        width={1000}
        height={1000}
      /> */}
      <svg
        width="128"
        height="128"
        viewBox="0 0 1882 1881"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="part-1"
          d="M1501.33 376.641V2.59508V1H750.767L1 751.483V1880H1129.64L1881 1130.31V752.281H751.564V1129.52H1502.93V1504.36H379.074V378.236H380.669L1501.33 376.641Z"
          fill="#D9D9D9"
        />
        <path
          id="part-2"
          d="M1501.33 376.641V2.59508V1H750.767L1 751.483V1880H1129.64L1881 1130.31V752.281H751.564V1129.52H1502.93V1504.36H379.074V378.236H380.669L1501.33 376.641Z"
          fill="white"
        />
        <path
          id="part-3"
          d="M1501.33 376.641V2.59508V1H750.767L1 751.483V1880H1129.64L1881 1130.31V752.281H751.564V1129.52H1502.93V1504.36H379.074V378.236H380.669L1501.33 376.641Z"
          stroke="white"
        />
      </svg>
    </section>
  );
};

export default HeroSection;
