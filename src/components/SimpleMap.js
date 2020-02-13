import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

//const latitude = localStorage.getItem('latitude');
//const longitude = localStorage.getItem('latitude')

export default function SimpleMap({latitude, longitude}){
  console.log(latitude, longitude);
  if(!latitude || !longitude){
    return (
      <p>Carregando...</p>
    );
  }
  return (
    <div style={{ height: '200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAmo8Do4I4IgLZL6FZWtTPBqOs8wHIkPs4' }}
          defaultCenter={{
            lat: parseFloat(latitude),
            lng: parseFloat(longitude)
          }}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={latitude}
            lng={longitude}
            text="Filial"
          />
        </GoogleMapReact>
      </div>
  );
}
// class SimpleMap extends Component {
//   static defaultProps = {
    // center: {
    //   lat: -16.471769,
    //   lng: -54.609074
    // },
//     zoom: 20
//   };

//   constructor(props) {
//     super(props);
//     this.state = {latitude: props.latitude, longitude: props.longitude};
//   }

//   render() {
//     console.log(this.state);
//     const {latitude, longitude} = this.props;
//     console.log({lat: latitude, lng: longitude});
//     console.log({lat: parseFloat(latitude), lng: parseFloat(longitude)});
    
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '200px', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyAmo8Do4I4IgLZL6FZWtTPBqOs8wHIkPs4' }}
//           defaultCenter={{lat: parseFloat(latitude), lng: parseFloat(longitude)}}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={latitude}
//             lng={longitude}
//             text="Filial"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;