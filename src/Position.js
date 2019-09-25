import React, {Component} from 'react';

class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPosition: true,
            position: {longitude:0, latitude:0}
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position)=>{
                this.setState({position: [position.coords.longitude, position.coords.latitude]});
                this.setState({counter:0});
            });
            this.props.onChange(this.state.position);
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if (this.state.showPosition) {
            return (<div> {this.state.position[0]} - {this.state.position[1]}</div>);
        }
    }
}

export default Position;