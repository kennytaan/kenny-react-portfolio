import { Container, Row, Col} from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedInIcon from '../assets/img/nav-icon1.svg';
import gitIcon from '../assets/img/github-icon.svg';
import instaIcon from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col sm={6} className = "text-center">
                        <h2>Let's Connect!</h2>
                        <div className = "social-icon">
                            <a href ="https://www.linkedin.com/in/kenny-tan-752b221b9/"><img src = {linkedInIcon}></img></a>
                            <a href ="https://github.com/kennytaan"><img src = {gitIcon}></img></a>
                            <a href ="https://www.instagram.com/kennytaan/"><img src = {instaIcon}></img></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}