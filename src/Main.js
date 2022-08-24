import React from "react";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

handleCity = (e) => {
  this.setState({
    city: e.target.value


  });
} 

  submitForm = (e) => {
    e.preventDefault();
  
    console.log(this.state.city);
  }



  render() {
    return (
      <>
        <form onSubmit={this.submitForm}>
          <label> Pick a City
            <input
              type="text"
              name="city"
onInput={this.handleCity}
            ></input>
          </label>
          <button>Submit

          </button>


        </form>
      </>
    );
  }


}

export default Main;
