import React from "react";
import { connect } from "react-redux";
/*
class Reuniao extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        <div className="reuniao">
            <h3 className="reuniaotitulo">{props.sala}</h3><h5 className="reuniaolocador">~{props.locador}</h5>
            <div style={{width: "100%", clear: "both", display: "table"}}>
                <div className="reuniaonota">{props.descricao}</div>
                <div style={{margin: "-1.7% 4.2% 5% 0", display: "table-cell", float: "right", textAlign: "end"}}>
                    <div className="reuniaodata">{props.data}</div>
                    <div className="reuniaohora">{props.horaInicio} - {props.horaFim}</div>
                    <div className="reuniaofloor">{props.andar}</div>
                </div>
            </div>
        </div>
    }
}
export default connect()(Reuniao)
*/
export default (props) => (
    <div className="reuniao">
        <h3 className="reuniaotitulo">{props.sala}</h3><h5 className="reuniaolocador">~{props.locador}</h5>
        <div style={{width: "100%", clear: "both", display: "table"}}>
            <div className="reuniaonota">{props.descricao}</div>
            <div style={{margin: "-1.7% 4.2% 5% 0", display: "table-cell", float: "right", textAlign: "end"}}>
                <div className="reuniaodata">{props.data}</div>
                <div className="reuniaohora">{props.horaInicio} - {props.horaFim}</div>
                <div className="reuniaofloor">{props.andar}</div>
            </div>
        </div>
    </div>
)