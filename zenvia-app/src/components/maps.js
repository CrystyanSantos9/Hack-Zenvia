import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';


function RawMaps() {
    return (
        <GoogleMap 
            defaultZoom={15} 
            defaultCenter={{lat: -27.5607012, lng: -48.5003837}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(RawMaps))

export default function App() {
    return (
        <div style={{width: '100vw', height: '92.5vh'}}>
            <WrappedMap
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDethIh9zD-IUCTB8jEveaqpazlaGLBM34'}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`}} />}
                mapElement={<div style={{ height: `100%` , display: 'flex' }} />}
            />
        </div>
    )
}
