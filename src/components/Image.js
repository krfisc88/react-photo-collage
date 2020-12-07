import React from "react";

const Image = ({image: {id, urls, alt_description}}) => {
    return (
        <img className="collage__image" key={id} id={id} src={urls.small} alt={alt_description} />
    );
}

export default Image;