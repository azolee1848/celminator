import React, {useContext} from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderCenter from "./HeaderCenter";
import HeaderLogout from "./HeaderLogout";
import {UserContext} from "../../context/UserContext";

function Header() {

    const user: boolean = useContext(UserContext);

    return (
        <header className="d-flex flex-row justify-content-between align-items-center text-primary bg-light">
            <HeaderLogo/>
            <HeaderCenter/>
            {user ? <HeaderLogout/> : null}
        </header>
    );
}

export default Header;