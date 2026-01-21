import SectionFive from "./sectionfive";
import SectionFour from "./sectionfour";
import SectionOne from "./sectionone";
import SectionSix from "./sectionsix";
import SectionThree from "./sectionthree";
import SectionTwo from "./sectiontwo";

export default function DashboardPage() {
  return (
    <>
      <div className="xl:flex flex-row gap-4">
        <div className="flex flex-col">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
        <div className="flex-1 flex-col">
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </div>
      </div>
    </>
  );
}
