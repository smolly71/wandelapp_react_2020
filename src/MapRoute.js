import React, {Component} from 'react';
import ReactMapboxGl, {GeoJSONLayer, Layer, Feature } from "react-mapbox-gl";
import Position from './Position';
  import mapkey from "./modules/keytext";

// Meer over mapgl in react:
// https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md

const Map = ReactMapboxGl({
  accessToken: mapkey()
});


class MapRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      positionMap: [5.2416815, 51.5885582],
      positionMarker: [5.2416815, 51.5885582],
      geo_options: {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 15000
      }
    }
  }

  handlePositionChange(position){
    if (position[0] && position[1]) {
      this.setState({positionMarker: [position[0], position[1]]});
      this.setState({positionMap: [position[0], position[1]]});
      this.props.onMessage(this.state.positionMarker);
    }
  }

  render() {
    const style = {
      flex: '1 1 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    };

    return (
      <div style={style}>
        <Position onChange={this.handlePositionChange.bind(this)} refreshRate={this.state.geo_options.timeout} />
        <Map style="mapbox://styles/mapbox/streets-v8" center={this.state.positionMap}>
          <GeoJSONLayer
            lineLayout={{"line-join": "round", "line-cap": "round"}}
            linePaint={{"line-color": "#ff0000", "line-width": 8}}
            data={this.props.geojson}>
          </GeoJSONLayer>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={this.state.positionMarker}/>
          </Layer>
        </Map>
      </div>
    );
  }
}

export default MapRoute;
