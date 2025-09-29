import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

export default function ProfileApp() {
    return (
        <ProfileContext.Provider value="Fazri Suhada">
            <h1>Profile</h1>
            <Profile/>
            <ProfileAddress />
        </ProfileContext.Provider>
    )
}