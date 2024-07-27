"use client";
import React, { useEffect, useState } from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {};

export default function MapWrapper({}: Props) {
  const [viewport, setViewport] = useState<any>({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 12,
      });
    });
  });
  return (
    <div className="h-[90vh] w-full">
      {viewport.latitude && viewport.longitude && (
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <Marker longitude={viewport.longitude} latitude={viewport.latitude} />
        </Map>
      )}
    </div>
  );
}
