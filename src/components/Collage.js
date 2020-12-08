import "./Collage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";

const Collage = () => {
    const [images, setImages] = useState([]);

    // Request image objects from API and set image array on receipt
    useEffect(() => {
        const getImages = async () => {
            const { data } = await axios.get("https://api.unsplash.com/photos/random", {
                params: {
                    count: 30,
                    orientation: "landscape"
                },
                headers: {
                    Authorization: "Client-ID C-Wt2vPcFiOGgLrL_7sM8Ho4A-QfBU0PwBMRHMQyIO8"
                }
            });
            setImages(data);
        };
        getImages();
    }, []);

    return (
        <>
            <h1 className="collage__title">Triple <br /><span>Arrow</span> <br /><span>Co.</span></h1>
            <div className="collage">
                {images.map(image => {
                    return <Image key={image.id} image={image} />
                }
                )}
            </div>
        </>
    );
}

export default Collage;