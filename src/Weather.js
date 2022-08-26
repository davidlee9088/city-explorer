import React from 'react';
import Cast from './Cast';


class Weather extends React.Component {
    render() {

        let weather = this.props.weatherData.map((day, idx) => (
            <Cast
                key={idx}
                city={this.props.city}
                date={day}
            />
        ))
        return (
            <div>
                <h3>Weather</h3>

                {!weather.length ? (
                    <p>No Weather</p>
                ) : (
                    <ul className>
                        {[weather]}
                    </ul>
                )}
            </div>
        );
    }
}

export default Weather;