import styles from "./styles/SkillSection.module.css";

const SkillSection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.card}>
            <h3 className={styles.title}>Skills</h3>
            <div>
                <ul className={styles.text}>
                    <li>React, TypeScript og Tailwind</li>
                    <li>React Native, SwiftUI og Jetpack Compose</li>
                    <li>C#/.NET, Java/Spring Boot og REST API-er</li>
                    <li>RabbitMQ og Kafka</li>
                    <li>Docker og AWS</li>
                    <li>C-programmering i Linux</li>
                    <li>SQL-databaser</li>
                    <li>Git/GitHub</li>
                    <li>Design og prototyping i Figma</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default SkillSection