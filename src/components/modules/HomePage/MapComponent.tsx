"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapComponent = () => {
  // Coordinates for Mirpur, Dhaka
  const position = { lat: 23.8223, lng: 90.3654 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <div
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <Map
          zoom={14}
          center={position}
          mapId={"YOUR_MAP_ID"}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={position}>
            <FaMapMarkerAlt className="text-4xl text-[#0aa9a2]" />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapComponent;
