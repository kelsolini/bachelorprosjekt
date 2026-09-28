import styles from "./styles/IntroSection.module.css";

const IntroSection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.card}>
            <h3 className={styles.title}>Into shit</h3>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore nihil temporibus facere iste. Quasi magnam dolorum, natus animi molestias placeat repellendus molestiae, pariatur rem deleniti voluptatibus praesentium laboriosam vel!
            </p>
        </div>
    </section>
  )
}

export default IntroSection