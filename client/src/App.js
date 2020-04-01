import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Questions from './components/Questions/Questions'
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar'
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Router>
                <NavBar/>
                <Header />
                <Questions />
            </Router>
        </React.Fragment>
    );
}

export default App;
