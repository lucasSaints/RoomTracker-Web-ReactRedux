import axios from 'axios';
import ShowErro from "./showError";

const URL = 'http://192.168.0.23:8080/ReservaDeSala/rest/';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}

//Usuário Service:
export const getUserByEmail = (emailRecebido) => {
    axios.get(`${URL}usuario/getByEmail`, {headers: { authorization: "secret", email: emailRecebido}}).then(response => {
        console.log(response);
      })
      .catch((error) => {
        ShowErro.show("erro",error);
      });
}
export const getUserById = (idRecebida) => {
    axios.get(`${URL}usuario/getById`, {headers: { authorization: "secret", id: idRecebida}}).then(response => {
        
      })
      .catch((error) => {
          ShowErro.show("erro", error);
      });
}
export const userLogin = (emailRecebido, senhaRecebida) => {
    axios.get(`${URL}usuario/getById`, {headers: { authorization: "secret", email: emailRecebido, password: senhaRecebida}}).then(response => {
        return true;
      })
      .catch((error) => {
          ShowErro.show("erro", error);
          return false;
      });
}

export const cadastra = () => {

}


//Sala Service
export const getSalasByEmp = (idEmpReceb) => {
    axios.get(URL+"sala/salas", {headers: {authorization: "secret", id_organizacao: idEmpReceb}}).then(response => {
        return true;
      })
      .catch((error) => {
          ShowErro.show("erro", error);
      });
}


//Reserva Service:
export const getReservasBySala = (idRecebida) =>{
    axios.get(URL + "reserva/byIdSala", {headers: {authorization: "secret", id_sala: idRecebida}}).then(response => {
        return true;
      })
      .catch((error) => {
          ShowErro.show("erro", error);
      });
}

export const getReservasByEmp = (/*idEmp,*/ arrayBoolSalas) => {
    console.log("GRBE Despacha");
    return (dispatch, getState) => {
    axios.get(URL + "reserva/byEmpresa", {headers: { authorization: "secret", id_org: /*idEmp*/ getState().log.empresa.id, "Content-Type": "application/json"}}).then(response => 
        dispatch({type: 'LISTA_REUNIOES_UPDATE', payload: response.data}));
    }
       /*
    dispatch(
    axios.get(URL + "reserva/byEmpresa", {headers: { authorization: "secret", id_org: idEmp, "Content-Type": "application/json"}}).then(response => {
        console.log("GRBE Despacha: "+response.data);
        return {type: 'LISTA_REUNIOES_UPDATE', payload: response.data};
      }));*/
/*
    return (dispatch, getState) => {
        axios.get(URL + "reserva/byEmpresa", {headers: { authorization: "secret", id_org: idEmp, "Content-Type": "application/json"}}).then(response => {
            console.log("GRBE Despacha: "+response.data);
            return dispatch({type: 'LISTA_REUNIOES_UPDATE', payload: response.data});
          })
    }*/
}


export const getLoginRodrigo = (email, senha) => {
    
    return (dispatch, getState) => {
        axios.get(URL+"usuario/loginRodrigao", {headers: { authorization: "secret", email: email, password: senha}}).then(response => {
            console.log("GLR Despacha: "+response.data);
        });
    }   
}