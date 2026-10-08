import styles from "./styles/AboutBachelor.module.css";

const AboutBachelor = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.tilte}>Hva går det ut på?</h2>
            <p>
              Bachelorprosjektet er avslutningen på studiet vårt. Vi jobber med
              en oppgave fra dere, og leverer en løsning dere faktisk kan ta i
              bruk. Prosjektet går fra januar til mai, og vi jobber 3–4 dager i
              uken. Dere eier sluttproduktet, og vi blir fulgt opp av en
              veileder fra Kristiania hele veien.
            </p>

            <h3>Dette bør bedriften tenke på</h3>

            <ul>
              <li>
                Et IT-prosjekt som passer for tre studenter fra januar til mai
              </li>
              <li>En kontaktperson hos dere som kan veilede oss underveis</li>
              <li>En arbeidsplass hos dere, helst 3–4 dager i uken</li>
              <li>Tilgang til systemer og programvare prosjektet krever</li>
              <li>Signering av en samarbeidskontrakt fra Kristiania</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBachelor;
