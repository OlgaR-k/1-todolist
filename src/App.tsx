import React from 'react';
import './App.css';
import {Toodolist} from "./Toodolist";

function App() {
    // const shapka = 'What to learn';
    const shapka = [
        'What to learn',
        'Songs',
        'Books',
    ];

    const task1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React&JS', isDone: false},
    ];

    const task2 = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am happy', isDone: true},
        {id: 3, title: 'Yo', isDone: false},
        // {id: 4, title: 'Yo', isDone: false},
    ];

    return (
        <div className="App">
            <Toodolist shapka={shapka[0]} tasks={task1}/>
            <Toodolist shapka={shapka[1]}  tasks={task2}/>
            {/*<Toodolist shapka={shapka[2]}  tasks={task1}/>*/}
        </div>
    );
}

export default App;
