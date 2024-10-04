
import { useEffect, useState } from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async()=> {
        const json = await (
            await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(()=>{
        getMovies();
    },[]);
    return (
    <div>
        {loading ? <strong>Loading...</strong>: null}
    </div>
    );
}

export default App;