import React, {useState, useContext} from 'react'
import { store } from '../store.js';
import { useHistory } from "react-router-dom";

function Recap() {
    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    let history = useHistory();
    
    const [teamsInfo, setTeamsInfo] = useState(state.equipes)


    function handleClick() {
        dispatch({type : 'ADD_WORDS'});
        history.push('/jeu');
    }

    return (
        <>
            <h1 className="text-4xl font-bold mb-8 text-purple-600">Time's OP !</h1>
            <table className="table-auto w-full rounded-md overflow-hidden text-center shadow-base">
                <thead>
                    <tr>
                        <th className="py-3 px-2 border-box text-white bg-purple-800">Manche</th>
                        {teamsInfo.map((equipe, index) => <th key={index} className="py-3 text-white bg-purple-800">{equipe.nom}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 px-2 border-box text-gray-800 bg-purple-200">Tout les mots</td>
                        {teamsInfo.map((equipe, index) => equipe.points.manche1 ? <td key={index} key={index} className="py-3 px-2 border-box text-gray-800 bg-purple-200">{equipe.nom}</td> : <td key={index} className="py-3 px-2 border-box text-gray-800 bg-purple-200">/</td>)}
                    </tr>
                    <tr>
                        <td className="py-3 px-2 border-box text-gray-800 bg-purple-200">Un seul mot</td>
                        {teamsInfo.map((equipe, index) => equipe.points.manche2 ? <td key={index} className="py-3 px-2 border-box text-gray-800 bg-purple-200">{equipe.nom}</td> : <td key={index} className="py-3 px-2 border-box text-gray-800 bg-purple-200">/</td>)}
                    </tr>
                    <tr>
                        <td className="py-3 px-2 border-box text-gray-800 bg-purple-200">Le mime</td>
                        {teamsInfo.map((equipe, index) => equipe.points.manche3 ? <td key={index} className="py-3 px-2 border-box text-gray-800 bg-purple-200">{equipe.nom}</td> : <td key={index} className="py-3 px-2 border-box text-gray-800 bg-purple-200">/</td>)}
                    </tr>
                </tbody>
            </table>

            <button onClick={() => handleClick()} className="transition-all duration-200 text-white text-lg bg-purple-800 hover:bg-purple-700 p-10 pt-3 pb-3 rounded-lg mt-8">Jouer la manche {state.currentManche} !</button>
        </>
    )
}

export default Recap
