// "use client";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "mapbox-gl/dist/mapbox-gl.css";
// import React, { useEffect, useRef, useState } from "react";
// import Map, { GeolocateControl, Marker } from "react-map-gl";
// import DeckGL, { GeoJsonLayer } from "deck.gl";
// //@ts-ignore
// // import Geocoder from "react-map-gl-geocoder";

// type Props = {};

// const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// export default function SearchMap({}: Props) {
//   const [viewport, setViewPort] = useState<any>({
//     latitude: 0,
//     longitude: 0,
//     zoom: 1,
//     transitionDuration: 100,
//   });
//   const [searchResultLayer, setSearchResult] = useState<any>(null);
//   const mapRef = useRef();

//   const handleOnResult = (event) => {
//     console.log(event.result);
//     setSearchResult(
//       new GeoJsonLayer({
//         id: "search-result",
//         data: event.result.geometry,
//         getFillColor: [255, 0, 0, 128],
//         getRadius: 1000,
//         pointRadiusMinPixels: 10,
//         pointRadiusMaxPixels: 10,
//       }),
//     );
//   };

//   //
//   const handleGeocoderViewportChange = (viewport) => {
//     const geocoderDefaultOverrides = { transitionDuration: 1000 };
//     console.log("Updating");
//     return setViewPort({
//       ...viewport,
//       ...geocoderDefaultOverrides,
//     });
//   };

//   //
//   useEffect(() => {
//     console.log({ viewport });
//   }, [viewport]);

//   return (
//     <div className="h-[90vh] w-full">
//       <Map
//         ref={mapRef}
//         {...viewport}
//         mapboxAccessToken={token}
//         onViewportChange={setViewPort}
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//       >
//         {/* <Geocoder
//           mapRef={mapRef}
//           onResult={handleOnResult}
//           onViewportChange={handleGeocoderViewportChange}
//           mapboxAccessToken={token}
//           position="top-left"
//         /> */}
//       </Map>
//       <DeckGL {...viewport} layers={[searchResultLayer]} />
//     </div>
//   );
// }

export default function SearchMap() {
  return <div>Searablemap</div>;
}
