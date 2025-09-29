import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress() {
    const address = useContext(ProfileContext)

    return(
        <div>
            <h2>Profile Address</h2>
            <p>Alamat : {address}</p>
        </div>
    )
}