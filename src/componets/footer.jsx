import React from "react";
import { FaMicrophone, FaFingerprint, FaCog } from "react-icons/fa";
import { IoIosContrast } from "react-icons/io";
import { CiWavePulse1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import "../style/footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <NavLink to="/playlists" className="footer-icon"><CiWavePulse1 /></NavLink>
            <NavLink to="/categories" className="footer-icon"><FaMicrophone /></NavLink>
            <NavLink to="/featured" className="footer-icon active-center"><FaFingerprint /></NavLink>
            <NavLink to="/albums" className="footer-icon"><IoIosContrast /></NavLink>
            <NavLink to="/settings" className="footer-icon"><FaCog /></NavLink>
        </div>
    );
};

export default Footer;
