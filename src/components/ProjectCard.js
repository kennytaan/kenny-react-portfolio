import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, techstack,imgUrl}) => {
    return (
        <Col xs = {12} sm = {2-9} md = {6} xl = {4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <h6>Techstack learnt: {techstack}</h6>
                </div>
            </div>
        </Col>
    )
}