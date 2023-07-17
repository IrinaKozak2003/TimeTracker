
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Select from 'react-select';
import { Card, Row } from 'react-bootstrap';

function AddPackage() {
    const [show, setShow] = useState(false);
    const [selectedPeople, setSelectedPeople] = useState([]);
  
    const options = [
      { value: 'john', label: 'John' },
      { value: 'emma', label: 'Emma' },
      { value: 'alex', label: 'Alex' },
      // add more people to the list
    ];
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleSelectChange = (selectedOptions) => {
      setSelectedPeople(selectedOptions);
    };
  
    return (
      <>
        <Row className="d-flex justify-content-center" style={{ margin: '10px' }}>
          <Card style={{ width: '320.5px', height: '150px', top: '10px', margin: '10px' }} onClick={handleShow}>
            <Card.Body>
              <Card.Title className="text-center">Add Package</Card.Title>
            </Card.Body>
          </Card>
        </Row>
  
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Package name</Form.Label>
            <Form.Control type="text" placeholder="Enter package name" />
            <Form.Label>Package budget</Form.Label>
            <Form.Control type="number" placeholder="Enter package budget" />
            <Form.Label>Select users</Form.Label>
            <div>
              <Select options={options} value={selectedPeople} isMulti onChange={handleSelectChange} />
              <div>
                Selected People:
                {selectedPeople.map((person) => (
                  <span key={person.value}>{person.label}, </span>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AddPackage;
  