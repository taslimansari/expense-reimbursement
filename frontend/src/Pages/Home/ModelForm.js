import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModelForm = ({transaction, onClose, isShow}) => {


  // console.log(transaction);

  const [show, setShow] = useState(false);

  const [values, setValues] = useState({
    title : "",
    amount : "",
    description : "",
    category : "",
    date : "",
    transactionType : "",

  });

  const handleChange = (e) => {
    setValues({...values , [e.target.name]: e.target.value});
  }


  const handleClose = () => {setShow(false)};

  // const handleShow = (index) => {
  //   setShow(true)
  // };

  return (
    <div>
      <Modal show={isShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder={transaction.title}
                value={values.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                name="amount"
                type="number"
                placeholder={transaction.amount}
                value={values.amount}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSelect">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={values.category}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="office-supplies">Office Supplies</option>
                <option value="accommodation">Accommodation</option>
                <option value="business-travel">Business Travel</option>
                <option value="tips-gratuity">Tips/Gratuity</option>
                <option value="meals">Meals</option>
                <option value="healthcare">Healthcare</option>
                <option value="utilities-services">Utilities & Services</option>
                <option value="team-events">Team Events</option>
                <option value="transportation-costs">Transportation Costs</option>
                <option value="miscellaneous">Miscellaneous</option>

              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder={transaction.description}
                value={values.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSelect1">
              <Form.Label>Transaction Type</Form.Label>
              <Form.Select
                name="transactionType"
                value={values.transactionType}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="credit">Credit</option>
                <option value="expense">Expense</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Add more form inputs as needed */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModelForm;
