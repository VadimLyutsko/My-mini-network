import { NavLink } from "react-router-dom";
import sss from "./NavFriends.module.css";

const NavFriends = props => {
  return (
    <nav className={sss.nav}>
      <div className={sss.item}>
        <NavLink to="/Friends" className={navData => (navData.isActive ? sss.active : sss.item)}>
          <h3>Friends</h3>
          <div>
            <img className={sss.friendsImg} src={props.state.navBar[0]["image"]} alt="" />
            <div>
              {props.state.navBar[0]["name"]}
            </div>
          </div>
          <div>
            <img className={sss.friendsImg} src={props.state.navBar[1]["image"]} alt="" />
            <div>
              {props.state.navBar[0]["name"]}
            </div>
          </div>
          <div>
            <img className={sss.friendsImg} src={props.state.navBar[2]["image"]} alt="" />
            <div>
              {props.state.navBar[0]["name"]}
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavFriends;
