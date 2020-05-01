import React, { useReducer, createContext } from 'react';


const initialState = {} // toutes les célébrités + un objet avec le nom de l'équipe + les points à chaque manche.

const store = createContext(initialState);

const { Provider } = store; // permet de transmettre au children les données

console.log(store);

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'ADD_TEAMS_NAME' :
                console.log('test');
                return state;
            default:
                console.log('rien');
                return state;
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
}

export {store, StateProvider}