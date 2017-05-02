import React from 'react'
import MoviesTable from './MoviesTable.jsx'
import Header from './Header.jsx'


class MovieMain extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      movies = []

    }
  }

  componentDidMount(){
    const url = 'http://netflixroulette.net/api/api.php?actor=Jack%20Nicholson'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () =>{
      if(request.response ===200){
        const jsonSting = request.responseText
        const data = JSON.parse(jsonSting)
        this.setState({movies: data})
      }
    }
    request.send()
  }

  render(){
    return(
      <div>
      <Header/>
      <MoviesTable/>
      </div>
      )
  }

}



export default MovieMain 