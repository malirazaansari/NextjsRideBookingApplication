// import React, { useEffect, useState } from "react";
// import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

// const defaultCenter = {
//   lat: 51.509865,
//   lng: -0.118092,
// };

// // Dark mode style
// const darkModeStyle = [
//   { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
//   { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
//   { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
//   { "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121" }] },
//   { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#383838" }] },
//   { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#484848" }] },
//   { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#0e0e0e" }] }
// ];

// const GoogleMapComponent = ({ isVisible, pickupPlace, dropoffPlace, viaPlaces, isWaitAndReturn, isLoaded }) => {
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     if (isLoaded && pickupPlace && dropoffPlace) {
//       const waypoints = viaPlaces
//         .filter((place) => place && place.geometry && place.geometry.location)
//         .map((place) => ({
//           location: {
//             lat: place.geometry.location.lat(),
//             lng: place.geometry.location.lng(),
//           },
//           stopover: true,
//         }));

//       const directionsService = new window.google.maps.DirectionsService();
//       directionsService.route(
//         {
//           origin: {
//             lat: pickupPlace.geometry.location.lat(),
//             lng: pickupPlace.geometry.location.lng(),
//           },
//           destination: isWaitAndReturn
//             ? {
//                 lat: pickupPlace.geometry.location.lat(),
//                 lng: pickupPlace.geometry.location.lng(),
//               }
//             : {
//                 lat: dropoffPlace.geometry.location.lat(),
//                 lng: dropoffPlace.geometry.location.lng(),
//               },
//           waypoints: isWaitAndReturn
//             ? [
//                 {
//                   location: {
//                     lat: dropoffPlace.geometry.location.lat(),
//                     lng: dropoffPlace.geometry.location.lng(),
//                   },
//                   stopover: true,
//                 },
//                 ...waypoints,
//               ]
//             : waypoints,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             setDirections(result);
//           } else {
//             console.error(`Error fetching directions ${result}`);
//           }
//         }
//       );
//     }
//   }, [isLoaded, pickupPlace, dropoffPlace, viaPlaces, isWaitAndReturn]);

//   if (!isLoaded) {
//     return <div>Loading...</div>; // Show a loading state until the API is loaded
//   }

//   return (
//     <div className={`fixed top-0 right-0 h-screen w-1/2 bg-gray-100 shadow-lg transition-transform duration-300 ${isVisible ? "translate-x-0" : "translate-x-full"}`}>
//       <div className="w-full h-full">
//         <GoogleMap
//           mapContainerStyle={{ width: "100%", height: "100%" }}
//           center={pickupPlace?.geometry?.location || defaultCenter}
//           zoom={10}
//           options={{ styles: darkModeStyle }} // Apply dark mode styles
//         >
//           {pickupPlace && <Marker position={{ lat: pickupPlace.geometry.location.lat(), lng: pickupPlace.geometry.location.lng() }} />}
//           {viaPlaces
//             .filter((place) => place && place.geometry && place.geometry.location)
//             .map((place, index) => (
//               <Marker key={index} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />
//             ))}
//           {dropoffPlace && <Marker position={{ lat: dropoffPlace.geometry.location.lat(), lng: dropoffPlace.geometry.location.lng() }} />}
//           {directions && <DirectionsRenderer directions={directions} />}
//         </GoogleMap>
//       </div>
//     </div>
//   );
// };

// export default GoogleMapComponent;



import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

const defaultCenter = {
  lat: 51.509865,
  lng: -0.118092,
};

// ❌ Removed darkModeStyle — we no longer use this for light mode
// const darkModeStyle = [ ... ];

const GoogleMapComponent = ({
  isVisible,
  pickupPlace,
  dropoffPlace,
  viaPlaces,
  isWaitAndReturn,
  isLoaded,
}) => {
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (isLoaded && pickupPlace && dropoffPlace) {
      const waypoints = viaPlaces
        .filter((place) => place && place.geometry && place.geometry.location)
        .map((place) => ({
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
          stopover: true,
        }));

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: {
            lat: pickupPlace.geometry.location.lat(),
            lng: pickupPlace.geometry.location.lng(),
          },
          destination: isWaitAndReturn
            ? {
                lat: pickupPlace.geometry.location.lat(),
                lng: pickupPlace.geometry.location.lng(),
              }
            : {
                lat: dropoffPlace.geometry.location.lat(),
                lng: dropoffPlace.geometry.location.lng(),
              },
          waypoints: isWaitAndReturn
            ? [
                {
                  location: {
                    lat: dropoffPlace.geometry.location.lat(),
                    lng: dropoffPlace.geometry.location.lng(),
                  },
                  stopover: true,
                },
                ...waypoints,
              ]
            : waypoints,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`Error fetching directions ${result}`);
          }
        }
      );
    }
  }, [isLoaded, pickupPlace, dropoffPlace, viaPlaces, isWaitAndReturn]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading state until the API is loaded
  }

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-1/2 bg-[var(--color-background)] shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full h-full">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={pickupPlace?.geometry?.location || defaultCenter}
          zoom={10}
          options={{
            // ✅ Removed darkModeStyle
            // ✅ Keeping default light styling (Google Maps is light by default)
            disableDefaultUI: false,
            zoomControl: true,
          }}
        >
          {pickupPlace && (
            <Marker
              position={{
                lat: pickupPlace.geometry.location.lat(),
                lng: pickupPlace.geometry.location.lng(),
              }}
            />
          )}
          {viaPlaces
            .filter((place) => place && place.geometry && place.geometry.location)
            .map((place, index) => (
              <Marker
                key={index}
                position={{
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                }}
              />
            ))}
          {dropoffPlace && (
            <Marker
              position={{
                lat: dropoffPlace.geometry.location.lat(),
                lng: dropoffPlace.geometry.location.lng(),
              }}
            />
          )}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
