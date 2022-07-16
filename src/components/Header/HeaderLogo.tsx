import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContext";
import logo from '../../images/target.png';

function HeaderLogo() {

    const user: boolean = useContext(UserContext);

    return (
      <>
        {user ? (
          <div id="logo">
            <a href="/">
              <img id="logo__image" src={logo} alt="Logo."/>
            </a>
            <a href="/">
              <span className="userNameShort">Zoltán</span>
            </a>
          </div>
        ) : (
          <div>
            <span className="">Célminátor</span>
          </div>
        )}
      </>
    );
}

export default HeaderLogo;