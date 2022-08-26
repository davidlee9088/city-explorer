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

  // handleCitySubmit = async (e) => {
  //   e.preventDefault();
  //   // let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
  //   // let cityInfo = await axios.get(url).catch(this.catch);
  //   let cityCast = await axios.get(`http://localhost:3001/weatherData?searchQuery=${this.state.city}`).catch(err => {
  //   });
  //   this.setState({
  //     weatherData: cityCast.data
  //   })
  // }
















  // // handleCitySubmit = async(e) => {
  // //   e.preventDefault();

  // //   //https://us1.locationiq.com/v1/search.php
  // //   let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
  // //   let cityInfo = await axios.get(url).catch(this.catch);
  // //   console.log(cityInfo);






  // // if (!cityInfo) return
  // // this.setState({
  // //   cityData: cityInfo.data[0],
  // //   error: false,
  // //   errorMessage: ''
  // // })

  // // }

  // catch = (error) => {
  //   console.log(error, 'Errored')

  //   this.setState({
  //     error: true,
  //     errorMessage: `ERROR ${error.response.status}: Could not find ${this.state.city}`,
  //     cityData: {}
  //   })

  // }


  // handleCityInput = (e) => {
  //   this.setState({
  //     city: e.target.value
  //   })

  // }



  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
     
      let data = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      console.log('data',data);
     

      let cityDataMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.data[0].lat},${data.data[0].lon}&zoom=14`
      console.log('cityDataMap',cityDataMap)
      console.log(data, 'data from locationiq api')

      const { lon, lat } = data.data[0];

      console.log(lat, lon)

      const cityCast = await axios.get(`http://localhost:3001/weather?lat=${lat}&lon=${lon}`);

      console.log(cityCast, 'new weather request')




      let forecast = cityCast.data;
      console.log(cityCast);
      let url = `${process.env.REACT_APP_SERVER}/movies?movieQueryCity=${this.state.city}`
      let cityMovie = await axios.get(url);
      let movieData = cityMovie.data


      this.setState({
        cityData: data.data[0],
        flag: true,
        img: cityDataMap,
        weatherData: forecast,
        movieArr: movieData
      })


    } catch (error) {

      this.setState({
        error: true,
        // errorMessage: `An Error Occurred: ${error.response.status}`

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