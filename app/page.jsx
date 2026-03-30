import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/Message";
import InfoGrid from "@/components/InfoGrid";

export default function Home() {
    return (
    <>

        <HeroSection />

        <div className="container">
            
            <AboutUs />
            <InfoGrid />
            
        </div>
        </>
    );
}