import React, {Component} from 'react';
import {Todo} from "../model/Todo";

type State = {
    isLoading: boolean,
    todoCount: number,
    showLoadMore: boolean
}

type Props = {
    todoList: Todo[]
}

class Main extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isLoading: true,
            todoCount: 3,
            showLoadMore: true
        };
    }

    render() {
        return (
            <div className="section">
                <ul className="collection">
                    {
                        this.props.todoList.slice(0, this.state.todoCount).map((todoItem, index) =>
                            <li key={index} className="collection-item">
                                <p>
                                    <label>
                                        <input type="checkbox" checked={todoItem.isChecked} />
                                        <span>{todoItem.title}</span>
                                    </label>
                                </p>
                            </li>
                        )
                    }
                </ul>
                {
                    (() => {
                        if (this.state.showLoadMore)
                            return <div className="center-align"><button className="btn btn-flat" onClick={this.loadMore.bind(this)}>Load More</button></div>
                    })()
                }

            </div>
        );
    }

    loadMore() {
        let currentTodoCount = this.state.todoCount;
        console.log(`CurrentCount: ${currentTodoCount}`);
        console.log(`ShowLoadMore: ${(currentTodoCount + 3) >= this.props.todoList.length}`);
        this.setState({
            todoCount: currentTodoCount + 3,
            showLoadMore: (currentTodoCount + 3) <= this.props.todoList.length
        })
    }
}

export default Main;