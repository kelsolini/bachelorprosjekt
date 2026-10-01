import {
  Footer,
  ProfileSection,
  IntroSection,
  SkillSection,
  AboutBachelor,
  Carousel,
} from "../components";

const HomePage = () => {
  return (
    <>
      <main>
        <IntroSection />
        <ProfileSection />
        <div className="section">
          <div className="grid-12-column">
            <div className="xs-12 md-12 lg-12">
              <Carousel />
            </div>

            <div className="xs-12 md-6 lg-6">
              <AboutBachelor />
            </div>

            <div className="xs-12 md-6 lg-6">
              <SkillSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
