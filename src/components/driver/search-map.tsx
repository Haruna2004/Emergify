"use client";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef, useState } from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
//@ts-ignore
import Geocoder from "react-map-gl-geocoder";

type Props = {};

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function SearchMap({}: Props) {
  const [viewport, setViewport] = useState<any>({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    transitionDuration: 100,
  });
  const [searchResultLayer, setSearchResult] = useState(null);
  const mapRef = useRef();

  const handleOnResult = (event: any) => {
    console.log(event.result);
  };

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
          mapboxAccessToken={token}
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
