import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "../style/header.scss";

export default function Header() {


    const { id } = useParams();
    const navigate = useNavigate();

    const goback = () => {
        navigate(-1);
    };

    return (
        <FaLongArrowAltLeft
            onClick={goback}
            className="back-button"
            size={50}
        />
    )
}