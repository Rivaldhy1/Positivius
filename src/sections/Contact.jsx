import { useState } from "react";
import { contactIlus } from "../assets";
import Sayhi from "./contact/Sayhi";
import ComingSoon from "./contact/ComingSoon";
import { useRef } from "react";
import { useEffect } from "react";

const Contact = () => {
  const [radio, setRadio] = useState("");
  const sayHiRef = useRef(null);
  const getQoute = useRef(null);

  const handleRadio = () => {
    if (sayHiRef.current.checked) {
      setRadio(sayHiRef.current.value);
    }
    if (getQoute.current.checked) {
      setRadio(getQoute.current.value);
    }
  };

  useEffect(() => {
    sayHiRef.current.checked = true;
    setRadio(sayHiRef.current.value);
  }, []);

  return (
    <section className="container mt-20 lg:mt-36">
      <div className="text-center flex flex-col gap-[30px] lg:flex-row lg:inline-flex lg:text-left lg:gap-10">
        <div className="bg-greyBg w-max h-max py-2 px-2 rounded-xl mx-auto">
          <h2 className="h2-mobile lg:h2-desktop">Contact Us</h2>
        </div>
        <p className="lg:max-w-[350px] paragraph-mobile lg:paragraph-desktop">
          Connect with Us: Let&#39;s Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="relative overflow-hidden w-full py-10 mt-10 bg-greyCostum box-rounded lg:mt-20 lg:py-0 lg:flex lg:items-center">
        <div className="lg:w-3/5 lg:pl-[100px] lg:pt-[60px] lg:pb-20">
          {/* Radio Button */}
          <div className="font-main flex items-center justify-evenly lg:justify-start lg:space-x-10">
            <div className="flex items-center">
              <label htmlFor="sayhi" className="flex items-center gap-3">
                <input
                  type="radio"
                  name="choice"
                  id="sayhi"
                  value="sayHi"
                  className="w-5 h-5"
                  ref={sayHiRef}
                  onChange={handleRadio}
                />
                Say Hi
              </label>
            </div>

            <div className="flex items-center">
              <label htmlFor="getqoute" className="flex items-center gap-3">
                <input
                  type="radio"
                  name="choice"
                  id="getqoute"
                  value="getQoute"
                  className="w-5 h-5"
                  ref={getQoute}
                  onChange={handleRadio}
                />
                Get a Qoute
              </label>
            </div>
          </div>

          {/* Content */}
          {radio === "sayHi" && <Sayhi />}
          {radio === "getQoute" && <ComingSoon />}
        </div>
        {radio === "sayHi" && (
          <div className="hidden lg:block lg:w-1/2 lg:absolute lg:right-0">
            <img src={contactIlus} alt="" className="w-full" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
