import React from "react";
import Squares from "../Squares/Squares";
import style from "./home.module.css";
import Menu from "../Menu/Menu";
import { faAt, faDiagramProject, faCertificate, faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import myImage from '../../Assets/Images/abdelrahman.jpeg';

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
                iconName={faFile}
                text={"resume"}

              />
              <Menu
                iconName={faCertificate}
                text={"certificates"}

              />
              <Menu
                iconName={faDiagramProject}
                text={"projects"}

              />
              <Menu
                iconName={faAt}
                text={"contacts"}
                end={1}
              />

            </div>
            {/* end menu */}
            {/* left card */}
            <div style={{ backgroundColor: "#31313a" }}>

              <div className={`${style["card_started"]}`}>
                <img src={myImage} className={`${style["myphoto"]} `} />

              </div>
              <div className={`${style["profile"]} py-5`}>
                abdoo shawky mohamed shawky
              </div>
            </div>
            {/* end left card */}
          </div>
        </div>
        <Squares />
      </div>
    </>
  );
}

export default Home;
