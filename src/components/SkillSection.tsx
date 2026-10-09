import styles from "./styles/SkillSection.module.css";
import CotactBtn from "./ContactBtn";

const SkillSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>Kontakt Oss</h2>
        <div>
          <div className={styles.text}>
            <p>
              Har dere en app, en nettside eller et internt verktøy dere aldri
              har fått tid til? Da vil vi gjerne høre fra dere.
            </p>

            <p>
              Ta kontakt for en uforpliktende prat. Passer prosjektet, sender
              Kristiania en kontrakt som begge parter signerer. Vi starter i
              januar, så jo før vi kommer i gang, jo bedre.
            </p>

            <h3>
              Vil dere vite mer om ordningen? Se{" "}
              <a
                href="https://www.kristiania.no/arbeidsliv/bachelorprosjekt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kristianias side om bachelorprosjektet
              </a>
              .
            </h3>
          </div>
        </div>
        <CotactBtn />
      </div>
    </section>
  );
};

export default SkillSection;
