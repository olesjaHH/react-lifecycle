import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from './ToDoItem';



class ToDo extends Component {
    state = {
        toDoData: [],
        input: ""
    }
    componentDidMount() {
        const data = localStorage.getItem('data');
        console.log(data)
        if (data !== null) {
            this.setState({ toDoData: JSON.parse(data) });
        }
    }
    componentDidUpdate(prevProps) {
        // Immer wenn sich die Componente ändert wird jetzt localStorage aufgerufen!
        localStorage.setItem('data', JSON.stringify(this.state.toDoData));
    }

    handleInput = (e) => {
        // console.log(e)
        // console.log(e.target.value)
        this.setState({ input: e.target.value });
    }
    handleAdd = () => {
        this.setState({
            toDoData: [...this.state.toDoData, {
                toDoText: this.state.input,
                id: uuidv4(),
                isDone: false
            }]
        }, () => {
            this.setState({ input: "" })


            // Local Storage schreiben
            // localStorage.setItem('data', JSON.stringify(this.state.toDoData));
        });



    }
    handleCheckbox = (id) => {
        console.log("Checkbox", id)
        let temp = [...this.state.toDoData]
        let temp2 = temp.map(ele => {
            if (ele.id === id) {
                console.log("ID STIMMT")
                console.log(ele)
                return {
                    // id: ele.id,
                    // toDoText: ele.toDoText,
                    ...ele,
                    isDone: !ele.isDone
                }
            } else {
                console.log("Stimmt nicht")
                return ele
            }
        })
        this.setState({ toDoData: temp2 }
            //     , () => {
            //     localStorage.setItem('data', JSON.stringify(this.state.toDoData));
            // }
        );
    }
    handleDelete = (id) => {
        console.log("Delete", id)
        let temp = [...this.state.toDoData]
        let toDoData = temp.filter(ele => {
            if (ele.id !== id) {
                return ele
            }
        })
        console.log(toDoData)
        // this.setState({ toDoData: toDoData  });
        this.setState({ toDoData }
            //     , () => {
            //     localStorage.setItem('data', JSON.stringify(this.state.toDoData));
            // }
        );
    }
    render() {
        return (
            <>
                {this.state.toDoData.map(ele => <ToDoItem
                    data={ele}
                    key={ele.id}
                    handleCheckbox={this.handleCheckbox}
                    handleDelete={this.handleDelete}
                />)}
                <div className="to-do">
                    <input type="text" value={this.state.input} onChange={(e) => this.handleInput(e)} />
                    <button onClick={this.handleAdd}>Senden</button>
                </div>
            </>
        );
    }
}

export default ToDo;