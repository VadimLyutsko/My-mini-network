import { NavLink } from "react-router-dom";
import sss from "./Navbar.module.css";
import ContainerNavFriends from "./NavFriends/ContainerNavFriends";
import NavFriends from "./NavFriends/NavFriends";

const Navbar = props => {
  return (
    <nav className={sss.nav}>
      <div className={sss.item}>
        <NavLink to="/Profile" className={navData => (navData.isActive ? sss.active : sss.item)}>
          Profile
        </NavLink>
      </div>
      <div className={sss.item}>
        <NavLink to="/Messages" className={navData => (navData.isActive ? sss.active : sss.item)}>
          Message
        </NavLink>
      </div>
      <div className={sss.item}>
        <NavLink to="/News" className={navData => (navData.isActive ? sss.active : sss.item)}>
          News
        </NavLink>
      </div>
      <div className={sss.item}>
        <NavLink to="/Music" className={navData => (navData.isActive ? sss.active : sss.item)}>
          Music
        </NavLink>
      </div>
      <div className={sss.item}>
        <NavLink to="/Sittings" className={navData => (navData.isActive ? sss.active : sss.item)}>
          Sittings
        </NavLink>
      </div>

      <ContainerNavFriends state={props.state} />
    </nav>
  );
};

export default Navbar;
