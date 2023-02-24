import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import "animate.css";
// import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max : 4000, min:3000},
            items:5
        },
        desktop:{
            breakpoint:{max:2000, min:1024},
            items:4
        },
        laptop:{
            breakpoint:{max:1500, min:1024},
            items:3
        },
        tablet:{
            breakpoint:{max:1024, min:464},
            items:2
        },
        mobile:{
            breakpoint:{max:900, min:0},
            items:1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        
                        <div className ="skill-bx">
                        
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Some of the skillsets I picked up over the years
                            </p>
                            
                        
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <div id = "circleProgress">
                                        <CircularProgressbar value={90} text={"90%"} font-family={"Centra"} styles={buildStyles({
                                            pathColor: '#ff8800',
                                            textColor: '#fff',
                                            trailColor: '#151515',
                                            backgroundColor: '#3e98c7',
                                        })}/>
                                    </div>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <div id = "circleProgress">
                                        <CircularProgressbar value={85} text={"85%"} font-family={"Centra"} styles={buildStyles({
                                            pathColor: '#ff8800',
                                            textColor: '#fff',
                                            trailColor: '#151515',
                                            backgroundColor: '#3e98c7',
                                        })}/>
                                    </div>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <div id = "circleProgress">
                                        <CircularProgressbar value={85} text={"85%"} font-family={"Centra"} styles={buildStyles({
                                            pathColor: '#ff8800',
                                            textColor: '#fff',
                                            trailColor: '#151515',
                                            backgroundColor: '#3e98c7',
                                        })}/>
                                    </div>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <div id = "circleProgress">
                                        <CircularProgressbar value={80} text={"80%"} font-family={"Centra"} styles={buildStyles({
                                            pathColor: '#ff8800',
                                            textColor: '#fff',
                                            trailColor: '#151515',
                                            backgroundColor: '#3e98c7',
                                        })}/>
                                    </div>
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <div id = "circleProgress">
                                        <CircularProgressbar value={85} text={"85%"} font-family={"Centra"} styles={buildStyles({
                                            pathColor: '#ff8800',
                                            textColor: '#fff',
                                            trailColor: '#151515',
                                            backgroundColor: '#3e98c7',
                                        })}/>
                                    </div>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <div id = "circleProgress">
                                        <CircularProgressbar value={80} text={"80%"} font-family={"Centra"} styles={buildStyles({
                                            pathColor: '#ff8800',
                                            textColor: '#fff',
                                            trailColor: '#151515',
                                            backgroundColor: '#3e98c7',
                                        })}/>
                                    </div>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <div id = "circleProgress">
                                        <CircularProgressbar value={80} text={"80%"} font-family={"Centra"} styles={buildStyles({
                                            pathColor: '#ff8800',
                                            textColor: '#fff',
                                            trailColor: '#151515',
                                            backgroundColor: '#3e98c7',
                                        })}/>
                                    </div>
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <div id = "circleProgress">
                                        <CircularProgressbar value={70} text={"70%"} font-family={"Centra"} styles={buildStyles({
                                            pathColor: '#ff8800',
                                            textColor: '#fff',
                                            trailColor: '#151515',
                                            backgroundColor: '#3e98c7',
                                        })}/>
                                    </div>
                                    <h5>PHP</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}