import React from "react";
import SideBarPlataforma from "../../../components/plataforma-components/SideBarPlataforma/Sidebar-lunna";
import SecondHeaderPlataforma from "../../../components/plataforma-components/SecondHeaderPlataforma/SecondHeaderPlataforma";

const TemplateSecundaryPlataforma = ({ children }) => {
    return (
        <>
            <SecondHeaderPlataforma />
            <SideBarPlataforma />
            {children}
        </>
    );
};

export default TemplateSecundaryPlataforma;
