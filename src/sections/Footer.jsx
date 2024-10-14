const Footer = () => {
  return (
    <footer className="lg:mx-[100px] mt-[90px] lg:mt-[140px]">
      <div className="w-full bg-darkCostum pt-[50px] pb-[30px] lg:rounded-t-[45px] lg:pt-[55px] lg:pb-[50px] lg:px-[60px]">
        <header className="font-main flex flex-col items-center lg:flex-row lg:justify-between">
          {/* Logo */}
          <a href="#home" className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8063 3.63037L23.3513 0.229004L19.9826 11.8067L23.3513 23.3518L11.8063 19.9831L0.228516 23.3518L3.62989 11.8067L0.228516 0.229004L11.8063 3.63037Z"
                fill="white"
              />
            </svg>

            <p className="text-white font-semibold text-2xl lg:text-3xl">
              Positivius
            </p>
          </a>

          <ul className="flex flex-col items-center gap-[15px] pt-9 font-main lg:py-0 lg:flex-row lg:gap-5">
            {[
              ["About Us", "#about"],
              ["Services", "#services"],
              ["Use Cases", "#cases"],
              ["Pricing", "#pricing"],
              ["Blog", "#blog"],
            ].map(([title, url]) => (
              <a key={url} href={url} className="text-white lg:underline">
                {title}
              </a>
            ))}
          </ul>

          <div className="social-media flex items-center space-x-5 pt-[37px]">
            {/* LinkedIn */}
            <svg
              fill="#FFFFFF"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-143 145 512 512"
            >
              <path
                d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
	V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
	C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
	c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
	"
              />
            </svg>

            {/* Facebook */}
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                fill="#FFFFFF"
              />
            </svg>

            {/* Twitter */}
            <svg
              fill="#FFFFFF"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-143 145 512 512"
            >
              <path
                d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
	c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"
              />
            </svg>
          </div>
        </header>

        <div className="font-main flex flex-col items-center mb-[37px] lg:my-[37px] lg:flex-row lg:justify-between">
          <div className="flex flex-col space-y-4 text-white mt-[37px] max-w-[300px] text-center lg:mt-0 lg:text-left lg:w-1/2 lg:justify-between">
            <div className="bg-greyBg w-fit mx-auto px-2 rounded-lg lg:mx-0">
              <h4 className="relative w-fit h4-mobile lg:h4-desktop text-black">
                Contact Us:
              </h4>
            </div>

            <p>Email: info@positivius.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>

          <form
            action=""
            className="w-11/12 p-[30px] my-[37px] mx-auto bg-[#292A32] rounded-2xl flex flex-col gap-5 lg:my-0 lg:w-1/2 lg:flex-row lg:justify-center lg:mx-0"
          >
            <input
              type="email"
              placeholder="Email"
              className="text-white p-5 rounded-2xl bg-transparent border border-white lg:h-auto"
            />
            <input
              type="submit"
              value="Subscribe to news"
              className="p-5 rounded-2xl bg-greyBg lg:w-full lg:h-auto"
            />
          </form>
        </div>

        <div className="w-11/12 mx-auto h-[1px] border border-white my-[37px] lg:w-full"></div>

        <div className="font-main flex flex-col">
          <div className="flex flex-col items-center text-white gap-[15px] lg:gap-0 lg:flex-row lg:space-x-10">
            <p className="paragraph-mobile lg:paragraph-desktop">
              @ 2023 Positivius. All Rights Reserved.
            </p>
            <p className="paragraph-mobile lg:paragraph-desktop underline">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
