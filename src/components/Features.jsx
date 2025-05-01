import idTopics from "/images/id-topics.png";
import reminders from "/images/reminders.png";
function Features() {
  return (
    <section className=" custom-padding border border-amber-500 bg-primary-1500 py-20">
      <p className=" text-primary-text text-[1.8rem] md:text-5xl font-bold text-center py-20">
        All The Tools You Need to <br className="hidden lg:flex" />
        <span className=" text-special-text">Supercharge</span> Your Note Taking
      </p>
      <div className=" flex flex-col gap-4 md:gap-8 ">
        <div className=" flex flex-col-reverse lg:flex-row items-center justify-center gap-20 my-8 md:my-2">
          <img
            src={idTopics}
            alt="identifying topics"
            className=" md:max-w-[34rem] md:h-[38rem]"
          />
          <div>
            <h2 className=" text-primary-text text-[1.6rem] md:text-4xl font-extrabold my-2 md:my-8 ">
              Smart Organization
            </h2>
            <p className=" text-secondary-text text-[0.9rem] md:text-lg leading-8 md:leading-10">
              Automatically categorize and tag your notes using AI-driven
              analysis. NoteFlow intelligently identifies key topics and
              organizes your content, making it easy to find and retrieve your
              notes when you need them most.
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row items-center justify-center gap-28">
          <div>
            <h2 className=" text-primary-text text-[1.6rem] md:text-4xl font-extrabold my-2 md:my-8 ">
              Contextual Reminders
            </h2>
            <p className=" text-secondary-text text-[0.9rem] md:text-lg leading-8 md:leading-10">
              Stay on top of important tasks with AI-powered reminders that
              adapt to the context of your notes. NoteFlow recognizes deadlines,
              follow-ups, and key actions from your notes and sends timely
              alerts to ensure nothing slips through the cracks.
            </p>
          </div>
          <img
            src={reminders}
            alt="Extracting reminders"
            className=" md:max-w-[34rem] md:h-[38rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
