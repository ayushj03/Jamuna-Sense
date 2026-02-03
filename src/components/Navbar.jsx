import "./Navbar.css";
import Logo from "../assets/Jamuna_Sense_Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Know Your Yamuna</li>
        <li>Impact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
