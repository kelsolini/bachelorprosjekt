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
        <AboutBachelor />
        <div className="grid-12-column ">
          <div className="xs-12 md-12 lg-12">
            <Carousel />
          </div>
        </div>
        <SkillSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
