import React from "react";
import Squares from "../Squares/Squares";
import style from "./home.module.css";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <>
      <div className="w-100 vh-100 position-relative" >
        <div className={`position-absolute  w-100 h-100 ${style["container_card"]}`} >
          <div className={`${style["main_card"]} d-flex position-relative`}>
            {/* menue */}
            <div className={` ${style.menu} `}>

              <Menu
                iconName={faUser}
                text={"about"}
              />
              <Menu
                iconName={faUser}
                text={"resume"}
              />
              <Menu
                iconName={faUser}
                text={"certificates"}
              />
              <Menu
                iconName={faUser}
                text={"projects"}
              />
              <Menu
                iconName={faUser}
                text={"contacts"}
              />

            </div>
            {/* end menu */}
          </div>
        </div>
        <Squares />
      </div>
    </>
  );
}

export default Home;
