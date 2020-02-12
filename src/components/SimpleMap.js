import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

//const latitude = localStorage.getItem('latitude');
//const longitude = localStorage.getItem('latitude')

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -16.471769,
      lng: -54.609074
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAmo8Do4I4IgLZL6FZWtTPBqOs8wHIkPs4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-16.471769}
            lng={-54.609074}
            text="Filial"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;