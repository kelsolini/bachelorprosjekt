import { profiles } from "../data/profiles";
import ProfileCard from "./ProfileCard";

import styles from "./styles/ProfileSection.module.css"

const ProfileSection = () => {
    return (
        <section id="team" className={styles.section}>
            <h2 className={styles.title}>Bachelor gruppe 420 69</h2>

            <div className={styles.grid}>
                {profiles.map((profile) => (
                    <ProfileCard key={profile.name} profile={profile} />
                ))}
            </div>
        </section>
    );
};

export default ProfileSection;