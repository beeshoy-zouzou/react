import React, { Component } from "react";
import {Button} from 'react-bootstrap';

class Screen1 extends Component {
  render() {
    return (
      <div className="home">
        <div className="dark-overlay home-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4"> Home </h1>
                <p className="lead">
                You could request an appointment with our team
                </p>
                <hr />
                <Button variant="primary" type="create" onClick={"/Screen3"}>
                Request an appointment
              </Button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen1;