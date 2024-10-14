import { useEffect, useRef, useState } from "react";
import { caseStudies } from "../constants";

const CaseStudies = () => {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft); // Menghitung posisi awal mouse relatif terhadap elemen slider
    setScrollLeft(sliderRef.current.scrollLeft); // menyimpan posisi slider sebelum pergerakan mulai
  };

  const handleMouseMove = (e) => {
    if (!isDown) return; // jika false, berhenti
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft; // menghitung x
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk; // menggeser slider berdasarkan scrollLeft - walk
  };

  const handleMouseUpOrLeave = () => {
    setIsDown(false);
  };

  // Mobile event
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDown(true);
    const slider = sliderRef.current;
    setStartX(touch.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  // Mobile event
  const handleTouchMove = (e) => {
    if (!isDown) return;
    const touch = e.touches[0];
    const slider = sliderRef.current;
    const x = touch.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleResize = () => {
    setWidthWindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthWindow]);

  return (
    <section className="container mt-20 lg:mt-36" id="cases">
      <div className="text-center flex flex-col gap-[30px] lg:flex-row lg:inline-flex lg:text-left lg:gap-10">
        <div className="bg-greyBg w-max h-max py-2 px-2 rounded-xl mx-auto">
          <h2 className="h2-mobile lg:h2-desktop">Case Studies</h2>
        </div>
        <p className="lg:w-[540px] paragraph-mobile lg:paragraph-desktop">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies:
        </p>
      </div>

      {widthWindow < 768 ? (
        <div
          className="containerCase w-full flex gap-5 overflow-x-hidden snap-mandatory px-[20px] cursor-grab active:cursor-grabbing select-none transition-all duration-300 ease-in-out"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUpOrLeave}
        >
          {caseStudies.map((caseStudy) => (
            <div
              className="case w-11/12 mx-auto bg-[#191a23] rounded-[45px] flex flex-shrink-0 justify-between px-[50px] py-[42px] lg:w-full lg:px-[60px] lg:py-[70px] mt-20"
              key={caseStudy.id}
            >
              <div className="text-white min-w-full flex flex-col gap-5 lg:max-w-[300px]">
                <p className="paragraph-mobile lg:paragraph-desktop">
                  {caseStudy.body}
                </p>
                <a
                  href=""
                  className="text-greyBg flex items-center gap-2 w-max"
                >
                  Learn more
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-7 h-7"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full bg-darkCostum px-[60px] py-[70px] flex justify-between gap-5 mt-20 box-rounded">
          {caseStudies.map((caseStudy) => (
            <div
              className="text-white flex flex-col gap-5 max-w-[300px]"
              key={caseStudy.id}
            >
              <p className="paragraph-mobile lg:paragraph-desktop">
                {caseStudy.body}
              </p>
              <a href="" className="text-greyBg flex items-center gap-2">
                Learn more
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-7 h-7"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
