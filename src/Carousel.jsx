import React, { useState } from 'react'

const Carousel = ({ images }) => {
    const [active, setActive] = useState(0)
    if (!images) {
        images = ["http://pets-images.dev-apis.com/pets/none.jpg"];
    }

    const handleIndexClick = (e) => {
        setActive(+e.target.dataset.index)
    }


    console.log(active)
    return (
        <div className="carousel">
            <img src={images[active]} alt="animal" />
            <div className="carousel-smaller">
                {images.map((photo, index) => (
                    // eslint-disable-next-line
                    <img
                        key={photo}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                        onClick={handleIndexClick}
                        data-index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;