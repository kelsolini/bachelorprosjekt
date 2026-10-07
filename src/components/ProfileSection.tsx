import { useState } from "react";

import { profiles } from "../data/profiles";

import ProfileCard from "./ProfileCard";

import styles from "./styles/ProfileSection.module.css";

const ProfileSection = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {profiles.map((profile) => {
          if (selectedProfile !== null && selectedProfile !== profile.name) {
            return null;
          }

          return (
            <>
              <ProfileCard
                key={profile.name}
                profile={profile}
                isOpen={selectedProfile === profile.name}
                onClick={() =>
                  setSelectedProfile(
                    selectedProfile === profile.name ? null : profile.name,
                  )
                }
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileSection;
