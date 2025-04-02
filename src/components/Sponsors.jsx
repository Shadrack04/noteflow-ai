import netflix from "/images/netflix-logo.png";
import microsoft from "/images/microsoft-logo.png";
import vice from "/images/vice-logo.png";
import walmart from "/images/walmart-logo.png";
import visa from "/images/visa-logo.png";
import chase from "/images/chase-logo.png";
import amazon from "/images/amazon-logo.png";
import exxonMobil from "/images/exxonMobile-logo.png";

function Sponsors() {
  return (
    <section className=" custom-padding bg-primary-1300 py-24 w-full">
      <p className=" text-secondary-text text-center mb-18">
        Organizations powered by <span>NoteFlow</span>
      </p>
      <div className=" grid grid-cols-4 place-items-center md:gap-x-28 gap-y-8 w-full">
        <img src={netflix} alt="netflix}  logo" className=" w-" />
        <img src={exxonMobil} alt="exxonMobile logo" className=" " />
        <img src={microsoft} alt="microsoft} logo" className="" />
        <img src={vice} alt="vice logo" className="" />
        <img src={walmart} alt="walmart logo" className="" />
        <img src={chase} alt="chase logo" className="" />
        <img src={visa} alt="visa logo" className="" />
        <img src={amazon} alt="amazon logo" className="" />
      </div>
    </section>
  );
}

export default Sponsors;
