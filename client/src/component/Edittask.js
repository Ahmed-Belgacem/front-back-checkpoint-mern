import React, {  useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/todoSlice";
import "./admin.css";
const EditTask = ({ todo }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setEdited] = useState({
    title: todo.title,
    description: todo.description,
  });

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Edit task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="inps">      <input type='text' placeholder={todo.title} onChange={(e) => {setEdited({...edited, title: e.target.value})}} />
      <input type='text' placeholder={todo.description} onChange={(e) => {setEdited({...edited, description: e.target.value})}} /></Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={() => {handleClose();dispatch(editTask({ id: todo.id, edited }))}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;