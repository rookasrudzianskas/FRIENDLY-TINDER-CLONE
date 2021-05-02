import React from "react";
import "./styles/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";


// ES6 ARROW Functions
const Header = ({ backButton }) => {
    return (
        <div className="header">
            {/* we are saying if we are passing the backbutton prop, then we render back button, otherwise, just keep it person icon*/}
            {backButton ? (
                <IconButton>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}

            <Link to="/">
            <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" />
            </Link>
            <Link to="/chat">
            <IconButton>
                 <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;