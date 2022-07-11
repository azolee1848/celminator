import React, {useContext} from 'react';
import HeaderMenu from "./HeaderMenu";
import {UserContext} from "../../context/UserContext";

function HeaderCenter() {

    const user: boolean = useContext(UserContext);

    return (
        <>
            {user ? <HeaderMenu/> : <p>Motivational message.</p> }
        </>
    );
}

export default HeaderCenter;