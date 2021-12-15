import React from 'react';
export default function Appz(){
    const [userInput, setUserInput] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState(false);

    const increment = (e)=> setCount(prevCount => prevCount+1);
    const decrement = (e)=> setCount(prevCount => prevCount -1);
    const colorChange = (e)=> setColor(prev => !prev)
    const getUserInput = (e) => setUserInput(e.target.value )

    return(
        <main className="App" style={{ color: color ? 'red' : 'green' }}>
      <input
        type="text"
        value={userInput}
    
        onChange={getUserInput}
      />
      <br /><br />
      <p>{count}</p>
      <section>
       <button onClick={decrement}>-</button>
       <button onClick={increment}>+</button>
       <button onClick={colorChange} style={{backgroundColor: color ? 'red' : 'green'}}>Color</button>
      </section>
      <br /><br />
      <p>{userInput}</p>
    </main>
    )
}