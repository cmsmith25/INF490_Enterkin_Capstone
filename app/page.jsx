import HeroSection from "../components/HeroSection";
import AboutUs from "../components/Message";
import InfoGrid from "../components/InfoGrid";
import ScriptureCarousel from "../components/ScriptureCarousel";

export default function Home() {
    return (
    <>

        <HeroSection />

        <div className="container">

            <ScriptureCarousel />
            
            <AboutUs />
            <InfoGrid />
            
            
        </div>
        </>
    );
}