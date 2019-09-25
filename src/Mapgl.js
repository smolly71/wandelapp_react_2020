import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Position from './Position';

// Meer over mapgl in react:
// https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md

class Mapgl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: [5.2416815, 51.5885582]
        }
    }

    handlePositionChange(position){
        console.log("Position:",position);
        if (position.coords) {
            this.setState({position: [position.coords.longitude, position.coords.latitude]});
        }
    }

    componentDidMount(e){
        console.log(e);
    }

    render() {
        const Map = ReactMapboxGl({
            accessToken: "pk.eyJ1IjoiZHZyaWV0IiwiYSI6ImNqajVhdmM1bjFyeTQza3FneGFsZGh2bnEifQ.XuWz5D1wdQAio7AfG1CuFg"
        });

        // const geo_options = {
        //     enableHighAccuracy: true,
        //     maximumAge: 1000,
        //     timeout: 10000
        // };

        //Get routes from server and show these as choices
        // getroutesjson(remoteserver + '/routes?cuid=' + cuid)
        //     .then(
        //         (routesjson) => {
        //             this.setState("hikes", routesjson);
        //         },
        //         (reason) => {
        //             // Error retreiving routes!
        //             console.log(reason);
        //         }
        //     )
        //     .catch(
        //         (e) => {
        //             console.log(e);
        //         }
        //     )
        // ;

        //Update device location on map
        // navigator.geolocation.watchPosition(map.geo_success.bind(map), null, geo_options);

        // eslint-disable-next-line
        return (
            <div>
                <Position onChange={this.handlePositionChange.bind(this)} />
                <Map style="mapbox://styles/mapbox/streets-v8" center = {this.state.position}>

                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}>
                        <Feature coordinates={this.state.position}/>
                    </Layer>

                </Map>
            </div>
        );
    }
}

export default Mapgl;