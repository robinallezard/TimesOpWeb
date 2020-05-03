import React, { useReducer, createContext } from 'react';
import {words} from './words';

const initialState = {
    words : [],
    equipes : [
        {
            id: 'equipe1',
            nom: 'Equipe 1',
            points : {
                manche1 : null,
                manche2 : null,
                manche3 : null
            }
        },
        {
            id: 'equipe2',
            nom: 'Equipe 2',
            points : {
                manche1 : null,
                manche2 : null,
                manche3 : null
            }
        },
    ],
    currentManche : 1
} // toutes les célébrités + un objet avec le nom de l'équipe + les points à chaque manche.

const store = createContext(initialState);

const { Provider } = store; // permet de transmettre au children les données


function chooseWords(ar, l) {
    const arrayWords = [];

    /* TODO : faire ens orte que les valeurs ne peuvent revenir */

    for( let i = 0; i < l; i++) {
        arrayWords[i] = ar[Math.floor(Math.random()*ar.length)];
        console.log(arrayWords[i]);
    }
    return arrayWords;
}


const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {

        const {type, payload} = action;

        switch(action.type) {
            case 'ADD_TEAMS_NAME' :
                return {
                    ...state,
                    equipes: payload
                };
                case 'ADD_WORDS' :
                    const wordsList = chooseWords(words, 20);
                    
                    return {
                        ...state,
                        words : wordsList
                    };
                    
            default:
                console.log('default');
                return state;
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
}

export {store, StateProvider}