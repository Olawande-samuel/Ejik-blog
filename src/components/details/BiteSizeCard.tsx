import { Calendar, Clock3 } from "lucide-react";
import Image from "next/image";
import Text from "../Text";

const BiteSizeCard = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Image
          src="/images/medication-scrubs.png"
          width={116}
          height={113}
          alt="decorative"
        />
      </div>
      <div>
        <div className="flex gap-2  text-white">
          <span className="flex items-center gap-3 text-xs text-primary">
            <Clock3 size={12} color="#009BDB" /> 2 mins read
          </span>
          <span className="flex items-center gap-3 text-xs text-primary">
            <Calendar size={12} color="#009BDB" /> April 14, 2024
          </span>
        </div>
        <Text
          value="Medication Safety and Error Prevention"
          className="text-xl font-semibold text-primary"
        />
      </div>
    </div>
  );
};
export default BiteSizeCard;
