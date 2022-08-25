import React from 'react';
import axios from 'axios';
import Main from './Main';
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

  handleCitySubmit = async(e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url).catch(this.catch);
    let cityForecast = await axios.get(`${process.env.REACT_APP_SERVER}/weatherData?searchQuery=${this.state.city}`).catch(err => {
      console.log(err);
    });
    console.log(cityForecast)
    this.setState({
      weatherData:cityForecast.data
    }) 



    if (!cityInfo) return
    this.setState({
      cityData: cityInfo.data[0],
      error: false,
      errorMessage: ''
    })

  }

  catch = (error) => {
    console.log(error, 'here is an error')
    
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

console.log(this.state);
 
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
     {/* <Weather
            weatherData={this.state.weatherData}
            city={this.state.city}
          /> */}

        <Footer/>


        </>
  
  );
}
};
export default App;