import HeroSection from "../components/HeroSection";
import AboutUs from "../components/Message";
import InfoGrid from "../components/InfoGrid";
import ScriptureCarousel from "../components/ScriptureCarousel";
import LatestSermon from "../components/LatestSermon";

export default function Home() {
    return (
    <>

        <HeroSection />

        <LatestSermon />

        <div className="container">

            <ScriptureCarousel />
            
            <AboutUs />
            <InfoGrid />
            
            
        </div>
        </>
    );
}