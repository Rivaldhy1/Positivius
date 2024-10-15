import { useEffect, useRef, useState } from "react";
import { amazon, hubspot, netflix, notion, zoom, dribble } from "../assets";

const images = [amazon, hubspot, netflix, notion, zoom, dribble];

const Companies = () => {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const containerRef = useRef(null);
  const copyItemsRef = useRef([]);

  const handleResize = () => {
    setWidthWindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Add / Remove(lebih ke hidden / block div nya) items copyan
    copyItemsRef.current.forEach((copy) => {
      if (widthWindow >= 1024) {
        copy.classList.add("hidden");
      } else {
        copy.classList.remove("hidden");
      }
    });

    // Add / Remove animation slideLoop
    if (containerRef.current) {
      if (widthWindow < 1024) {
        containerRef.current.classList.add("animate-slideLoop");
      } else {
        containerRef.current.classList.remove("animate-slideLoop");
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthWindow]);

  return (
    <section className="container mt-14 ">
      <div className="relative w-full overflow-x-hidden" id="horizontal-scroll">
        <div
          className="flex justify-between space-x-10 w-fit lg:w-full transition duration-300 animate-slideLoop"
          id="containerCompanies"
          ref={containerRef}
        >
          {images.map((image, index) => (
            <div
              className="filter grayscale hover:grayscale-0 w-[140px]"
              key={index}
            >
              <img src={image} alt={image} className="w-full h-full" />
            </div>
          ))}

          {/* Salin elemen agar loop smooth operator */}
          {images.map((image, index) => (
            <div
              className="filter grayscale hover:grayscale-0 w-[140px]"
              key={index + images.length}
              ref={(el) => (copyItemsRef.current[index] = el)}
            >
              <img src={image} alt={image} className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
