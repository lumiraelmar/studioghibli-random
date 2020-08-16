import React from 'react';
import './App.scss';
//import Carousel from './components/Carousel';
import Card from './components/Card';
import Footer from './components/Footer';
//import Axios from 'axios';

class App extends React.Component {


  render() {
    return (
      <div className='wrapper'>
        <div>
          <h1 className='pageTitle'>Studio Ghibli Recommendation</h1>
          {/*<Carousel movies={movies}/>*/}
          <Card />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
