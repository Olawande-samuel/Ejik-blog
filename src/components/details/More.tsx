import TextH2 from "../TextH2";
import BiteSizeCard from "./BiteSizeCard";

const More = () => {
  return (
    <div>
      <div className="mt-[300px]">
        <TextH2
          value="Read More"
          className="mb-7 text-3xl font-medium text-primary underline"
        />
        <div className="space-y-6">
          <BiteSizeCard />
          <BiteSizeCard />
          <BiteSizeCard />
          <BiteSizeCard />
        </div>
      </div>
    </div>
  );
};
export default More;
