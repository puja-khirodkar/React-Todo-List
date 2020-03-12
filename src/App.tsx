import React from 'react';
import './App.css';
import Main from "./component/Main";
import {Todo} from "./model/Todo";

type State = {
    todoList: Todo[]
}

type Props = {}

class App extends React.Component<Props, State> {

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            todoList: [
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
            ]
        }
    }

    setChecked(position: number) {
        const currentTodoList = this.state.todoList;
        this.setState({
            todoList: currentTodoList.map((x, index) => position !== index ? x : {title: x.title, isChecked: true})
        });

    };

    render() {
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
                        <Main todoList={this.state.todoList} handleCheck={this.setChecked.bind(this)}/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
