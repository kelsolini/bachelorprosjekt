import type { Profile } from "../interfaces/profile";

import styles from "./styles/ProfileCard.module.css";

interface ProfileCardProps {
  profile: Profile;
  isOpen: boolean;
  onClick: () => void;
}

const ProfileCard = ({ profile, isOpen, onClick }: ProfileCardProps) => {
  return (
    <div
      className={`${styles.card} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
    >
      <img className={styles.image} src={profile.image} alt={profile.name} />

      <div className={styles.content}>
        <h3 className={styles.name}>{profile.name}</h3>

        <p className={styles.description}>{profile.description}</p>

        <p className={styles.study}>{profile.study}</p>

        {isOpen && (
          <div className={styles.moreInfo}>
            <p>
              Her kan du legge inn mer informasjon om personen, erfaring,
              interesser, teknologi osv.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
