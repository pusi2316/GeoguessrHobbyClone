import { useState } from "react";
import {
  Marker,
  APIProvider,
  Map,
} from "@vis.gl/react-google-maps";

function MapSite() {
  const position = { lat: 37.77860230324646, lng: -122.42024752292937 };
  const [marker, setMarker] = useState();

  const onMapClick = (e) => {
    setMarker({
      lat: e.detail.latLng.lat,
      lng: e.detail.latLng.lng,
    });
  };

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <div style={{ height: "100vh" }}>
        <Map
          defaultCenter={position}
          defaultZoom={15}
          mapId={"357b1a173f507cfc"}
          onClick={onMapClick}
        >
          {marker && (
            <Marker
              position={{
                lat: marker.lat,
                lng: marker.lng,
              }}
            />
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default MapSite;
