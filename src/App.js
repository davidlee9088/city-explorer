import React from 'react';
import axios from 'axios';
import Main from './Main';
import Weather from './Weather'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      erroMessage: '',
      weatherData: []
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    // let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    // let cityInfo = await axios.get(url).catch(this.catch);
    let cityCast = await axios.get(`http://localhost:3001/weatherData?searchQuery=${this.state.city}`).catch(err => {
    });
    this.setState({
      weatherData: cityCast.data
    })
  }


  // handleCitySubmit = async(e) => {
  //   e.preventDefault();

  //   //https://us1.locationiq.com/v1/search.php
  //   let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
  //   let cityInfo = await axios.get(url).catch(this.catch);
  //   console.log(cityInfo);






  // if (!cityInfo) return
  // this.setState({
  //   cityData: cityInfo.data[0],
  //   error: false,
  //   errorMessage: ''
  // })

  // }

  catch = (error) => {
    console.log(error, 'Errored')

    this.setState({
      error: true,
      errorMessage: `ERROR ${error.response.status}: Could not find ${this.state.city}`,
      cityData: {}
    })

  }


  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })

  }


render(){

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
      <Weather
        weatherData={this.state.weatherData}
        city={this.state.city}
      />

      <Footer />


    </>

  );
}
};
export default App;