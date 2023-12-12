
import React from 'react'
import '../styles/ContactMe.css';
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


function ContactMe() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success: true, message: 'Message sent successfully'});
        } else {
            setStatus({success: false, message: 'Something went wrong, please try again later.'});
        }
    }
    
    return (
      <section className="contactMe" id="contact">
          <Container>
              <Row className="align-items-center">
                  
                  <Col md={6}>
                      <h1>Get In Touch</h1>
                      <form onSubmit={handleSubmit}>
                          <Row>
                              <Col sm={6} className="px-1">
                                  <input type="text" value={formDetails.firstName} placeHolder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                              </Col>
                              <Col sm={6} className="px-1">
                                  <input type="text" value={formDetails.lastName} placeHolder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                              </Col>
                              <Col sm={6} className="px-1">
                                  <input type="email" value={formDetails.email} placeHolder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                              </Col>
                              <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeHolder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                <textarea value={formDetails.message} placeHolder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                </Col>
                                
                                <Col>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default ContactMe