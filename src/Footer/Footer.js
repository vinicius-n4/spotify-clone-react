import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="disclaimer-premium">
                <div className="text">
                    <p className="disclaimer-premium__title">Preview of Spotify</p>
                    <p className="disclaimer-premium__subtitle">Sign up to get unlimited songs and podcasts with occasional ads. No
                        credit card needed.</p>
                </div>
                <div className="button">
                    <button type="button">Sign up for free</button>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
