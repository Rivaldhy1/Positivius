import { services } from "../constants";

const Services = () => {
  return (
    <section className="container mt-20 lg:mt-36" id="services">
      <div className="text-center flex flex-col gap-[30px] lg:flex-row lg:inline-flex lg:text-left lg:gap-10">
        <div className="bg-greyBg h-fit w-fit py-1 px-2 rounded-xl mx-auto">
          <h2 className="h2-mobile lg:h2-desktop">Services</h2>
        </div>
        <p className="lg:w-[540px] paragraph-mobile lg:paragraph-desktop">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="flex flex-wrap justify-center 2xl:justify-between mt-10 gap-10">
        {services.map((service) => (
          <div
            className={`bg-${service.theme} font-main shadow-boxService w-full p-[25px] md:px-[50px] lg:py-0 lg:w-[600px] lg:h-[310px] border border-darkCostum box-rounded flex md:justify-around lg:flex-row lg:items-center`}
            key={service.id}
          >
            <div className="z-[5] flex flex-col justify-center gap-14 :gap-28">
              <h3 className={`h3-mobile lg:h3-desktop`}>
                <span
                  className={`block bg-${service.bgText} rounded-lg  px-2`}
                  style={{ width: "max-content" }}
                >
                  {service.title}
                </span>
                <span
                  className={`bg-${service.bgText} rounded-lg  px-2`}
                  style={{ width: "max-content" }}
                >
                  {service.field}
                </span>
              </h3>
              {/* Button Link */}
              <div className="flex items-center gap-3" id="arrowButton">
                <a
                  href=""
                  className={`w-10 h-10 rounded-full ${
                    service.theme === "darkCostum" ? "bg-white" : "bg-black"
                  } flex justify-center items-center`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4/5 rotate-[45deg] hover:rotate-0 transition-all ease"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke={`${
                        service.theme === "darkCostum" ? "#000000" : "#B9FF66"
                      }`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href=""
                  className={`hidden lg:inline-block ${
                    service.theme === "darkCostum" ? "text-white" : "text-black"
                  }`}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center w-full z-[3] max-w-[300px] lg:mx-auto">
              <img
                src={service.ilustration}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
