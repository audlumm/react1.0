import React from "react";
import Squre3 from "./components2/components3/Squre3";

export default function Squre(props) {
    return <div>
        This is a fra
        <Squre3></Squre3>
        <div></div>
        {props.sidelenght}

        <div>
            {props.areaSqure}
        </div>
        <div>
            {props.peq}
        </div>
    </div>
}