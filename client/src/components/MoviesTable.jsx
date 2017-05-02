import React from 'react'
import MovieTableCell from './MovieTableCell'
import FilmSelect from './FilmSelect'


const MoviesTable = (props) => {

  const cells = props.movies.map((movie)=>{
    return <MovieTableCell value={movie} key={movie.unit} className = "table-cell" />
  }) 

  const movies = props.movies.map((movie, index) => {
    return <option value={index}>{movie.show_title}</option>
  })

  return(
    <div className = "table">
      <FilmSelect movies={movies} />
      {cells}
    </div>
  )

}


export default MoviesTable