import React, {Component} from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    }
  }

  render() {
    const style = {
      flex: '1 1 0'
    };

    if (this.props.show) {
      return (<div style={style}>{this.props.msg}</div>);
    } else {
      return (<div style={style}></div>);
    }
  }
}

export default Info;
