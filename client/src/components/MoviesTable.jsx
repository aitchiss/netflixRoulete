import React from 'react'
import MovieTableCell from './MovieTableCell'
const MoviesTable = (props) => {

  const cells = props.movies.map((movie)=>{

    return <MovieTableCell value={movie} key={movie.unit}/>

  }) 

  return(
    <div>
      {cells}
    </div>
    )

  }



export default MoviesTable