import st from "../profileInfo.module.css";
import { NavLink } from "react-router-dom";
import { AboutMeType } from "../../../model/profileTypes.ts";

interface ProfileDataProps {
    profileData: AboutMeType;
}

const ProfileData: React.FC<ProfileDataProps> = ({ profileData }) => {
    if (!profileData) return null;

    const contactKeys: string[] = profileData.contacts ? Object.keys(profileData.contacts) : [];

    return (
        <div className={st.status}>
            <div>
                <b>Full Name:</b> {profileData.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profileData.lookingForAJob ? "Yes" : "No"}
            </div>
            <div>
                <b>About Me:</b> {profileData.aboutMe}
            </div>
            <div>
                <b>My Professional Skills:</b> {profileData.lookingForAJobDescription}
            </div>

            {contactKeys.length > 0 && (
                <div>
                    <b>Contacts:</b>
                    {contactKeys.map((key) => {
                        const value  = profileData.contacts[key];
                        return value ? (
                            <Contacts key={key} contactTitle={key} contactValue={value} />
                        ) : null;
                    })}
                </div>
            )}
        </div>
    );
};

interface ContactsProps {
    contactTitle: string;
    contactValue: string;
}

const Contacts: React.FC<ContactsProps> = ({ contactTitle, contactValue }) => {
    return (
        <div className={st.contact}>
            <b>{contactTitle}:</b>{" "}
            <NavLink className={st.link} to={contactValue}>
                {contactValue}
            </NavLink>
        </div>
    );
};

export default ProfileData;
