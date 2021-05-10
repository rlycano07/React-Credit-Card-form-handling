import React from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
    <div>
        <div className="container">
          <div className="table">
            Home
          </div>
          <div className="table">
            Applications
          </div>
          <div className="table">
            Location
          </div>
          <div className="table">
            Forum
          </div>
          <div className="table">
            Blog
          </div>
          <div className="table">
            Help
          </div>
          <div className="table">
            Info
          </div>
          
          <div className="Cell"> 
            <div className="box justify-content-center align-items-center">
              <div className="formDiv">
              <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
              </div>
              <Form onSubmit={handleSubmit}>
                Card Number
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    value={values.cardNumber}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cnumber}
                  />
                </Form.Group>
                Card Name
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardName"
                    name="cardName"
                    placeholder="First Last"
                    value={values.cardName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cname}
                  />
                </Form.Group>
                <Row>
                  <Col>
                  Expiration Date
                    <Form.Group>
                      <Form.Control
                        type="text"
                        id="cardExpiration"
                        name="cardExpiration"
                        placeholder="MM/ YY"
                        value={values.cardExpiration}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        isValid={errors.cexp}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Security Code
                    <Form.Group>
                      <Form.Control
                        type="number"
                        id="cardSecurityCode"
                        name="cardSecurityCode"
                        placeholder="Look at back of your card Ex. 123"
                        value={values.cardSecurityCode}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        isValid={errors.ccvv}
                      />
                    </Form.Group>
                  </Col>
                  
                </Row>
                <Button
                  size={"block"}
                  id="validateButton"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
              </div>
              <Alert
                id="alertMessage"
                variant={errors.variant}
                show={errors.show}
              >
                {errors.message}
              </Alert>{" "}
            </div>
          </div> 
        </div>
    </div>
  );
};

export default CreditCardForm;
