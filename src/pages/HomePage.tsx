import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ViewBill from "../components/Viewbill";
import CompanyNews from "../components/CompanyNews";
import AdMapPartners from "../components/AdMapPartners";
import FocalPersons from "../components/FocalPersons";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ViewBill />
      <CompanyNews />
      <AdMapPartners />
      <FocalPersons />
      <Footer />
    </div>
  );
}
