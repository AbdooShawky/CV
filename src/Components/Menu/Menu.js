import React from "react";
import style from "./menu.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Menu(props) {

    return (
        <>

            {/* menu */}

            <div className={`${style.menu_item} ${props.klicked && style.activeMenuItem} d-flex justify-content-center`}>
                <span className="text-center">

                    <FontAwesomeIcon icon={props.iconName} style={{fontSize:"18px"}} />
                    <span className="text-uppercase d-block "> {props.text} </span>
                </span>
            </div>
            {props.end != 1 &&  <div className={`${style.line}`}></div>}

            {/* end menu */}

        </>
    );
}

export default Menu;
