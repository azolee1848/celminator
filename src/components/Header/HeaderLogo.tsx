import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContext";

function HeaderLogo() {

    const user: boolean = useContext(UserContext);

    return (
        <div>
            {user ? <p>Logo Username</p> : <p>Logo Brand</p>}
        </div>
    );
}

export default HeaderLogo;