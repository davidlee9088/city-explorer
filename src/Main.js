import React from "react";
import Form from './Form';


class Main extends React.Component {
  render() {
    console.log(this.props);
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


          {Object.keys(this.props.cityData).length > 0 && (
            <ul className='list-unstyled '>
              <li className='py-2'>
                <p className='p-0 m-0 '>Latitude</p> <p className='p-0 m-0 h3'>{this.props.cityData.lat}</p>
              </li>

              <li className='py-2'>
                <p className='p-0 m-0 '>Longtitude</p> <p className='p-0 m-0 h3'>{this.props.cityData.lon}</p>
              </li>

              <li className='py-2'>
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