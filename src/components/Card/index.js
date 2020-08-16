import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      movies: []
    }
  }

  async componentDidMount() {
    try {
      const data = await Axios.get('https://ghibliapi.herokuapp.com/films');

      const randomizeMovies = data.data.sort(function() {
        return .5 - Math.random();
      });
      let movie = randomizeMovies.slice(0, 1);

      this.setState({
        movies: data.data,
        movie: movie
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleClick() {
    const { movies } = this.state
    const randomizeMovies = movies.sort(function() {
      return .5 - Math.random();
    });
    let movie = randomizeMovies.slice(0, 1);
    this.setState({
      movie: movie
    })
  }

  render() {
    const { movie } = this.state
    return (
      movie.map((mov, key) => {
        return (
          <div className='movieWrapper' key={key}>
            <div className='titleWrapper'>
              <h2 className='title'>{mov.title}</h2>
              <span className='year'>({mov.release_date})</span>        
              <FontAwesomeIcon className='button' icon={faRedoAlt} onClick={() => this.handleClick()}/>
            </div>
            <p className='desc'>{mov.description}</p>
          </div>
        )
      })
    )
  }
}

export default Card;