import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
          bootstrapURLKeys={{ key: SUA_API_KEY }}
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