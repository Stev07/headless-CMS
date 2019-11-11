import * as React from "react";
import L from 'leaflet';


export default class Map extends React.Component {
    componentDidMount() {
        let latlng = new L.LatLng(
            50.653844,
            5.686023
            ),
            mymap = L.map("mapid").setView(latlng, 10),
            // eslint-disable-next-line no-unused-vars
            marker = L.marker(latlng).addTo(mymap);

        L.tileLayer(
            "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
            {
                attribution:
                    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: "mapbox.streets",
                accessToken:
                    "pk.eyJ1Ijoic3RldjA3IiwiYSI6ImNqc2RkZm13ZTA2Y3o0OW1kb3N2eGo4bGoifQ.xzYNRvfOYN7zcoU8bnabJA",
            },
        ).addTo(mymap);

};
    render() {
        const mapStyle = {width: "100%", height: "400px"};

        return (
            <div id="mapid" style={mapStyle} data-aos="flip-up"/>
                
        );
    }
}
