import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import QuestionsPage from './components/Questions/QuestionsPage'
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar'
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Router>
                <NavBar/>
                <Header />
                <QuestionsPage />
            </Router>
        </React.Fragment>
    );
}

export default App;
