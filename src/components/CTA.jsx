import { ctaIlustration } from "../assets";

const CTA = () => {
  return (
    <section className="container mt-16 lg:mt-[100px]">
      <div className="flex box-rounded w-full lg:w-full mx-auto p-[50px] lg:py-0 bg-greyCostum">
        <div className="w-11/12 lg:w-[500px] flex flex-col justify-center gap-5 lg:gap-[26px] mx-auto">
          <h3 className="h3-mobile lg:he-desktop">
            Let&#39;s make things happen
          </h3>
          <p className="paragraph-mobile lg:paragraph-desktop">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="font-main bg-darkCostum w-full text-white py-3 rounded-lg lg:w-fit lg:self-start md:px-6">
            Get your free proposal
          </button>
        </div>
        <div className="hidden lg:inline-flex lg:justify-center lg:w-1/2">
          <img
            src={ctaIlustration}
            alt="ctaIlustration"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
