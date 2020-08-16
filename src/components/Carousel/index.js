import React from 'react';
import Card from '../Card';
import './style.scss'

class Carousel extends React.Component {
  render() {
    const { movies } = this.props
      return (
        <React.Fragment>
          {movies.map((movie) => {
            return (
              <Card movie={movie}/>
            )
          })

          }
        </React.Fragment>
    )
  }
}

export default Carousel;