import React, { useEffect, useRef, useState } from "react";
import Mapbox, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";

import { getCenter } from "geolib";

function Maps({ searchResults }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  // transdform search results data into
  // { latitude: 52.516272, longitude: 13.377722 },
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibG1ubm9uc28iLCJhIjoiY2xwNGtiMGRoMWRkZjJrczZpNHV5ZmNyNyJ9.cF61NTNCyhPZlClPblqsHg"; // Replace with your Mapbox token

    const map = new mapboxgl.Map({
      container: document.getElementById("map"),
      attributionControls: false,
      style: "mapbox://styles/lmnnonso/clp4myknr00cj01qx36id3v4u", // style URL
      center: [center.longitude, center.latitude], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    return () => map.remove();
  }, []);

  // Add markers to the map

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }} />;
    </>
  );
}

export default Maps;
