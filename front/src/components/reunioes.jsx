import React from "react";
import {Component} from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Reuniao from "./reuniao";
import {getReservasByEmp} from "../main/actions";
/*
class Reunioes extends Component {
    constructor (props){
        super(props);
        
        this.r = store.getState().reunioes;
        this.lista=[];
        console.log("Ohayou: "+this.r)
        this.weekDays=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
    //const jsonToReuniao = (json) => {
        this.aux = r;
        for (let i = 0; i < this.aux.length; i++) {
            let leDataTexto="";
            //let leAndarTexto="";
            let auxRepete="";
            for (let j = 0; j < this.aux[i].repeticoes.split(",").length; j++) {     
                if(this.aux[i].repeticoes.split(",")[j]=="1"){  
                    if(auxRepete!="") 
                        auxRepete+=", ";                           
                    auxRepete+=this.weekDays[j];
                }                                        
            }                                                                
            if(auxRepete!=""){                         
                leDataTexto=auxRepete;
            }else {                
                let leDataDia = this.aux[i].data_hora_inicio.split(" ")[0].split("-")[2];
                let leDataMes = this.aux[i].data_hora_inicio.split(" ")[0].split("-")[1];
                let leDataAno = this.aux[i].data_hora_inicio.split(" ")[0].split("-")[0];
                if (parseInt(leDataDia) < 10)                                 
                    leDataTexto = "0";                                         
                leDataTexto += leDataDia + "/";                       
                if (parseInt(leDataMes) < 10)                                 
                    leDataTexto += "0";                                        
                leDataTexto += leDataMes + "/" + leDataAno;  
            }
            let leInicioHora    = this.aux[i].data_hora_inicio.split(" ")[1].split(":")[0];
            let leInicioMinuto  = this.aux[i].data_hora_inicio.split(" ")[1].split(":")[1];
            let leInicioTexto   = leInicioHora+":"+leInicioMinuto;
            let leFimHora    = this.aux[i].data_hora_fim.split(" ")[1].split(":")[0];
            let leFimMinuto  = this.aux[i].data_hora_fim.split(" ")[1].split(":")[1];
            let leFimTexto   = leFimHora+":"+leFimMinuto;
            //if(isNaN(aux[i].localizacao))
            lista.push(<Reuniao sala="" locador="" descricao={this.aux[i].descricao} data={leDataTexto} horaInicio={leInicioTexto} horaFim={leFimTexto} andar=""/>);
        }
    }
    //jsonToReuniao(props);
    render() {
        <div className="reunioeslista" >
               {lista}
        </div>
    }
}

//export default Reunioes

const mapStateToProps = state => ({reunioes: state.reunioes})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ getReservasByEmp}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Reunioes);*/

export default props => (
    <div className="reunioeslista">
        <Reuniao sala="Sala 1" descricao="Anúncio importante" locador="Locador" andar="Térreo" data="Seg, Qui" horaInicio="13:15" horaFim="13:25"/>
        <Reuniao sala="Sala 2" descricao="Despedida de solteiro no clube de xadrez" locador="Noivo" andar="Piso 3" data="01/04/2020" horaInicio="17:00" horaFim="22:00"/>
        <Reuniao sala="Sala de Teste" descricao="EI! VOCÊ AÍ!! DEIXA O CURSOR DO MOUSE EM CIMA DE MIM!! É SÉRIO!!" locador="Hoverme" andar="Subsolo 1" data="10/04/2020" horaInicio="14:00" horaFim="15:00"/>
        <Reuniao sala="Sala 3" descricao="Churrascão de saideira da quarentena" locador="xXTheLocatorXx" andar="42" data="24/12/4242" horaInicio="04:20" horaFim="20:04"/>
        <Reuniao sala="Sala dos Mestres" descricao="Propaganda de marcenaria" locador="Marceneiro" andar="Térreo" data="25/12/2020" horaInicio="14:00" horaFim="22:10"/>
        <Reuniao sala="Conselho Jedi" descricao="Discussão sobre o ataque dróide nos wookies" locador="Ki Adi Mundi" andar="172" data="13/07/2020" horaInicio="12:00" horaFim="13:00"/>
        <Reuniao sala="Conselho Escuro" descricao="Discussão sobre a Regra de 2" locador="NãoÉDarthBane" andar="Último andar" data="13/07/2020" horaInicio="12:00" horaFim="13:00"/>
        <Reuniao sala="Conselho de Elrond" descricao="Discussão sobre o Um Anel" locador="Gandalf" andar="Primeiro andar" data="13/07/2020" horaInicio="10:00" horaFim="12:00"/>
        <Reuniao sala="Comcílio" descricao="Trocadilho kkkk" locador="Piadista" andar="G3" data="13/07/2020" horaInicio="12:30" horaFim="13:00"/>
    </div>
)