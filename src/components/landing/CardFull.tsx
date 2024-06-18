import { Calendar, Clock3 } from "lucide-react";
import Image from "next/image";
import Text from "../Text";
import TextH2 from "../TextH2";
import { Card, CardContent, CardHeader } from "../ui/card";

const CardFull = ({
  image,
  showInfo,
}: {
  image: string;
  showInfo: boolean;
}) => {
  return (
    <Card className="flex h-full flex-col border-none shadow-none ">
      <CardHeader className="relative h-[500px] p-0">
        <Image src={image} alt={"title"} fill className="object-cover" />
      </CardHeader>
      <CardContent className="px-6 pt-8">
        <div className="mb-8 flex gap-[77px]">
          <span className="flex items-center gap-3 text-lg text-secondary">
            <Calendar size={24} color="#EC1C24" /> April 14, 2024
          </span>
          <span className="flex items-center gap-3 text-lg text-secondary">
            <Clock3 size={24} color="#EC1C24" /> April 14, 2024
          </span>
        </div>
        <TextH2
          value="Medication Safety and Error Prevention"
          className="mb-6 max-w-[90%] text-[33px] leading-10 tracking-normal text-primary "
        />
        {showInfo && (
          <>
            <Text
              className="mb-6 text-[#3A3C3E]"
              value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque. . Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque.Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
            />
            <p className="text-lg font-bold text-secondary">Joshua Jackson</p>
          </>
        )}
      </CardContent>
    </Card>
  );
};
export default CardFull;
