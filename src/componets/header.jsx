import { useNavigate, useLocation } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "../style/header.scss";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const path = location.pathname.split("/")[1];
    const pageTitle = path.charAt(0).toUpperCase() + path.slice(1);

    const goback = () => {
        navigate(-1);
    };

    return (
        <div className="header-container">
            <FaLongArrowAltLeft
                onClick={goback}
                className="back-button"
                size={24}
            />
            <h2 className="header-title">{pageTitle}</h2>
            <FaSearch className="search-icon" size={20} />
        </div>
    );
}
