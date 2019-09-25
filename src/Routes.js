import React, {Component} from 'react';
import {getroutesjson} from './rest_routes';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: []
    };
  }

  getRoutes() {
    //Get routes from server
    const cuid = 'test';
    const remoteServer = 'https://wandelappbackend-v5.herokuapp.com';
    getroutesjson(remoteServer + '/routes?cuid=' + cuid)
      .then(
        (routesjson) => {
          this.setState({routes: routesjson});
        },
        (reason) => {
          // Error retreiving routes!
          console.log(reason);
        }
      )
      .catch(
        (e) => {
          console.log(e);
        }
      )
    ;
  }

  componentDidMount() {
    this.getRoutes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.routes === []) {
      this.getRoutes();
    }
  }

  render() {
    const style = {
      flex: '1 1 0'
    };
    return (
      <div style={style}>
        <ul>
          {this.state.routes.map(route =>
            <li key={route.data._id}>{route.data.json.features[0].properties.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Routes;
