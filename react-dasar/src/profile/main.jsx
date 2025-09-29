import { createRoot } from "react-dom/client";
import ProfileApp from "./ProfileApp";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProfileApp />
    </StrictMode>
);