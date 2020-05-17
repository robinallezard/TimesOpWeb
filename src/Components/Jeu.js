import React, {useState, useContext, useEffect} from 'react'
import { store } from '../store.js';
import { useHistory } from "react-router-dom";

function Jeu() {
    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    const { currentManche } = state;
    
    const [seconds, setSeconds] = useState(30);
    const [mots, setMots] = useState(state.manches[currentManche].wordsTofinds); // tout les mots de la manche
    
    const [found, setFound] = useState([]); // les mots trouvés par le joueur courrant
    
    let history = useHistory();

    useEffect(() => {
        let interval = null;
        if(seconds > 0 && mots.length !== 0) {
            interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
        }
        else {
            dispatch({type : 'ADD_POINTS', payload : found});
            dispatch({type : 'MAJ_WORD_LIST_MANCHE', payload : mots});
            dispatch({type : 'CHANGE_CURRENT_TEAM'});
            history.push('/recap');
        }

        return () => clearInterval(interval);
    })

    function looseTime () {
        setSeconds(seconds - 3);
        let firstItem = mots[0];

        setMots((el) => {
            const removeFirst = mots.filter( (item, index) => index !== 0 ); // on enlève le premier item...
            el = [...removeFirst, firstItem]; // ...pour le mettre en dernier
            return el
        });
    }

    function updateTable() {

        if (mots.length > 0) {
            let wordFound = mots[0];
            setFound( prevFound => [...prevFound, wordFound]);
            setMots(mots.filter( (item, index) => index !== 0));
        }
    }

    return (
        <>
        <h1 className="text-4xl font-bold mb-5">Il reste <span className="text-purple-500">{seconds}</span> secondes</h1>
    <strong className="text-6xl font-bold mb-10">{mots[0]}</strong>
        <div className="flex mt-5">
            <button onClick={() => updateTable()} className="text-white  text-2xl bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg mr-10">Trouvé !</button>    
            <button onClick={() => looseTime()} className="text-white text-2xl bg-red-600 hover:bg-red-800 px-6 py-3 rounded-lg">Je passe</button>    
        </div>
        </>

    )
}

export default Jeu
