import styles from "./styles/IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Vi har studentene. Har dere prosjektet?
        </h1>
        <p>
          Vi er tre studenter ved Høyskolen Kristiania som studerer frontend- og
          mobilutvikling. Våren 2027 skal vi gjennomføre bachelorprosjektet
          vårt, og vi har lyst til å bruke det på noe som faktisk kan være
          nyttig.
        </p>
        <p>
          Har dere en idé som aldri har kommet øverst på prioriteringslista? En
          arbeidsprosess som kunne vært enklere? Eller kanskje et problem dere
          lenge har tenkt at «noen burde gjøre noe med»?
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
