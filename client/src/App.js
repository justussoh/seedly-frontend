import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './components/Home/Home'
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar'
import './App.css';
import {Container} from "react-bootstrap";

function App() {
    return (
        <React.Fragment>
            <Router>
                <NavBar/>
                <Header />
                <Container fluid>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Container>
            </Router>
        </React.Fragment>
    );
}

export default App;
