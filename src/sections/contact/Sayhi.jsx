const Sayhi = () => {
  return (
    <>
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
    </>
  );
};

export default Sayhi;
