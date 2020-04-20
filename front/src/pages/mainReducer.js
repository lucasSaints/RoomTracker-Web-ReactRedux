const INITIAL_STATE = { reunioes: [], salas: [], empresa: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LISTA_REUNIOES_UPDATE':
            return { ...state, reunioes: action.payload };
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload };
        case 'TODO_CLEAR':
            return { ...state, description: '' };
        default:
            return state;
    }
}