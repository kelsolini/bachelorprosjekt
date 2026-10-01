import styles from "./styles/Carousel.module.css";

const Carousel = () => {
  const skills = [
    {
      name: "React",
      icon: "/icons/react.svg",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwindcss.svg",
    },
    {
      name: "Swift",
      icon: "/icons/swift.svg",
    },
    {
      name: "Jetpack Compose",
      icon: "/icons/jetpack-compose.svg",
    },
    {
      name: "C#",
      icon: "/icons/c-sharp.svg",
    },
    {
      name: ".NET",
      icon: "/icons/dotnet.svg",
    },
    {
      name: "Java",
      icon: "/icons/java.svg",
    },
    {
      name: "Spring Boot",
      icon: "/icons/spring-boot.svg",
    },
    {
      name: "RabbitMQ",
      icon: "/icons/rabbitmq.svg",
    },
    {
      name: "Kafka",
      icon: "/icons/kafka.svg",
    },
    {
      name: "Docker",
      icon: "/icons/docker.svg",
    },
    {
      name: "AWS",
      icon: "/icons/aws.svg",
    },
    {
      name: "C",
      icon: "/icons/c.svg",
    },
    {
      name: "MySQL",
      icon: "/icons/mysql.svg",
    },
    {
      name: "GitHub",
      icon: "/icons/github.svg",
    },
    {
      name: "Figma",
      icon: "/icons/figma.svg",
    },
  ];

  return (
    <>
      <div className={styles.CarouselWrapper}>
        <div className={styles.Carousel}>
          {skills.map((skill) => (
            <div className={styles.Skill} key={skill.name}>
              <img className={styles.Logo} src={skill.icon} alt={skill.name} />
              <span className={styles.SkillName}>{skill.name}</span>
            </div>
          ))}
          {skills.map((skill) => (
            <div className={styles.Skill} key={skill.name}>
              <img className={styles.Logo} src={skill.icon} alt={skill.name} />
              <span className={styles.SkillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
