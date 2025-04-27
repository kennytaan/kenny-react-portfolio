import {useState,useRef} from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/paper-aeroplane.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }
    const form = useRef();

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [disabled, setDisabled] = useState(false);
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        
        emailjs.sendForm('service_elytlqa','template_6heylwe',form.current,'te1WYgEvIJlyERSCn')
        .then((result) => {
            setButtonText('Success!');
            setDisabled(true);
            setStatus({success:true, message:'Message sent successfully'});
  
        }, (error) => {
            setStatus({success: false, message:'Something went wrong, please try again!'});
            setButtonText("Send");
            setFormDetails(formInitialDetails);
        });

    }

    return (
        <section className="contact" id = "connect">
            <Container className="contact-bx">
                <Row className="align-items-center">
                    
                    <Col size ={12} md={6}>
                    <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__slideInLeft animate__faster" : ""}>
                        <img id="contactImg" src={contactImg} alt="Contact Us"></img>
                       </div>}
                       </TrackVisibility>
                    </Col>
                    
                    <Col md={6}>
                    
                        <h2>Drop me an email!</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-l">
                                    <input name="first_name" type = "text" value={formDetails.firstName} placeholder = "First Name" onChange = {(e) => onFormUpdate('firstName',e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-l">
                                    <input name="last_name" type = "text" value={formDetails.lastName} placeholder = "Last Name" onChange = {(e) => onFormUpdate('lastName',e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-l">
                                    <input name="user_email" type = "email" value={formDetails.email} placeholder = "Email Address" onChange = {(e) => onFormUpdate('email',e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-l">
                                    <input name="contact_no" type = "tel" value={formDetails.phone} placeholder = "Phone Number" onChange = {(e) => onFormUpdate('phone',e.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea name="message" row = "6" value={formDetails.message} placeholder = "Message" onChange = {(e) => onFormUpdate('message',e.target.value)}></textarea>
                                    <button type = "submit" disabled={disabled}><span>{buttonText}</span></button>
                                </Col>
                                
                                {
                                    status.message &&
                                    <Col id = "responsemsg">
                                        <p className = {status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                       
                    </Col>
                </Row>
            </Container>
        </section>
    )
}