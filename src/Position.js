import React, {Component} from 'react';

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [],
      refreshrate: this.props.refreshRate || 4000
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({position: [position.coords.longitude, position.coords.latitude]});
      });
      this.props.onChange(this.state.position);
    }, this.state.refreshrate);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.props.showPosition) {
      return (<div>{this.state.position[0]} - {this.state.position[1]}</div>);
    } else {
      return (<div></div>);
    }
  }
}

export default Position;
