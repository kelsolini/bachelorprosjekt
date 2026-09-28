import styles from "./styles/AboutBachelor.module.css";

const AboutBachelor = () => {
  return (
    <>
        <section className={styles.section}>
            <div className={styles.card}>
                <h3 className={styles.tilte}>Kort om bachelorprosjekt</h3>
                <div className={styles.text}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam et magni. Itaque, ratione eius et, corporis sed labore quaerat reiciendis aliquam, quo quasi laboriosam sunt inventore impedit. Animi, reiciendis.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutBachelor