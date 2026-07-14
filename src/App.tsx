// src/App.tsx
import HeroSection from './components/HeroSection';
// import QuickLinks from './components/QuickLinks';
import ViewBill from './components/Viewbill';
import CompanyNews from './components/CompanyNews';
import AdMapPartners from './components/AdMapPartners';
import FocalPersons from './components/FocalPersons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      {/* <QuickLinks /> */}
      <ViewBill />
      <CompanyNews />
      <AdMapPartners />
      <FocalPersons />
      <Footer/>
    </div>
  );
}

export default App;