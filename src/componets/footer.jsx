import React from "react";
import { FaHeartbeat, FaMicrophone, FaRecordVinyl, FaMusic, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../style/footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <NavLink to="/" className="footer-icon"><FaHeartbeat /></NavLink>
            <NavLink to="/mic" className="footer-icon"><FaMicrophone /></NavLink>
            <NavLink to="/player" className="footer-icon active-center"><FaRecordVinyl /></NavLink>
            <NavLink to="/categories" className="footer-icon"><FaMusic /></NavLink>
            <NavLink to="/settings" className="footer-icon"><FaCog /></NavLink>
        </div>
    );
};

export default Footer;
