import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import DoctorHero from "./components/DoctorHero";
import DoctorBiography from "./components/DoctorBiography";
import RelatedArticles from "./components/RelatedArticles";
import InClinicFacilities from "./components/InClinicFacilities";

import Specialties from "./pages/Specialties";
import Doctors from "./pages/Doctors";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import DoctorProfile from "./pages/DoctorProfile";

import BMICalculator from "./pages/BMICalculator";
import DailyCalorieCalculator from "./pages/DailyCalorieCalculator";
import IdealBodyWeightCalculator from "./pages/IdealBodyWeightCalculator";
import WeightLossJourney from "./pages/WeightLossJourney";

function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const sectionId = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer;

    const findAndScroll = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      attempts += 1;

      if (attempts < 30) {
        timer = setTimeout(findAndScroll, 100);
      }
    };

    timer = setTimeout(findAndScroll, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <div className="h-[104px]" />

      <DoctorHero />

      <div id="services" className="scroll-mt-28">
        <DoctorBiography />
      </div>

      <div className="scroll-mt-28">
        <InClinicFacilities />
      </div>

      <div id="blog" className="scroll-mt-28">
        <RelatedArticles />
      </div>

      <div id="faqs" className="scroll-mt-28">
        <FAQs />
      </div>
    </>
  );
}

function DoctorDetails() {
  return (
    <>
      <div className="h-[104px]" />

      <DoctorHero />

      <DoctorBiography />

      <InClinicFacilities />

      <RelatedArticles />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/specialties" element={<Specialties />} />

          <Route
            path="/doctor-details/dr-junaid-murtaza/en"
            element={<DoctorDetails />}
          />

          <Route path="/doctor-profile" element={<DoctorProfile />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/:slug" element={<BlogArticle />} />

          <Route path="/faqs" element={<FAQs />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route
            path="/health-tools/bmi-calculator"
            element={<BMICalculator />}
          />

          <Route
            path="/health-tools/daily-calorie-calculator"
            element={<DailyCalorieCalculator />}
          />

          <Route
            path="/health-tools/ideal-body-weight-calculator"
            element={<IdealBodyWeightCalculator />}
          />

          <Route
            path="/health-tools/weight-loss-journey"
            element={<WeightLossJourney />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;