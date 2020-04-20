import React from "react";
import LogDiv from "./logdiv";

export default props => (
    <div>
        <header>
            <hr style={{clear: "both", opacity: "0"}}/>
            <h2 className="titulo">RoomTracker</h2>
            <LogDiv username="User" empresa="Wisee"/>
            <hr style={{clear: "both", opacity: "0"}}/>
        </header>
    </div>
)