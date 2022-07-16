import React, {useState} from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderCenter from "./HeaderCenter";
import HeaderLogout from "./HeaderLogout";

function Header() {

    const [user, setUser] = useState<boolean>(true);

    return (
        <header className="d-flex flex-row justify-content-between align-items-center text-primary bg-light">
            <HeaderLogo/>
            <HeaderCenter/>
            {user ? <HeaderLogout/> : null}
        </header>
    );
}

export default Header;