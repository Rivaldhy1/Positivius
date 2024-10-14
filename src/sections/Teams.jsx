import { useState } from "react";
import { linkedIn } from "../assets";
import { teams } from "../constants";

const Teams = () => {
  const [content, setContent] = useState(6);

  const handleContent = () => {
    setContent(teams.length);
    if (content === teams.length) {
      setContent(6);
    }
  };

  return (
    <section className="container mt-20 lg:mt-36">
      <div className="text-center flex flex-col gap-[30px] lg:flex-row lg:inline-flex lg:text-left lg:gap-10">
        <div className="bg-greyBg w-max h-max py-2 px-2 rounded-xl mx-auto">
          <h2 className="h2-mobile lg:h2-desktop">Team</h2>
        </div>
        <p className="lg:max-w-[500px] paragraph-mobile lg:paragraph-desktop">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {teams &&
            teams.slice(0, content).map((team) => (
              <div
                className="box-rounded border border-darkCostum shadow-boxService px-[35px] py-[40px] w-full"
                key={team.id}
              >
                {/* Profile */}
                <div className="flex items-end justify-between md:gap-5">
                  {/* profile */}
                  <div className="relative">
                    {/* Back */}
                    <svg
                      width="99"
                      height="98"
                      viewBox="0 0 99 98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 mt-1 z-0"
                    >
                      <path
                        d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z"
                        fill="#231F20"
                      />
                    </svg>

                    {/* Img / Front */}
                    <svg
                      width="99"
                      height="98"
                      viewBox="0 0 99 98"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 z-10"
                    >
                      <defs>
                        <pattern
                          id="imgPattern"
                          patternUnits="userSpaceOnUse"
                          width="99"
                          height="98"
                        >
                          <image
                            href={team.img}
                            width="99"
                            height="98"
                            preserveAspectRatio="xMidYMid slice" // Biar image nya selalu center
                          />
                        </pattern>
                      </defs>

                      <path
                        d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z"
                        fill="url(#imgPattern)"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <h4 className="h4-mobile lg:h4-desktop">{team.name}</h4>
                    <p className="paragraph-mobile lg:paragraph-desktop">
                      {team.role}
                    </p>
                  </div>
                  <a
                    href={team.urlLinkedIn}
                    className="self-start"
                    target="_blank"
                  >
                    <img src={linkedIn} alt="" className="size-8" />
                  </a>
                </div>
                <div className="w-full h-[1px] bg-darkCostum my-7"></div>
                <p>{team.about}</p>
              </div>
            ))}

          {/* Todo -> kalau di klik, nampilin semua tim */}
          <button
            className="font-main bg-darkCostum w-full text-white py-3 rounded-lg md:px-14 lg:w-fit lg:col-span-2"
            onClick={() => handleContent()}
          >
            {content === teams.length ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teams;
