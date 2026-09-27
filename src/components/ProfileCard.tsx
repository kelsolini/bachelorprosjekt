import type { Profile } from "../interfaces/profile";
import styles from "./styles/ProfileCard.module.css";

interface ProfileCardProps {
    profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={profile.image} alt={profile.name} />

            <div className={styles.content}>
                <h3 className={styles.name}>{profile.name}</h3>
                <p className={styles.description}>{profile.description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;