import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// Map docs https://docs.mapbox.com/mapbox-gl-js/api/markers/

const MapboxExample = () => {
  const mapContainerRef = useRef<any>();
  const mapRef = useRef<any>();

  useEffect(() => {
    mapboxgl.accessToken = token as string;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [-79.4512, 43.6568],
      zoom: 13,
    });

    mapRef.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        //@ts-ignore
        mapboxgl: mapboxgl,
      }),
    );

    return () => mapRef.current.remove();
  }, []);

  return <div ref={mapContainerRef} className="h-[90vh] w-full" />;
};

export default MapboxExample;
