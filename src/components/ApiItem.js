import React, { Component } from 'react';
// import { useParams } from "react-router-dom";


// const ApiItem = () => {
//     let id = useParams();
//     console.log(id)
//     return (
//         <div className="test"></div>
//     );
// }

// export default ApiItem;

class ApiItem extends Component {
    state = {
        data: {},
        isLoaded: false
    }
    componentDidMount() {
        console.log(this.props.match.params)
        // letzter teil hängt von dem :name in der App ab
        let id = this.props.match.params.finn
        console.log(id)
        // console.log(this.props.match.params.myId)
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoaded: true });
            })
    }


    render() {

        return (
            <div className="item">
                {this.state.isLoaded ?
                    <div>
                        Completet: {this.state.data.completed ? "Ja" : "Nein"} <br />
                        ID: {this.state.data.id}<br />
                        Title: {this.state.data.title}<br />
                        userId: {this.state.data.userId}<br />
                    </div>
                    : "LOADING"}
            </div>
        );
    }
}

export default ApiItem;