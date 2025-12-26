import AboutRocketSection from "../components/AboutRocketSection";
import SuccessCasesSection from "../components/SuccessCasesSection";
import TrainingProgramsSection from "../components/TrainingProgramsSection";
import EnrollmentInfoSection from "../components/EnrollmentInfoSection";
import PartnersSection from "../components/PartnersSection";
const HomePage = () => {
    return(
        <main className="w-full mx-auto">
        <AboutRocketSection/>
        <SuccessCasesSection/>
        <TrainingProgramsSection/>
        <EnrollmentInfoSection/>
        <PartnersSection/>
        </main>
    )
};
export default HomePage;
