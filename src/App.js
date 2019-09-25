import React, {Component} from 'react';
import 'typeface-roboto';
import './App.css';
import Mapgl from "./Mapgl";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const style = {width:'100vw', height:'100vh'};
        return (
            <div style={style}>
                <Mapgl />
            </div>
        );
    }
}

export default App;


