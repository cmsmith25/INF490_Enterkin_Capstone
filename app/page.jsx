import HeroSection from "../components/HeroSection";
import ThemeVerse from "../components/ThemeVerse";
import InfoGrid from "../components/InfoGrid";
import ScriptureCarousel from "../components/ScriptureCarousel";
import LatestSermon from "../components/LatestSermon";

export default function Home() {
    return (
    <>

        <HeroSection />

        <ThemeVerse />

        <LatestSermon />

        <div className="container">

            <ScriptureCarousel />
            
            
            <InfoGrid />
            
            
        </div>
        </>
    );
}