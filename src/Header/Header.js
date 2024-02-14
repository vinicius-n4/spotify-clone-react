import React from "react";
import "./Header.css";
import arrowLeft from "../assets/icons/small-left.png";
import arrowRight from "../assets/icons/small-right.png";
import search from "../assets/icons/search.png";

const Header = () => {
    return (
        <nav class="header__navigation">
            <div class="navigation">
                <button class="left-arrow">
                    <img src={arrowLeft} alt="Left Arrow"/>
                </button>
                <button class="right-arrow">
                    <img src={arrowRight} alt="Right Arrow"/>
                </button>
                <div class="header__search">
                    <img src={search} alt=""/>
                    <input type="text" id="search-input" maxlength="800"
                        placeholder="What do you want to listen to?"/>
                </div>
                <div class="header__login">
                    <button class="signup">Sign up</button>
                    <button class="login">Log in</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
