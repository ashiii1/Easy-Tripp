/*import GoogleMapReact from 'google-map-react';
import ReactStarsRating from 'react-awesome-stars-rating';

//https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png

// Map Component with its props destructured
const Map = ({ places, coordinates, setCoordinates, setBounds }) => {
    return ( 
        <GoogleMapReact
            bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_API_KEY }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e) => {
                // console.log(e);
                // onChange Event sets new Coordinates for Google Map Component
                setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                // onChange Event sets new Bounds for Google Map Component
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
            onChildClick={() => {}}
        >
            {places?.map((place, i) => (
                <div key={i}
                    className="hover:z-30 relative cursor-pointer"
                    lat={Number(place?.latitude)}
                    lng={Number(place?.longitude)}
                >
                    <div className="hidden md:block font-semibold p-1 shadow-md hover:shadow-2xl hover:border-2 hover:border-gray-300 text-center w-fit transition ease-in duration-1000 rounded-sm overflow-hidden bg-white">
                        <p>{ place?.name }</p>

                        { place?.photo && <img src={place?.photo?.images?.small?.url} className="w-20 h-full object-cover" /> }

                        <ReactStarsRating 
                            value={place?.rating} 
                            className="flex w-fit m-auto" size={10} 
                            isEdit={false} 
                            primaryColor="#00afef" 
                            secondaryColor="#e5e7eb" 
                        />
                    </div>

                    <div className="group md:hidden">
                        <svg className="text-cyan-500 h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div className="hidden group-hover:block font-semibold p-1 shadow-md text-center w-fit rounded-sm overflow-hidden bg-white">
                            <p>{ place?.name }</p>

                            { place?.photo && <img src={place?.photo?.images?.small?.url} className="w-full h-full object-cover" /> }
                        </div>
                    </div>
                </div>
            ))}
        </GoogleMapReact>
     );
}
 

export default Map;*/

/*import React from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';

// Map Component
const Map = ({ places, coordinates, setCoordinates, setBounds }) => {
    const mapPlaceholderImage = 'https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png'; // Replace with the actual HTTP link

    return (
        <div className="flex">
            <div className="cards-container">
                {places?.map((place, i) => (
                    <div key={i} className="place-card">
                        <div className="font-semibold p-1 shadow-md hover:shadow-2xl hover:border-2 hover:border-gray-300 text-center w-fit transition ease-in duration-1000 rounded-sm overflow-hidden bg-white">
                            <p>{place?.name}</p>
                            {place?.photo && <img src={place?.photo?.images?.small?.url} className="w-20 h-full object-cover" />}
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
                                    <img src={place?.photo?.images?.small?.url} className="w-full h-full object-cover" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="map-container">
                <img src={mapPlaceholderImage} alt="Map Placeholder" className="map-placeholder" />
            </div>
        </div>
    );
};

export default Map;*/
import GoogleMapReact from 'google-map-react';
import ReactStarsRating from 'react-awesome-stars-rating';

// Map Component with its props destructured
const Map = ({ places, coordinates, setCoordinates, setBounds }) => {
    const rightContainerStyle = {
        backgroundImage: 'url(https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '800%', // Adjust the width as needed
        height: '100vh', // Adjust Height
        position: 'relative',
    };

    return (
        <div className="flex">
            {/* Left Side: Google Map */}
            <GoogleMapReact
                bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={() => {}}
                style={{ width: '50%', height: '100vh' }} // Adjust the width as needed
            >
                {places?.map((place, i) => (
                    <div key={i}
                        className="hover:z-30 relative cursor-pointer"
                        lat={Number(place?.latitude)}
                        lng={Number(place?.longitude)}
                    >
                        {/* ... (rest of your code for displaying place details) ... */}
                    </div>
                ))}
            </GoogleMapReact>

            {/* Right Side: Background Image */}
            <div style={rightContainerStyle}></div>
        </div>
    );
}

export default Map;
