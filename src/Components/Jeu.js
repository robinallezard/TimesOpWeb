import React, {useState, useContext, useEffect} from 'react'
import { store } from '../store.js';
import { useHistory } from "react-router-dom";

function Jeu() {
    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    const [seconds, setSeconds] = useState(30);
    const [mots, setMots] = useState(state.words);

    let history = useHistory();

    useEffect(() => {
        let interval = null;
        if(seconds > 0 ) {
            interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
        }
        else {
            history.push('/recap');
        }

        return () => clearInterval(interval);
    })

    function updateTable() {

        if (mots.length > 1) {
            setMots(mots.filter( (item, index) => index !== 0));
        }
        else {
            history.push('/recap'); 
        }
    }

    return (
        <>
        <h1 className="text-4xl font-bold mb-5">Il reste <span className="text-purple-500">{seconds}</span> secondes</h1>
    <strong className="text-6xl font-bold mb-10">{mots[0]}</strong>
        <div className="flex mt-5">
            <button onClick={() => updateTable()} className="text-white  text-2xl bg-green-600 hover:bg-green-800 px-6 py-3 rounded-lg mr-10">Trouvé !</button>    
            <button onClick={() => setSeconds(seconds - 3)} className="text-white text-2xl bg-red-600 hover:bg-red-800 px-6 py-3 rounded-lg">Je passe</button>    
        </div>
        </>

    )
}

export default Jeu
