import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from "./Parent.js";
import ValueContext from './ValueContext';
/*
function App(props) {
    return ( <
        div > Hello from { props.name }
        age = { props.age } < /div>
    );
}
*/
function App() {
    let value = 81;
    return ( <
        ValueContext.Provider value = { value } >
        <
        div >
        Hello World <
        Parent / >
        <
        /div> < /
        ValueContext.Provider >

    );
}

export default App;