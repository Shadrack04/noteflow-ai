import StarRating from "./StarRating";

function TestimonialItem({ testimonial, index, showLess }) {
  if (showLess && index > 5) return;
  const { rating, message, name, position, avatar } = testimonial;
  return (
    <div className=" max-w-[21rem] bg-primary-1300 px-6 py-8 rounded-2xl row-span-2 min-h-fit">
      <StarRating rating={rating} />
      <p className=" text-secondary-text text-md leading-8 mb-14">{message}</p>
      <div className=" flex items-center gap-4">
        <img src={avatar} alt="" className=" size-12" />
        <div className=" flex flex-col gap-1">
          <p className=" text-special-text font-bold">{name}</p>
          <p className="text-secondary-text text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
