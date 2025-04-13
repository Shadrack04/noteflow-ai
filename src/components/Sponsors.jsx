import netflix from "/images/netflix-logo.png";
import microsoft from "/images/microsoft-logo.png";
import vice from "/images/vice-logo.png";
import walmart from "/images/walmart-logo.png";
import visa from "/images/visa-logo.png";
import chase from "/images/chase-logo.png";
import amazon from "/images/amazon-logo.png";
import exxonMobil from "/images/exxonMobile-logo.png";
import adidas from "/images/adidas-logo.png";
import cocacola from "/images/cocacola-logo.png";
import nike from "/images/nike-logo.png";
import google from "/images/google-logo.png";

function Sponsors() {
  return (
    <section className=" custom-padding bg-linear-to-b from-primary-1300 to-primary-1500 py-12 md:py-24 w-full">
      <p className=" text-secondary-text text-center mb-18">
        Organizations powered by <span>NoteFlow</span>
      </p>
      <div className=" grid grid-cols-2 md:grid-cols-4 place-items-center place-content-between gap-x-12 md:gap-x-28 gap-y-12 md:gap-y-8 w-full">
        <img
          src={netflix}
          alt="netflix logo"
          className=" w-28 md:w-auto h-12 md:h-auto"
        />
        <img
          src={nike}
          alt="netflix logo"
          className="flex md:hidden w-24 h-14"
        />
        <img
          src={cocacola}
          alt="netflix logo"
          className="flex md:hidden w-28 md:w-auto h-12 md:h-auto"
        />
        <img
          src={adidas}
          alt="netflix logo"
          className="flex md:hidden w-24 h-14"
        />
        <img
          src={exxonMobil}
          alt="exxonMobile logo"
          className="hidden md:flex w-28 md:w-auto h-12 md:h-auto "
        />
        <img
          src={microsoft}
          alt="microsoft} logo"
          className="w-28 md:w-auto h-12 md:h-auto"
        />
        <img
          src={vice}
          alt="vice logo"
          className="w-28 md:w-auto h-12 md:h-auto"
        />
        <img
          src={walmart}
          alt="walmart logo"
          className="hidden md:flex w-28 md:w-auto h-12 md:h-auto"
        />
        <img
          src={chase}
          alt="chase logo"
          className="w-28 md:w-auto h-12 md:h-auto"
        />
        <img
          src={visa}
          alt="visa logo"
          className="w-28 md:w-auto h-12 md:h-auto"
        />
        <img
          src={google}
          alt="amazon logo"
          className="flex md:hidden w-28 md:w-auto h-12 md:h-auto"
        />
        <img
          src={amazon}
          alt="amazon logo"
          className="w-28 md:w-auto h-12 md:h-auto"
        />
      </div>
    </section>
  );
}

export default Sponsors;
