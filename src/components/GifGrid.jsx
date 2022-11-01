export const GifGrid = ({ category }) => {

    const gifsFetch = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_APP_GIF_KEY}=${category}&limit=10`;
        const resp = await fetch(url);

        const { data } = await resp.json();   
    }

    return (
        <>
            <h1>gola</h1>
        </>
    )
}
