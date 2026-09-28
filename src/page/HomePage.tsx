import { 
    Footer, 
    Header, 
    ProfileSection, 
    IntroSection, 
    SkillSection, 
    AboutBachelor, 

} from "../components";

const HomePage = () => {
    return (
        <>
            <Header />
                <main>
                    <IntroSection />
                    <ProfileSection />

                    <div className="grid-12-column">
                        <div className="xs-12 md-6">
                            <AboutBachelor />
                        </div>
                        <div className="xs-12 md-6">
                            <SkillSection />
                        </div>
                    </div>
                </main>
            <Footer />
        </>    
    );
};

export default HomePage;
