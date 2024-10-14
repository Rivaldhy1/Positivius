import { useEffect, useState } from "react";
import { HomeIlustration } from "../assets";

const Hero = () => {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  const handleResize = () => {
    setWidthWindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    const container = document.getElementById("container");
    const textWrap = document.getElementById("textWrap");
    const imageWrap = document.getElementById("imageWrap");
    const h1 = textWrap.childNodes[0];

    if (widthWindow < 1024) {
      h1.appendChild(imageWrap);
    } else {
      container.appendChild(imageWrap);
    }

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthWindow]);

  return (
    <section className="container mt-14 lg:mt-[50px]">
      <div
        className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:items-center lg:justify-center lg:px-0"
        id="container"
      >
        {/* Text  */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-normal lg:items-start">
          <div className="lg:max-w-[530px] space-y-[35px]" id="textWrap">
            <h1 className="h1-mobile leading-tight lg:leading-snug lg:h1-desktop">
              Navigating the digital landscape for success
            </h1>
            <p className="paragraph-mobile text-center lg:text-left lg:paragraph-desktop">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="font-main bg-darkCostum w-full text-white py-3 rounded-lg lg:w-fit lg:self-start md:px-6">
              Book a consultation
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2" id="imageWrap">
          <div className="flex items-center justify-center max-w-[400px] lg:max-w-[600px] mx-auto">
            <img
              src={HomeIlustration}
              alt="ilustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
