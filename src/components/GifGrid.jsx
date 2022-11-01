import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, []);


    return (
        <>
            <h3>{category}</h3>

            <div className='card-grid'>
                {
                    images.map(({id, url, title}) => (
                        <GifItem key={id} {...{title, url}} />
                    ))
                }
            </div>
        </>
    )
}
