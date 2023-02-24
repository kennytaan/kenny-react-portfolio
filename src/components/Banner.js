import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import ExampleDoc from "../assets/resume/Kenny Tan Junrong Resume.pdf";
import 'animate.css';
import ReactGA from 'react-ga';


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Nerd Student","Web Dev Amateur","Noob Gamer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-200 * 100);
    const period = 2000;
    
    const handleClick = () => {
        ReactGA.event({'category':'Test', 'action':'submit','label':'label'});
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2 )
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        } 
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center" id="bannerrow">
                    <Col xs={12} md={6} xl ={7}>
                        <h1>Welcome!</h1>
                        <h2>{`Hi I'm Kenny 🤪, a `}<span className="wrap">{text}</span></h2>
                        <p>Final year Computer Science student in NTU with a passion for web development. My ultimate goal is to become a full-stack web developer that specializes in building dynamic, 
                        responsive and user-friendly websites, hoping to create new digital experiences for users.  I am continuously seeking to enhance my knowledge and skills. </p>
                        {/* <button onClick={() => console.log('connect')}>View my resume!</button>     */}
                        <a href={ExampleDoc} download="Kenny Tan Junrong Resume"><button onClick={handleClick}><span>View my resume!</span></button></a>
                    </Col>
                    <Col xs={12} md={6} xl ={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}