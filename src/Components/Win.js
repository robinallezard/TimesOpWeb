import React, {useState, useContext, useEffect} from 'react'
import { store } from '../store.js';

function Win() {

    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    let winner = null;

    const totalPoints1 = state.equipes[0].points.manche0.length + state.equipes[0].points.manche1.length + state.equipes[0].points.manche2.length;
    const totalPoints2 = state.equipes[1].points.manche0.length + state.equipes[1].points.manche1.length + state.equipes[1].points.manche2.length;

    if (totalPoints1 < totalPoints2) {
        winner = state.equipes[1].nom
    }
    else if (totalPoints1 > totalPoints2) {
        winner = state.equipes[0].nom
    }
    else {
        winner = null
    }
    
    return (
        <h1 className="text-4xl font-bold mb-8">
            {winner === null ? 'C\'est un match nul ;)' : 'L\'équipe '+winner+' remporte la partie ! :D'}
        </h1>
        
        
    )
}

export default Win
