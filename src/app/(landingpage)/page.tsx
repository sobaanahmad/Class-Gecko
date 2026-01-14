import Footer from "@/components/ui/common/footer";
import Header from "@/components/ui/common/header";
import SectionOne from "@/components/ui/landing-page/section1";
import SectionTwo from "@/components/ui/landing-page/section2";
import SectionThree from "@/components/ui/landing-page/section3";
import SectionFour from "@/components/ui/landing-page/section4";
import SectionFive from "@/components/ui/landing-page/section5";
import SectionSix from "@/components/ui/landing-page/section6";
import SectionSeven from "@/components/ui/landing-page/section7";

export default function LandingPage() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  );
}
