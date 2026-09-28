import { profiles } from "../data/profiles";
import ProfileCard from "./ProfileCard";

import styles from "./styles/ProfileSection.module.css";

const ProfileSection = () => {
    return (
        <section className={styles.section}>

            <div className="grid-12-column">
                {profiles.map((profile) => (
                    <div key={profile.name} className="xs-12 md-4">
                        <ProfileCard profile={profile} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProfileSection;