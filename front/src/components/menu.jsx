import React from "react";

export default props => (
        <div className="coluna">
            <div ></div>
            <button className="menutree"> Filtros
                <div> <input type="checkbox" name="reunioeslogado" id="reunioeslogado" defaultChecked/> Minhas reuniões</div>
                <div> <input type="checkbox" name="reunioesoutro" id="reunioesoutros" defaultChecked/> Reuniões de outros</div>
                <button className="menutree"> Por sala
                    <div><input type="checkbox" name="sala1" id="sala1'" defaultChecked/> Sala 1</div>
                    <div><input type="checkbox" name="sala2" id="sala2'" defaultChecked/> Sala 2</div>
                    <div><input type="checkbox" name="sala3" id="sala3'" defaultChecked/> Sala 3</div>
                </button>
            </button>
            <button className="borderless"> <img src="" alt=""/> Teste</button>
            <button className="borderless"> <img src="" alt=""/> Teste</button>
            <button className="borderless"> <img src="" alt=""/> Teste</button>
            <button className="borderless"> <img src="" alt=""/> Teste</button>
            <button className="borderless"> <img src="" alt=""/> Teste</button>
            <button className="borderless"> <img src="" alt=""/> Teste</button>
        </div>
)