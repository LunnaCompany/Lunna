import React from "react";
import SideBarPlataforma from "../../../components/plataforma-components/SideBarPlataforma/Sidebar-lunna";

const TemplateChat = ({ children }) => {
    return (
        <>
            <SideBarPlataforma />
            {children}
        </>
    );
};

export default TemplateChat;
