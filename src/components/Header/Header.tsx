import React, {useContext} from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderCenter from "./HeaderCenter";
import HeaderLogout from "./HeaderLogout";
import {UserContext} from "../../context/UserContext";

function Header() {

    const user: boolean = useContext(UserContext);

    return (
        <div>
            <HeaderLogo/>
            <HeaderCenter/>
            {user ? <HeaderLogout/> : null}
        </div>
    );
}

export default Header;