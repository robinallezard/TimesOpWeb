import React, {useState, useContext} from 'react'
import { store } from '../store.js';

function Home() {
    const globalState = useContext(store);
    
    const { state, dispatch } = globalState;

    const [dataTeam, setDataTeam] = useState(state.equipes);
    
    const [error, setError] = useState(null);
    
    const handleChange = e => {
        
        const {value, name} = e.target;

        const newDataTeam = dataTeam.map(equipe => equipe.id === name ? {...equipe, nom : value} : equipe);

        setDataTeam(newDataTeam);
    } 

    
    const handleSubmit = e => {
        e.preventDefault();

        if(dataTeam !== null) {
            const validData = dataTeam.filter(equipe => equipe.nom !== '');

            console.log(validData);
            
            validData.length === dataTeam.length ? setError(null) : setError('veuillez remplir tous les champs')
        }
        else {
            setError('veuillez remplir tous les champs')
        }
    }


    return (
        <>
        <h1 className="text-4xl font-bold mb-8">Bienvenue sur <span className="text-purple-600">Time's OP !</span></h1>
        <form className="flex justify-center items-center flex-col" onSubmit={() => handleSubmit(event)}>
            <legend className="text-lg mb-5">Tout d'abord, choisissez le nom des équipes qui vont s'affronter :</legend>
            <label className="flex flex-col w-full items-start mb-4" htmlFor="equipe1">
                <span className="mb-4">Équipe 1 :</span>
                <input className="shadow-sm w-full h-12 box-border p-4 rounded-lg" onChange={() => handleChange(event)} type="text" name="equipe1" id="equipe1"/>
            </label>
            <label className="flex flex-col w-full items-start" htmlFor="equipe2">
                <span className="mb-4">Équipe 2 :</span>
                <input className="shadow-sm w-full h-12 box-border p-4 rounded-lg" onChange={() => handleChange(event)} type="text" name="equipe2" id="equipe2"/>
            </label>
            {error ? (
            <div className="bg-red-500 p-4 text-white rounded-lg box-border w-full mt-4">
                {error}
            </div>
            ): null}

            <button className="transition-all duration-200 text-white text-lg bg-purple-600 hover:bg-purple-700 p-10 pt-3 pb-3 rounded-lg mt-8" type="submit">Jouer !</button>
        </form>
        </>
    )
}

export default Home