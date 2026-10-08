import {
  ProfileSection,
  IntroSection,
  SkillSection,
  AboutBachelor,
  Carousel,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="section">
          <div className="grid-12-column home-content">
            <div className="xs-12 md-12 lg-12">
              <IntroSection />
            </div>
            <img
              className="trykk-image"
              src="../images/trykk.png"
              alt="Trykk"
            />
            <div className="xs-12 md-12 lg-12">
              <ProfileSection />
            </div>
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
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
