import React, { useReducer, createContext } from 'react';


const initialState = {
    equipes : [
        {
            id: 'equipe1',
            nom: '',
            points : {
                manche1 : null,
                manche2 : null,
                manche3 : null
            }
        },
        {
            id: 'equipe2',
            nom: '',
            points : {
                manche1 : null,
                manche2 : null,
                manche3 : null
            }
        },
    ]
} // toutes les célébrités + un objet avec le nom de l'équipe + les points à chaque manche.

const store = createContext(initialState);

const { Provider } = store; // permet de transmettre au children les données


const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {

        const {type, payload} = action;

        switch(action.type) {
            case 'ADD_TEAMS_NAME' :
                return {
                    ...state,
                    equipes: payload
                };
            default:
                console.log('rien');
                return state;
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
}

export {store, StateProvider}