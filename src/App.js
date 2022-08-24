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
      erroMessage: ''
    }
  }

  handleCitySubmit = async(e) => {
    e.preventDefault();

    //https://us1.locationiq.com/v1/search.php
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url).catch(this.catch);
    console.log(cityInfo);
    if (!cityInfo) return
    this.setState({
      cityData: cityInfo.data[0],
      error: false,
      errorMessage: ''
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
        />    
        <Footer>

        </Footer>

        </>
  
  );
}
};
export default App;