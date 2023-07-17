import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { Context } from '../index';
import { createCycle } from '../http/cycleApi';

function AddBudget() {
 const {user, user_package} = useContext(Context);
  const [show, setShow] = useState(false);
    const [budget, setBudget] = useState('');
    const [time, setTime] = useState('');
    const [comment, setComment] = useState('');
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const createCycleClick = async () => {
    const data = {
        userId: user.user.id,
        cycleTime: time,
        budget: budget,
        packageId: user_package.selectedPack.id, 
        comment: comment};
    await createCycle(data);
    setShow(false)}
  


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Exit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add budget</Form.Label>
              <Form.Control
                type="number"
                placeholder="budget"
                autoFocus
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
                <Form.Label>Add time</Form.Label>
              <Form.Control
                type="time"
                placeholder="budget"
                autoFocus
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createCycleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBudget;