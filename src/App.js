import React, {Component} from 'react';
import 'typeface-roboto';
import './App.css';
import Mapgl from "./Mapgl";
import Routes from "./Routes";
import Info from "./Info";
import UploadRoute from './UploadRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg:'hoi'
    };
  }

  handleInfoChange(msg){
    this.setState({msg:msg});
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    };
    return (
      <div style={style}>
        <Info show={true} msg={this.state.msg}  />
        <Mapgl onChange={this.handleInfoChange.bind(this)} />
        <UploadRoute />
        <Routes />
      </div>
    );
  }
}

export default App;


