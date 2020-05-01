import React from 'react'

function Home() {
    return (
        <div className="min-h-screen bg-gray-300 text-gray-900 font-sans flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold mb-8">Bienvenue sur <span className="text-purple-600">Time's OP !</span></h1>
            <form className="flex justify-center items-center flex-col">
                <legend className="text-lg mb-5">Tout d'abord, choisissez le nom des équipes qui vont s'affronter :</legend>
                <label className="flex flex-col w-full items-start mb-4" htmlFor="equipe1">
                    <span className="mb-4">Équipe 1 :</span>
                    <input className="shadow-sm w-full h-12 box-border p-4 rounded-lg" type="text" name="equipe1" id="equipe1"/>
                </label>
                <label className="flex flex-col w-full items-start" htmlFor="equipe2">
                    <span className="mb-4">Équipe 1 :</span>
                    <input className="shadow-sm w-full h-12 box-border p-4 rounded-lg" type="text" name="equipe2" id="equipe2"/>
                </label>
                <button className="transition-all duration-200 text-white text-lg bg-purple-600 hover:bg-purple-700 p-10 pt-3 pb-3 rounded-lg mt-8" type="submit">Jouer !</button>
            </form>
        </div>
    )
}

export default Home
