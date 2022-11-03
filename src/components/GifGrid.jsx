import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category, onRemoveCategory }) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <div className="header-category">
                <h3 className="title-category">{category}</h3>
                <button
                    className="btn-remove"
                    onClick={() => onRemoveCategory(category)}
                >
                    X
                </button>
            </div>

            <div className='card-grid'>
                {
                    images.map(({ id, url, title }) => (
                        <GifItem key={id} {...{ title, url }} />
                    ))
                }
            </div>
        </>
    )
}
