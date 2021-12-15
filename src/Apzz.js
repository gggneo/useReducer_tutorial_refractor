// refractoring the app using useRTeducer
import React from 'react';

// the function reducer takes two parameters state and action
// action is the dispatch function reducer uses switch statement
//always outside the component
const reducer = (state, action) => {
    // uses a type for the action 
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count+1 };
        case 'decrement':
            return {...state, count: state.count-1 };
        case 'newUserInput':
            return {...state, userInput: action.payload }; 
            //replacing e.target.value
        case 'colorToggle': 
                return {...state, color: !state.color };
            default:
            throw new Error();
        }
}
export default function Appzz(){

// using reducer takes two params, state and dispatch which is sending an action . the inital state is a function  reducer and  the initial state :useState initial value 
const [state, dispatch] = React.useReducer(reducer, { count:0,userInput: '', color:false} )
//moved to reducer useReducer second parameter
//const [userInput, setUserInput] = React.useState('');
// const [count, setCount] = React.useState(0); 
//const [color, setColor] = React.useState(false);

const increment = (e) => dispatch({type: 'increment',})
// from (e)=> setCount(prevCount => prevCount+1); setCount removed by reducer
const decrement = (e) => dispatch({type: 'decrement',}) 
//from (e)=> setCount(prevCount => prevCount -1);
const colorChange = (e)=> dispatch({type: 'colorToggle'})
// from (e) => setColor(prev => !prev)

const getUserInput = (e) => dispatch({type: 'newUserInput',payload: e.target.value })
console.log("🌈" +getUserInput)
//from  (e) => setUserInput(e.target.value )

    return(
        <main className="App" style={{ color: state.color ? 'red' : 'green' }}>
      <input
        type="text"
        // the value of the userInput field changed after reducer to
        value={state.userInput}
        //when the user starts typing, this function runs
        onChange={getUserInput}
      />
      <br /><br />
      {/* after adding the useReducer count changes from count to */}
      <p>{state.count}</p>
      <section>
      {/* when the user hit the + button runs decrement */}
        <button onClick={decrement}>-</button>
        {/* when the user hit the + button runs increment*/}
        <button onClick={increment}>+</button>
          {/* when the user hit the button rthe color changes*/}
          <button onClick={colorChange} style={{backgroundColor: state.color ? 'red' : 'green'}} >Color</button> 
      </section>
      <br /><br />
     {/* here it displays the text from userInput on the page it changed after reducer to */}
      <p>{state.userInput}</p>
    </main>
    )
}