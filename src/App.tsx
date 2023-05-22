import React, {useState} from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(current => current + 1);
    }

    return (
        <div className="App">
            <p>
                <strong>Counter:</strong> {counter}
            </p>
            <button onClick={increment}>INCREMENT</button>
        </div>
    );
}

export default App;
