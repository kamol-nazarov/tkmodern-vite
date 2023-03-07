import { useEffect } from "react";

export default function NavigationBar(props) {
  useEffect(() => {}, [props]);

  return (
    <div className="grid grid-flow-row auto-rows-max w-screen">
      <div className="bg-red flex flex-row pl-48 py-2">
        <div
          className="flex flex-row transition ease-in-out hover:scale-110"
          onClick={(e) => {
            location.href = "tel:7182661703";
          }}
        >
          <img className="h-6" src="/icons/phone-call.svg" alt="phone" />
          <p className="pl-2">(718)-266-1703</p>
        </div>
        <div
          className="flex flex-row pl-3"
          onClick={(e) => {
            location.href = "mailto:nazarovtimur54@gmail.com";
          }}
        >
          <img className="h-6" src="/icons/email.svg" alt="email" />
          <p className="pl-2">NazarovTimur54@Gmail.com</p>
        </div>
      </div>
      <div className="bg-white flex flex-row text-red pl-48 gap-x-6 py-2 drop-shadow-2xl">
        <img
          src="/images/tkmodern_logo.svg"
          alt="company-logo"
          className="h-24 pr-4 my-5"
        />
        <div className="flex flex-row w-7/12 ml-12 gap-x-5 pl-24 ">
          <button className="flex-wrap w-40 transition-all ease-in-out rounded-xl content-center hover:grow-[.5] hover:bg-midnight hover:font-semibold p-3 px-5 text-lg hover:text-xl subpixel-antialiased">
            About Our Services
          </button>
          <button className="flex-wrap w-40 transition-all ease-in-out rounded-xl content-center hover:grow-[.5] hover:bg-midnight hover:font-semibold p-3 px-5 text-lg hover:text-xl subpixel-antialiased">
            Services We Offer
          </button>
          <button className="flex-wrap w-40 transition-all ease-in-out rounded-xl content-center hover:grow-[.5] hover:bg-midnight hover:font-semibold p-3 px-5 text-lg hover:text-xl subpixel-antialiased">
            Contact Us
          </button>
        </div>
        <button className=" flex-wrap transition-all ease-in-out rounded-xl content-center hover:grow-[.4] hover:bg-midnight hover:font-semibold p-3 px-5 text-lg hover:text-xl subpixel-antialiased">
          Make An Appointment
        </button>
      </div>
    </div>
  );
}
