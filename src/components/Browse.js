import { useEffect } from "react";
import Header from "./Header";


const Browse = ()=>{

    const getNowlayingMovies = async()=>{

        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer Token'
  }
    }

    const data = await fetch(url,options);

    const json = await data.json();

    console.log(json);

}

useEffect(()=>{
    getNowlayingMovies()
},[])

    return(
        <div>
            <Header />
            <h1> Browse</h1>
        </div>
    )
}

export default Browse;
