import styles from "./styles/IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>Hjelp vi trenger prosjekt</h1>
        <p>
          Vi er tre sisteårsstudenter ved Høyskolen Kristiania som skal
          gjennomføre bachelorprosjektet vårt våren 2027. Nå ser vi etter en
          bedrift som har et reelt IT-prosjekt vi kan ta tak i, enten det er en
          app, en nettside, et internt verktøy eller noe helt annet. nyttig.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
