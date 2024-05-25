import { useContext, useEffect, useState } from "react";
import { getPlacesByLatLng } from "../api";
import { Footer, Navbar } from "../components";
import { MainContext } from "../context/MainContext";
import ReactStarsRating from 'react-awesome-stars-rating'
import { AttractionsListLoader } from "../components/loaders";
import axios from "axios";
import { Link } from "react-router-dom";

const AttractionsList = () => {
    const { coordinates, isLoading, setIsLoading } = useContext(MainContext);
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        let source = axios.CancelToken.source();
        setIsLoading(true);
        
        getPlacesByLatLng('attractions', coordinates.lat, coordinates.lng, { limit: 50 }, source)
            .then(data => {
                const filteredData = data.filter(item => item.num_reviews !== 0 && item.location_id !== 0 && item.name);
                const sortedData = filteredData.slice(0, 30); // Take the first 30 attractions
                setAttractions(sortedData);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching attractions:', error);
                setIsLoading(false);
            });

        return () => {
            source.cancel();
        };
    }, [coordinates]);

    return ( 
        <>
            <Navbar border />
            <div className="container mx-auto pb-4">
                <div className="text-center my-10">
                    <h1 className="font-semibold text-lg md:text-3xl">
                        Attractions near you
                    </h1>
                </div>
                { !attractions.length || isLoading ? (
                    <AttractionsListLoader />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        { attractions.map((attraction, i) => (
                            <div key={i} className="bg-white rounded-md shadow-md overflow-hidden">
                                <Link to={`/attractions/${attraction.location_id}`}>
                                    <img
                                        src={ attraction.photo ? attraction.photo.images.large.url : 'https://media-cdn.tripadvisor.com/media/photo-s/22/d9/7b/42/this-image-has-been-removed.jpg'}
                                        alt=""
                                        className="w-full h-40 object-cover"
                                    />
                                </Link>
                                <div className="p-4">
                                    <h2 className="font-semibold text-lg truncate">{ attraction.name }</h2>
                                    <p className="flex items-center text-xs text-gray-500">
                                        <ReactStarsRating 
                                            value={Number(attraction.rating)} 
                                            size={18} 
                                            className="flex mr-2"
                                            isEdit={false} 
                                            primaryColor="#00afef" 
                                            secondaryColor="#e5e7eb" 
                                        />
                                        { attraction.num_reviews } Reviews
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        { attraction.subtype.map((type, i) => (
                                            <span key={i} className="mr-1">{ type.name }</span>
                                        )) }
                                    </p>
                                </div>
                            </div>
                        )) }
                    </div>
                )}
            </div>
            <Footer />
        </>
     );
}

export default AttractionsList;
