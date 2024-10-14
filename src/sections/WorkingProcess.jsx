import { useState } from "react";
import { minusIcon, plusIcon } from "../assets";

import { workingProcess } from "../constants";

const WorkingProcess = () => {
  const [isActive, setisActive] = useState(null);

  const handleOpen = (index) => {
    setisActive((prevIndex) => (prevIndex === index ? null : index));
    // prevIndex = 1 === isActive 1
    // prevIndex = 1 === isActive null

    // prevIndex = 1 === isActive 1
    // prevIndex = 5 === isActive 5
  };

  const handleIndex = (index) => {
    return (index + 1).toString().padStart(2, "0"); // .padStart(2, "0"): Menambahkan angka 0 di depan string jika panjangnya kurang dari 2 karakter.
  };

  return (
    <section className="container mt-20 lg:mt-36">
      <div className="text-center flex flex-col gap-[30px] lg:flex-row lg:inline-flex lg:text-left lg:gap-10">
        <div className="bg-greyBg lg:w-max h-max py-2 px-2 rounded-xl mx-auto">
          <h2 className="h2-mobile lg:h2-desktop">Our Working Process</h2>
        </div>
        <p className="lg:w-[292px] paragraph-mobile lg:paragraph-desktop">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-[30px]">
        {workingProcess &&
          workingProcess.map((work, index) => (
            <div
              className="font-main box-rounded w-full border border-darkCostum shadow-boxService bg-greyCostum p-[30px] lg:px-[60px] cursor-pointer"
              key={work.id}
              onClick={() => handleOpen(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 lg:gap-8">
                  <p className="font-bold text-[30px] lg:text-[60px]">
                    {handleIndex(index)}
                  </p>
                  <h4 className="h4-mobile lg:h4-desktop">{work.title}</h4>
                </div>
                <button className="flex min-w-8 h-8 rounded-full border border-darkCostum items-center lg:w-14 lg:h-14">
                  <img
                    src={isActive === index ? minusIcon : plusIcon}
                    alt="icon"
                    className="size-3/4 mx-auto"
                  />
                </button>
              </div>
              {isActive === index && (
                <>
                  <div className="w-full border border-black mt-[30px]"></div>
                  <div className="w-full mt-[30px]">
                    <p>{work.body}</p>
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
