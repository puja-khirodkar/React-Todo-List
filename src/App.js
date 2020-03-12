import React from 'react';
import './App.css';
import Main from "./component/Main";

function App() {
    const todos = [
        {title: "Wake up", isChecked: false},
        {title: "Brush", isChecked: false},
        {title: "Breakfast", isChecked: true},
        {title: "Bath", isChecked: false},
        {title: "Toilet", isChecked: false},
        {title: "Drink Tea", isChecked: false},
        {title: "Get Ready", isChecked: true},
        {title: "Go to Office", isChecked: false},
        {title: "Work a little", isChecked: false},
        {title: "Lunch break", isChecked: false},
        {title: "Work a little", isChecked: false},
        {title: "Sandhyakal cha nashta", isChecked: true},
        {title: "Workout a little in office gym", isChecked: false},
        {title: "Take a short break", isChecked: false},
        {title: "Come home", isChecked: false},
        {title: "Sleep", isChecked: false},
        {title: "Enjoy life in office!!!", isChecked: true},
    ];

    return (
        <div className="App">
            <nav className="App-header">
                <nav>
                    <div className="nav-wrapper container">
                        <a href="#" className="brand-logo">PujaChan's ToDos</a>
                    </div>
                </nav>
            </nav>
            <main>
                <div className="container">
                    <Main todoList={todos}/>
                </div>
            </main>
        </div>
    );
}

export default App;
