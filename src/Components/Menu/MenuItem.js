import React from "react";
import style from "./menuItem.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MenuItem(props) {
    return (
        <>
            <div className={`${style.menu_item} d-flex justify-content-center`}>
                <span className="text-center">

                    <FontAwesomeIcon icon={props.iconName} />
                    <span className="text-uppercase d-block "> {props.text} </span>
                </span>
            </div>
            <div className={`${style.line}`}></div>
        </>
    );
}

export default MenuItem;
