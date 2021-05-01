import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';


// ES6 ARROW Functions
const Header = () => {
    return (
        <div className="header">
           <PersonIcon className="header__icon" fontSize="large"/>
            <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" />
            <ForumIcon className="header__icon" fontSize="large" />
        </div>
    )
}

export default Header;