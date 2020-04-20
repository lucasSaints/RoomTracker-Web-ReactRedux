import React from 'react';
import Coluna from "../components/menu";
import ReunioesComp from "../components/reunioes";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getReservasByEmp } from '../main/actions';

class Index extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <div className="corpo">
                <Coluna />
                <ReunioesComp onload={/*() => props.*/getReservasByEmp()}/>
            </div>
        </div>
        )
    }
    
}

const mapStateToProps = state => ({reunioes: state.reunioes})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ getReservasByEmp}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Index);