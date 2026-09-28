import styles from "./styles/IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.card}>
            <h3 className={styles.title}>Vi trenger Bachelor Prosjekt</h3>
            <p className={styles.text}>
                Det føles som det var i går vi startet på bacheloren vår, og nå står vi her 2 år senere klare for å skrive bacheloroppgave!
                Vi ser derfor etter en bedrift som tør å ta en sjanse på oss. Vi er motiverte, nysgjerrige og har lyst til å komme i kontakt med dere for å diskutere muligheter.
                Sammen liker vi å være kreative, utforske løsninger og komme med nye perspektiver.

                Har dere et prosjekt i tankene, eller bare lyst til å slå av en prat?
                Send oss gjerne en melding, eller tips noen dere tror kunne vært interessert!
            </p>
        </div>
    </section>
  )
}

export default IntroSection