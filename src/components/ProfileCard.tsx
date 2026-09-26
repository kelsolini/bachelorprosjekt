import type { Profile } from "../interfaces/profile";

interface ProfileCardProps {
    profile: Profile;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
    return (
        <div>
            <img
                className="w-32 h-32 object-cover"
                src={profile.image}
                alt={profile.name} />
                
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default ProfileCard;