import { contactIlus } from "../assets";

const Contact = () => {
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
                  value="getqoute"
                  className="w-5 h-5"
                />
                Get a Qoute
              </label>
            </div>
          </div>

          <form className="font-main flex flex-col gap-5 px-7 mt-9 lg:px-0">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="input mt-2"
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input mt-2"
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={6}
                className="mt-2 block w-full rounded-xl border border-black p-4"
              ></textarea>
            </label>
            <input
              type="submit"
              value="Send Message"
              className="w-full text-white py-4 mt-8 bg-darkCostum rounded-xl"
            />
          </form>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:absolute lg:right-0">
          <img src={contactIlus} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
