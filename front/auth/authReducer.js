const logadoKey = '_mymoney_user';
const INITIAL_STATE = {
    logado: JSON.parse(localStorage.getItem(logadoKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATION':
            if (action.payload) {
                return { ...state, validToken: true };
            } else {
                localStorage.removeItem(logadoKey);
                return { ...state, validToken: false, logado: null };
            } 
        case 'USER_FETCHED': 
            localStorage.setItem(logadoKey, JSON.stringify(action.payload));           
            return { ...state, logado: action.payload, validToken: true } ;        
        default: return state;
    }
}
