import React from "react";

export default (props) => (
    <div className="popup">
        <form style={{margin: "auto 0 auto 0"}}>
            <label>Email</label>
            <input type="email" name="" id="" style={{width: "90%"}}/><br/>
            <label>Senha</label>
            <input type="password" name="" id="" style={{width: "90%"}}/><br/>
            <input type="checkbox" name="" id=""  style={{display: "inline-block", marginLeft: "7%"}}/><label style={{display: "inline-block", lineHeight: 5.2}}>Lembrar-me</label><br/>
            <input type="submit" className="filled" value="&nbsp;&nbsp;&nbsp;ENTRAR&nbsp;&nbsp;&nbsp;"/>
        </form>
        <form style={{borderLeft: "solid #af4242af 1px", margin: "2% 0 2% 0"}}>
            <label>Nome de usuário</label>
            <input type="text" name="" id="" style={{width: "90%"}}/><br/>
            <label>Email</label>
            <input type="email" name="" id="" style={{width: "90%"}}/><br/>
            <label>Senha</label>
            <input type="password" name="" id="" style={{width: "90%"}}/><br/>
            <input type="submit" className="filled" value="&nbsp;&nbsp;&nbsp;CADASTRAR&nbsp;&nbsp;&nbsp;"/>
        </form>
    </div>
);