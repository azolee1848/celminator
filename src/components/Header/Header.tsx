import React, {useState} from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderCenter from "./HeaderCenter";
import HeaderLogout from "./HeaderLogout";

function Header() {
    return (
        <div>
            <HeaderLogo/>
            <HeaderCenter/>
            <HeaderLogout/>
        </div>
    );
}

export default Header;