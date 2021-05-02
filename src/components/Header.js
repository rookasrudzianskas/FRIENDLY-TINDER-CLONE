import React from "react";
import "./styles/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import {IconButton, Link} from "@material-ui/core";


// ES6 ARROW Functions
const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" />
            <Link to="/chats">
            <IconButton>
                 <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;