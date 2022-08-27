import React from "react";
import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import './App.css'


class Movies extends React.Component {
  render() {
    console.log(this.props.movie);
    return(
      <div>
        <h3>Movies about your city of choice: </h3>
        <div>
      {
        this.props.movie.map((movie, idx) => (

        
          <Card style={{width:'18rem'}} className='card container' key={idx}>
            <Card.Body>
              <Card.Img 
                className='card-image p-3'
                variant= "top" 
                style={{cursor:'pointer'}}
                src={`https://image.tmdb.org/t/p/w500/${movie.img}`} 
                alt={movie.title}/> 
{/* how to not render image if null = false  */}
            <Card.Title>
                Movie Title: {movie.title}
            </Card.Title>
              <Card.Text>
                Description: {movie.description}
              </Card.Text>
              <Card.Text>
                average votes: {movie.avgVotes}
              </Card.Text>
              <Card.Text>
                popularity: {movie.popularity}
              </Card.Text>
              <Card.Text>
                released on:{movie.releasedOn}
              </Card.Text>
            </Card.Body>
          </Card>
        
    
        ))}
        </div>
      </div>

    );
  }
}
export default Movies;