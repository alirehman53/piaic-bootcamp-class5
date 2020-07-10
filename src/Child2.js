import React, { useReducer } from 'react';
import numberReducer from './numberReducer';

function Child2(props) {

    let [number, dispatch] = useReducer(numberReducer, 52);
    return ( <
        div >
        Child 2 { number } <
        button onClick = {
            () => { dispatch({ type: "INCREMENT", val: 5 }) }
        } > Increment < /button> <
        button onClick = {
            () => { dispatch({ type: "DECREMENT", val: 10 }) }
        } > Decrement < /button> < /
        div >
    );
}
export default Child2;