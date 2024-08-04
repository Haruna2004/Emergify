import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import useHospitalStore from "@/lib/store/useHospital";

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// Map docs https://docs.mapbox.com/mapbox-gl-js/api/markers/
// https://korywka.github.io/mapbox-controls/preview/

const HospitalMap = () => {
  const mapContainerRef = useRef<any>();
  const mapRef = useRef<any>();
  const geolocateRef = useRef<any>();
  const [currLocation, setCurrLocation] = useState<any>({});
  const { updateMapLocation } = useHospitalStore();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      setCurrLocation({
        latitude: lat,
        longitude: long,
      });
      console.log(lat, long);
      updateMapLocation([long, lat]);

      geolocateRef.current.trigger();
    });
  }, [updateMapLocation]);

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

    geolocateRef.current = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    mapRef.current.addControl(geolocateRef.current);

    return () => mapRef.current.remove();
  }, []);

  return <div ref={mapContainerRef} className="h-[50vh] w-full md:h-[100vh]" />;
};

export default HospitalMap;
