import Container from "../Container";
import Tabs from "../Tabs";
import TitleText from "../TitleText";
import NewsGrid from "./NewsGrid";
import PharmacyHealthCare from "./PharmacyHealthCare";

const AllStories = () => {
  return (
    <div>
      <Container>
        <TitleText
          value="All our stories"
          className="mb-14 font-medium text-primary"
        />
        <Tabs />
        <div className="mb-36 mt-20">
          <NewsGrid />
        </div>
        <div>
          <PharmacyHealthCare />
        </div>
      </Container>
    </div>
  );
};
export default AllStories;
