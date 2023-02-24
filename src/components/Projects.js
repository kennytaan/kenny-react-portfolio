import { Col, Container, Nav, Row, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


/*y4 projects*/
import DAMLogo from "../assets/img/projectsy4/DAM-icon.PNG";
import DBSPLogo from "../assets/img/projectsy4/DBSP-icon.png";
import AILogo from "../assets/img/projectsy4/AI-icon.PNG";
import FYPLogo from "../assets/img/projectsy4/pear.png"
import BDMLogo from "../assets/img/projectsy4/BDM-icon.jpeg"
import IALogo from "../assets/img/projectsy4/IA-icon.jpg"


/*y3 projects*/
import mashwireLogo from "../assets/img/projectsy3/mashwire-web.PNG";
import leftoversLogo from "../assets/img/projectsy3/leftovers.PNG";
import VRARLogo from "../assets/img/projectsy3/VRAR-icon.PNG";
import MDPLogo from "../assets/img/projectsy3/MDP-icon.PNG";

/*y2 projects*/
import SELogo from "../assets/img/projectsy2/SE-icon.png";
import SSADLogo from "../assets/img/projectsy2/rsz_ssad-icon.png";
import CGVLogo from "../assets/img/projectsy2/rsz_cgv-icon.png";
import HCILogo from "../assets/img/projectsy2/HCI-icon.PNG";
import OODPLogo from "../assets/img/projectsy2/OODP-icon.PNG";
import ALGOLogo from "../assets/img/projectsy2/ALGO-icon.PNG";
import DATALogo from "../assets/img/projectsy2/DATA-icon.PNG";

/*y1 projects*/
import DSAILogo from "../assets/img/projectsy1/DSAI-icon.PNG";
import ICTLogo from "../assets/img/projectsy1/ICT-icon.PNG";
import DSLogo from "../assets/img/projectsy1/DS-icon.PNG";

// import "animate.css";
// import TrackVisibility from "react-on-screen";


export const Projects = () => {
    const projectsy4 = [
        {
            title:"Final Year Project (In progress)",
            description:"Dementia Patient Care Centre System - Mobile and Web Application (Frontend/Backend) ",
            imgUrl:FYPLogo,
            techstack:"Git, Postman, C#(ASP.NET, FluentValidation), JavaScript(ReactNative), SQL Server Management Studio, Swagger"
        }, 
        {
            title:"Big Data Management (In progress)",
            description:"Exploring Column Stores & Query methods",
            imgUrl:BDMLogo,
            techstack:"Python"
        }, 
        {
            title:"Intelligent Agents (In progress)",
            description:"Value & Policy Iteration",
            imgUrl:IALogo,
            techstack:"Java"
        }, 
        {
            title:"Database System Principles",
            description:"Query Execution Plan Optimizer",
            imgUrl:DBSPLogo,
            techstack:"Git, Python(Tkinter), PostgreSQL"
        },{
            title:"Artificial Intelligence",
            description:"Experimenting various Path-Searching Algorithms \n& Translating the natural language statements to First Order Logic (FOL) statements - Prolog",
            imgUrl:AILogo,
            techstack:"Python, Prolog"
        },
        {
            title:"Data Analytics & Mining",
            description:"Exploring Clustering Methods & Classification based on Association Algorithm (CBA) Model",
            imgUrl:DAMLogo,
            techstack:"Git, Python(Jupyter Notebook)"
        }, 
        
        
    ];

    const projectsy3 = [
        {
            title:"Internship",
            description:"MASHWIRE Pte Ltd",
            imgUrl:mashwireLogo,
            techstack:"HTML, CSS, JavaScript(AngularJS), SparkAR, Adobe Photoshop"
        },
        {
            title:"Advanced Software Engineering",
            description:"Trail Making Test",
            imgUrl:leftoversLogo,
            techstack:"Git, HTML, CSS, JavaScript(AngularJS)"
        },
        {
            title:"Virtual Reality/ Augmented Reality",
            description:"Life of a Polar Bear",
            imgUrl:VRARLogo,
            techstack:"Git, C#(Unity)"
        },
        {
            title:"Must-DO Project - MDP",
            description:"Android Application",
            imgUrl:MDPLogo,
            techstack:"Java(Android Studio)"
        },
        
    ];

    const projectsy2 = [
        {
            title:"Software Engineering",
            description:"HDB Resale Flat Purchase Website - HouseHunt",
            imgUrl:SELogo,
            techstack:"Python(Django), HTML, CSS"
        },
        {
            title:"Software Systems Analysis & Design",
            description:"Software Engineering Game - FantaSEy",
            imgUrl:SSADLogo,
            techstack:"Git, C#(Unity)"
        },
        {
            title:"Computer Graphics & Visualization",
            description:"Making Images with Mathematics",
            imgUrl:CGVLogo,
            techstack:"ShapeExplorer"
        },
        {
            title:"Human Computer Interaction",
            description:"Indoor Navigation Application",
            imgUrl:HCILogo,
            techstack:"Figma, Microsoft Powerpoint"
        },
        {
            title:"Object-Oriented Design & Programming",
            description:"MySTARS Application",
            imgUrl:OODPLogo,
            techstack:"Java"
        },
        {
            title:"Algorithms",
            description:"Path-Searching & Graph Algorithms",
            imgUrl:ALGOLogo,
            techstack:"Python"
        },
        {
            title:"Introduction to Databases",
            description:"SQL Query",
            imgUrl:DATALogo,
            techstack:"SQL Server Management Studio"
        }

    ];

    const projectsy1 = [
        {
            title:"Introduction to Data Science & Artifical Intelligence",
            description:"Kaggle - Seattle Airbnb Open Data",
            imgUrl:DSAILogo,
            techstack:"Python(Jupyter Notebook)"
        },
        {
            title:"Introduction to Computational Thinking",
            description:"NTU Canteen Application",
            imgUrl:ICTLogo,
            techstack:"Python(Tkinter)"
        },
        {
            title:"Data Structures",
            description:"Learning data structures such as arrays, linked lists etc, important for building efficient algorithms",
            imgUrl:DSLogo,
            techstack:"Java"
        },
        
        

        
        
    ];

    return(
        <section className="project" id ="projects">
            <Container>
                <Row>
                    <Col>
                    
                        <h2>Projects</h2>
                        <p>
                            Some of my academic projects
                        </p>
                        
                        <Tab.Container id = "projects-tabs" defaultActiveKey="first">
                            <Nav variant ="pills" className="nav-pills mb-5 justify-content-center align-items-center" id ="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Year 4</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Year 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Year 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Year 1</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id ="tab-content">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsy4.map((project,index) => {
                                                return(
                                                    <ProjectCard key ={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsy3.map((project,index) => {
                                                return(
                                                    <ProjectCard key ={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            projectsy2.map((project,index) => {
                                                return(
                                                    <ProjectCard key ={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <Row>
                                        {
                                            projectsy1.map((project,index) => {
                                                return(
                                                    <ProjectCard key ={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}