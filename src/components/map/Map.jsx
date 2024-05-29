// import GoogleMapReact from 'google-map-react';
// import ReactStarsRating from 'react-awesome-stars-rating';

// const Map = ({ places, coordinates, setCoordinates, setBounds }) => {
//     const rightContainerStyle = {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundImage: `url('https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg')`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         zIndex: -1,
//     };

//     return (
//         <div className="relative" style={{ width: '100%', height: '100vh' }}>
//             <div style={rightContainerStyle}></div>
//             <div style={{ width: '100%', height: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_API_KEY }}
//                     defaultCenter={coordinates}
//                     center={coordinates}
//                     defaultZoom={14}
//                     margin={[50, 50, 50, 50]}
//                     options={{ disableDefaultUI: true, zoomControl: true }}
//                     onChange={(e) => {
//                         setCoordinates({ lat: e.center.lat, lng: e.center.lng });
//                         setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//                     }}
//                     onChildClick={() => {}}
//                 >
//                     {places?.map((place, i) => (
//                         <div
//                             key={i}
//                             className="hover:z-30 relative cursor-pointer"
//                             lat={Number(place?.latitude)}
//                             lng={Number(place?.longitude)}
//                         >
//                             <div className="hidden md:block font-semibold p-1 shadow-md hover:shadow-2xl hover:border-2 hover:border-gray-300 text-center w-fit transition ease-in duration-1000 rounded-sm overflow-hidden bg-white">
//                                 <p>{place?.name}</p>
//                                 {place?.photo && (
//                                     <img
//                                         src={place?.photo?.images?.small?.url}
//                                         className="w-70 h-full object-cover"
//                                     />
//                                 )}
//                                 <ReactStarsRating
//                                     value={place?.rating}
//                                     className="flex w-fit m-auto"
//                                     size={10}
//                                     isEdit={false}
//                                     primaryColor="#00afef"
//                                     secondaryColor="#e5e7eb"
//                                 />
//                             </div>
//                             <div className="group md:hidden">
//                                 <svg
//                                     className="text-cyan-500 h-7 w-7"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 20 20"
//                                     fill="currentColor"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                                 <div className="hidden group-hover:block font-semibold p-1 shadow-md text-center w-fit rounded-sm overflow-hidden bg-white">
//                                     <p>{place?.name}</p>
//                                     {place?.photo && (
//                                         <img
//                                             src={place?.photo?.images?.small?.url}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </GoogleMapReact>
//             </div>
//         </div>
//     );
// };

// export default Map;

import GoogleMapReact from 'google-map-react';
import ReactStarsRating from 'react-awesome-stars-rating';

const Map = ({ places, coordinates, setCoordinates, setBounds }) => {
    const rightContainerStyle = {
        position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
        backgroundImage: `url('https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg')`,
       
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       zIndex: -1
        
    };

    return (
        <div className="flex">
            <div style={{ width: '120%', height: '100vh' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_API_KEY }}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={''}
                    onChange={(e) => {
                        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                    }}
                    onChildClick={() => {}}
                >
                    {places?.map((place, i) => (
                        <div
                            key={i}
                            className="hover:z-30 relative cursor-pointer"
                            lat={Number(place?.latitude)}
                            lng={Number(place?.longitude)}
                        >
                            <div className="hidden md:block font-semibold p-1 shadow-md hover:shadow-2xl hover:border-2 hover:border-gray-300 text-center w-fit transition ease-in duration-1000 rounded-sm overflow-hidden bg-white">
                                <p>{place?.name}</p>
                                {place?.photo && (
                                    <img
                                        src={place?.photo?.images?.small?.url}
                                        className="w-70 h-full object-cover"
                                    />
                                )}
                                <ReactStarsRating
                                    value={place?.rating}
                                    className="flex w-fit m-auto"
                                    size={10}
                                    isEdit={false}
                                    primaryColor="#00afef"
                                    secondaryColor="#e5e7eb"
                                />
                            </div>
                            <div className="group md:hidden">
                                <svg
                                    className="text-cyan-500 h-7 w-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div className="hidden group-hover:block font-semibold p-1 shadow-md text-center w-fit rounded-sm overflow-hidden bg-white">
                                    <p>{place?.name}</p>
                                    {place?.photo && (
                                        <img
                                            src={place?.photo?.images?.small?.url}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </GoogleMapReact>
            </div>
            <div style={rightContainerStyle}></div>
        </div>
    );
};

export default Map;
