import React from "react";
import Form from './Form';
import Error from './Error';


class Main extends React.Component {
  render() {

    return (
      <div className='test'>

        <div className='test2'>
          {Object.keys(this.props.cityData).length > 0 && (
            <img
              alt={this.props.cityData.display_name}
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10`}
            />
          )}
        </div>


        <div>
          <h1>City Explorer</h1>
          <Form
            handleCityInput={this.props.handleCityInput}
            handleCitySubmit={this.props.handleCitySubmit}
          />
          {this.props.error && (
            <Error
              errorMessage={this.props.errorMessage}
            />

          )}


          {Object.keys(this.props.cityData).length > 0 && (
            <ul className='list'>
              <li className='list-01'>
                <p className='p-0 m-0 '>Lat</p> <p className='p-0 m-0 h3'>{this.props.cityData.lat}</p>
              </li>

              <li className='list-01'>
                <p className='p-0 m-0 '>Long</p> <p className='p-0 m-0 h3'>{this.props.cityData.lon}</p>
              </li>

              <li className='list-01'>
                <p className='p-0 m-0 '>Location</p> <p className='p-0 m-0 h3'>{this.props.cityData.display_name}</p>
              </li>


            </ul>
          )}
        </div>





      </div>
    )
  }
}

export default Main;