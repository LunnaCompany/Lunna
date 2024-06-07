import React from "react";
//
import HeaderPlataforma from "../../../components/plataforma-components/HeaderPlataforma/Capa-image";
import SideBarPlataforma from "../../../components/plataforma-components/SideBarPlataforma/Sidebar-lunna";
import PerfilDiscente from "../../../components/plataforma-components/perfil-discente/Perfil-discente";
import PerfilMemoria from "../../../components/plataforma-components/Perfil-Memoria/Perfil-Memoria";
//
export default function TemplateMainPlataforma({children}) {
    return (
        <>
            <SideBarPlataforma />
            <HeaderPlataforma />
            {children}
        </>
    );
}
