import { Calendar, Clock3 } from "lucide-react";
import Container from "../Container";
import { Badge } from "../ui/badge";
import TextH2 from "../TextH2";
import Text from "../Text";
import Image from "next/image";

const Main = () => {
  return (
    <div className="mt-12">
      <Container>
        <div>
          <div className="mb-8 flex gap-[77px] text-secondary">
            <span className="flex items-center gap-3 text-xs">
              <Clock3 size={16} color="#009BDB" /> 2 mins read
            </span>
            <span className="flex items-center gap-3 text-xs">
              <Calendar size={16} color="#009BDB" /> April 14, 2024
            </span>
          </div>
          <div className="mb-8 flex gap-4">
            <Badge className="h-6 bg-[#E8EAEB] text-accent-blue">
              Pharmaceutical
            </Badge>
            <Badge className="h-6 bg-[#E8EAEB] text-accent-blue">
              Health Care
            </Badge>
          </div>
          <div className="mb-6">
            <TextH2
              value="Medication Safety and Error Prevention"
              className="text-5xl font-semibold text-secondary-dark"
            />
          </div>
          <div>
            <Text
              className="mb-6 text-secondary"
              value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque. . Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque.Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
            />
            <Text
              className="text-secondary"
              value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque. . Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque.Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
            />
            <div className="my-16">
              <Image
                src="/images/detail_cart.webp"
                width={500}
                height={400}
                className="w-full"
                alt="decorative"
              />
            </div>
          </div>
          <div className="mb-6">
            <TextH2
              value="Medication Safety and Error Prevention"
              className="text-5xl font-semibold text-secondary-dark"
            />
          </div>
          <div>
            <Text
              className="mb-6 text-secondary"
              value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque. . Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque.Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
            />
            <Text
              className="text-secondary"
              value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque. . Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque.Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
            />
          </div>
          <div className="mb-6 mt-20">
            <TextH2
              value="Medication Safety and Error Prevention"
              className="text-5xl font-semibold text-secondary-dark"
            />
          </div>
          <div>
            <Text
              className="mb-6 text-secondary"
              value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque. . Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque.Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
            />
            <Text
              className="mb-6 text-secondary"
              value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque. . Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque.Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Main;
