import styles from "./styles/AboutBachelor.module.css";

const AboutBachelor = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.tilte}>Hva innebærer det?</h2>
            <h3>Fra utfordring til løsning</h3>
            <p>
              Vi trenger ikke at dere kommer med en ferdig idé. Fortell oss
              heller om en utfordring, så undersøker vi den sammen.
            </p>
            <p>
              Gjennom prosjektet kan vi blant annet jobbe med research, UX,
              design og utvikling for å finne og bygge en løsning som faktisk
              gir mening for dere.
            </p>
            <h3>Hva trenger vi fra dere?</h3>
            <p>
              Vi trenger først og fremst noen å sparre med underveis – en person
              som kjenner virksomheten, kan svare på spørsmål og gi oss
              tilbakemeldinger.
            </p>
            <p>
              Som utgangspunkt forventer Kristiania også at samarbeidspartneren
              kan stille med arbeidsplass 3–4 dager i uken, samt nødvendig
              maskinvare og programvare.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBachelor;
