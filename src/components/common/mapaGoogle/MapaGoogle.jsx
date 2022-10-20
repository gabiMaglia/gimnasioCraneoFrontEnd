import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const MapaGoogle = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
  });

  function Map() {
    return (
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "300px",
        }}
        zoom={15}
        center={{
          lat: -32.857914925485666,
          lng: -60.69858172883605,
        }}

        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
        <MarkerF
          position={{ lat:-32.857889730489106, lng: -60.6985559645807 }}
        />

      </GoogleMap>
    );
  }

  if (!isLoaded) return <div></div>;
  return (
    <Map />
    
  );
};

export default MapaGoogle;
