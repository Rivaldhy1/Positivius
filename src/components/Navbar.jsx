import { icon } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center pt-8 px-5 lg:px-[100px] ">
      <a href="#home" className="flex gap-2 items-center">
        <img src={icon} alt="Positivius" />
        <p className="font-semibold text-2xl lg:text-3xl">Positivius</p>
      </a>

      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className={`block absolute right-4 lg:hidden ${
          isOpen ? "hamburger-active" : "hamburger-inactive"
        }`}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="hamburger-icon transition duration-300 ease-in-out origin-top-left"></span>
        <span className="hamburger-icon transition duration-300 ease-in-out"></span>
        <span className="hamburger-icon transition duration-300 ease-in-out origin-bottom-left"></span>
      </button>

      <nav
        className={`${
          isOpen
            ? "flex absolute right-16 top-14 w-2/4 min-h-fit justify-center items-center shadow-xl bg-white"
            : "hidden"
        } lg:block `}
      >
        <ul className="flex flex-col items-center gap-6 py-4 font-main lg:py-0 lg:flex-row lg:gap-5">
          {[
            ["About Us", "#about"],
            ["Services", "#services"],
            ["Use Cases", "#cases"],
            ["Pricing", "#pricing"],
            ["Blog", "#blog"],
          ].map(([title, url]) => (
            <li className="nav-link" key={url} onClick={() => setOpen(false)}>
              <a href={url}>{title}</a>
            </li>
          ))}
          <div className="border border-black px-6 py-3 my-2 rounded-xl lg:my-0">
            <button>Request a Quote</button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
