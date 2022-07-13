import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContext";
import logo from '../../images/target.png';

function HeaderLogo() {

    const user: boolean = useContext(UserContext);

    return (
        <>
            {user ?
                <div className="bg-light d-flex align-items-center mx-2">
                    <img id="logo__image" src={logo} alt=""/>
                    <span className="text-primary mx-1">Zoltán</span>
                </div> :
                <div className="bg-light d-flex align-items-center">
                    <img id="logo__image" src="../../images/target.png" alt=""/>
                    <span className="text-primary">Célminátor</span>
                </div>
            }
        </>
    );
}

export default HeaderLogo;