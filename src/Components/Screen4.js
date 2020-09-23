import React, { Component } from "react";

import { Redirect } from "react-router";
import Screen1 from "./Components/Screen1"

import {Button} from 'react-bootstrap';
class Home extends Component {
  state = {
    redirect: false
}
redirectHandler = () => {
    this.setState({ redirect: true })
    this.renderRedirect();
}
renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/Home' component={Screen1}/>
    }
}
  
  render() {
    
    return (
        
      <div className="home">
        <div className="dark-overlay home-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4"> Appointment </h1>
                <p className="lead">
                Your request is received and someone  will be in touch with you soon
                </p>
                <hr />
                <Button variant="primary" type="create" onClick={this.redirectHandler}>
                Home Page
              </Button>
              {this.renderRedirect()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Home;