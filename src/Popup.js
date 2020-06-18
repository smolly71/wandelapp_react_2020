import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class Popup extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered style={{zIndex:100}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Welkom bij de wandelapp!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Om te beginnen kunt u een route uploaden.
          De map toont aan hoe u de route moet lopen
          en hoelang de route is.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}
