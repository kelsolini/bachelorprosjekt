import { profiles } from "../data/profiles";
import ProfileCard from "./ProfileCard";

const ProfileSection = () => {
    return (
        <section id="team">
            <h2>Møt teamet</h2>

            <div>
                {profiles.map((profile) => (
                    <ProfileCard key={profile.name} profile={profile} />
                ))}
            </div>
        </section>
    );
};

export default ProfileSection;