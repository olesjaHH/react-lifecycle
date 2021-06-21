import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

import ApiItem from './ApiItem';
class Api extends Component {
    state = {
        // State für die Daten des Arrays
        data: [],
        // State festhält ob die Daten geladen wurden. Wichtig, denn der API braucht manchmal etwas Zeit, bis er die Daten sendet
        isLoaded: false
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => {
                // Setzen die Daten und ändern den State isLoaded auf true
                this.setState({ data: json, isLoaded: true });

                // Liste 
                //     [
                //         {
                //         id: "xyz",
                //         describtion: "Kurzer Text"
                //     }, 
                //         {
                //         id: "xyz123",
                //         describtion: "Kurzer Text"
                //     }, 
                // ]
            })
    }
    render() {
        return (
            <div className="api">
                {/* Das map wird erst ausgeführt, wenn der isLoaded-State true ist. Sonst wird Loading gezeigt */}
                {this.state.isLoaded ?
                    this.state.data.map((ele, i) => <div>
                        <Link to={`/api/${ele.id}`}>{ele.title}</Link>
                    </div>)
                    : "Loading ..."
                }
            </div>
        );
    }
}

export default Api;