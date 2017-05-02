import React from 'react'

const MovieTableCell = (props) => {

  return(
    <div className = "movie-title">
    <h3>
      {props.value.show_title}
    </h3>
    <img className = "image" src = {props.value.poster}/> 
    </div>
    )


}


export default MovieTableCell