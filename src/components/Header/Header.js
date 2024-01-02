import Menu from "./Menu.js";
import { LOGO_URL } from "../../utils/constants.js";

const Header = () => {
  return (
    <div className="logoContainer">
      <img className="logo" src={LOGO_URL} />
      <Menu />
    </div>
  );
};

export default Header;
