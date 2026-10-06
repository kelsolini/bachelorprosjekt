import styles from "./styles/SkillSection.module.css";
import CotactBtn from "./ContactBtn";

const SkillSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h3 className={styles.title}>Kontakt Oss</h3>
        <div>
          <div className={styles.text}>
            <p></p>
          </div>
        </div>
        <CotactBtn />
      </div>
    </section>
  );
};

export default SkillSection;
