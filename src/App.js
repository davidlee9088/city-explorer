import React from 'react';
import axios from 'axios';
import Main from './Main';
import Movies from './Movies'
import Footer from './Footer'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      erroMessage: '',
      weatherData: [],
      movieArr: [],
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {

      let data = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);


      let cityDataMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.data[0].lat},${data.data[0].lon}&zoom=14`

      const { lon, lat } = data.data[0];

      let urlTest = `${process.env.REACT_APP_SERVER}/weatherData?lat=${lat}&lon=${lon}`
      const cityCast = await axios.get(urlTest);





      let forecast = cityCast.data;
      let url = `${process.env.REACT_APP_SERVER}/movies?cityname=${this.state.city}`
      let cityMovie = await axios.get(url);
      console.log(cityMovie.data);
      let movieData = cityMovie.data

      if (!movieData) {
        movieData = []
      }

      if (!forecast) {
        forecast = []
      }


      this.setState({
        cityData: data.data[0],
        flag: true,
        img: cityDataMap,
        weatherData: forecast,
        movieArr: movieData
      })

      // console.log(this.state.movieArr);
    } catch (error) {

      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`

      })

    }


  }
  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }




  render() {

    console.log(this.state.weatherData);
    return (
      <>
        <Main
          handleCityInput={this.handleCityInput}
          handleCitySubmit={this.handleCitySubmit}
          cityData={this.state.cityData}
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          weatherData={this.state.weatherData}
        />

        {this.state.movieArr.length &&
          <Movies
            movie={this.state.movieArr}
          />
        }
        <Footer />
      </>
    );
  }
};
export default App;