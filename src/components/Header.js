import React from "react";
import "./styles/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {IconButton} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";


// ES6 ARROW Functions
const Header = ({ backButton }) => {
    // it gives us the browser history, and stores in the variable const history, your website session history, how many times and where you
    // been on the website
    const history = useHistory();

    return (
        <div className="header">
            {/* we are saying if we are passing the backbutton prop, then we render back button, otherwise, just keep it person icon*/}
            {backButton ? (
                // onclick uses the arrow function, to take the hisitory variable, in which the session info is stored, and then replace it with
                // url the backbutton prop has, in this case, it is the home url /, so it goes home
                <IconButton onClick={() => history.replace(backButton)}>
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