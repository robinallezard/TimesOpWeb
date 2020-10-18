import React from 'react'
import { StateProvider } from './store.js';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home.js';
import Jeu from './Components/Jeu.js';
import Win from './Components/Win.js';
import Recap from './Components/Recap.js';
import { store } from './store.js';

function App() {

    return (
        <StateProvider>
        <div className="min-h-screen bg-gray-300 text-gray-900 font-sans flex justify-center items-center flex-col p-5 border-box">
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/jeu">
                    <Jeu/>
                </Route>
                <Route path="/recap">
                    <Recap/>
                </Route>
                <Route path="/win">
                    <Win/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
        </div>
        </StateProvider>
    )
}

export default App
