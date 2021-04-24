import Navbar from "./Navbar";
import Header from "./Header";
import Advantage from "./Advantage";
import Testimonies from "./Testimonies";
import Footer from "./Footer";
import "./landingPage.style.css";


function LandingPage() {
  return (
    <div className="Landing-page">
      <Navbar />
      <Header />
      <Advantage />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default LandingPage;