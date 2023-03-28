import "./header.css";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import Logo from "../../assets/logo.png";

const Header = ({ isactive, isSetActive }) => {
  return (
    <div className="header ">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#programs">Programs</a>
        </li>
        <li>
          <a href="#reasons">Why us</a>
        </li>
        <li>
          <a href="#plans">Plans</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <div onClick={() => isSetActive(!isactive)} className="header-menu-res">
        <IoIosMenu
          size={40}
          color={"#fff"}
          className={`${isactive ? "header-menu-res-hidden" : null}`}
        />
        <IoIosClose
          size={40}
          color={"#fff"}
          className={`${isactive ? null : "header-menu-res-hidden"}`}
        />
      </div>
    </div>
  );
};

export default Header;
