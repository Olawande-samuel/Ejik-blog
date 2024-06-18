import Hero from "@/components/Hero";
import Main from "@/components/details/Main";
import More from "@/components/details/More";

const Details = () => {
  return (
    <section>
      <Hero />
      <div className="flex">
        <div className="lg:basis-[70%]">
          <Main />
        </div>
        <div className="hidden md:basis-[30%] lg:block">
          <More />
        </div>
      </div>
    </section>
  );
};
export default Details;
