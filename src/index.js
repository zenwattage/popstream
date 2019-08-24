import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './components/Games';
import Header from './components/Header';
import Stream from './components/Streams';
import GameStreams from './components/GameStreams';

// import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './styles.css';
function App() {
    return (
        <Router>
            <div className="App container-fluid">
                <Header />
                <Route exact path='/' component={Games} />
                <Route exact path='/top-streams' component={Stream} />
                <Route path='/game/:id' component={GameStreams} />
            </div>
        </Router>
    );
}

const rootElement = document.getElementById("root");


ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
