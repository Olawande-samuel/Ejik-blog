import TextH2 from "../TextH2";
import CardWithOverlay from "./Card";
import CardFull from "./CardFull";

const PharmacyHealthCare = () => {
  return (
    <section>
      <div className="mb-10">
        <TextH2 value="Pharmacy & Health Care" className="text-primary" />
      </div>
      <div className="flex flex-col gap-9 lg:flex-row">
        <section className="lg:basis-[65%]">
          <div className="grid gap-9 md:grid-cols-2">
            <div className="md:col-span-2">
              <CardFull image="/images/medication.png" showInfo={false} />
            </div>
            <div className=" h-[420px]">
              <CardWithOverlay image="/images/medication-scrubs.png" />
            </div>
            <div className="h-[420px] ">
              <CardWithOverlay image="/images/medication-fruit.png" />
            </div>
            <div className=" h-[420px]">
              <CardWithOverlay image="/images/medication-pill2.png" />
            </div>
            <div className="h-[420px]">
              <CardWithOverlay image="/images/medication-bag.png" />
            </div>
          </div>
        </section>
        <aside className="lg:basis-[35%]">
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-1">
            <div className="h-[460px] max-w-[460px]">
              <CardWithOverlay image="/images/medication-pills.png" />
            </div>
            <div className="h-[460px] max-w-[460px]">
              <CardWithOverlay image="/images/medication-stand.png" />
            </div>
            <div className="h-[460px] max-w-[460px]">
              <CardWithOverlay image="/images/medication-tube.png" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
export default PharmacyHealthCare;
