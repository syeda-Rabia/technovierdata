import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { dummyData } from "../../../assests/constants/todoList";
import pakGroup from "./../../../assests/pakGroup.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThLarge,
  faThList,
  
} from "@fortawesome/free-solid-svg-icons";
export default function Testfunction() {
  const [data, setData] = React.useState(dummyData);
  const [view, setView] = React.useState(false);
    const Data = ({ item, index }) => {
      if(view!==true){
        return (
          <Row className="mt-2 mx-3" style={{height:"",backgroundColor:"gray"}}>
              <Col
              lg={2}
              sm={2}
              md={3}
            
              >
       <img style={{ width: "100%", height: ""}} src={pakGroup} />
              </Col>
              <Col
              lg={2}
              sm={2}
              md={3}
              style={{color:"white"}}
              >
       <p>{item.id}</p>
       <p>{item.Clients}</p>
       <p>{item.Email}</p>
              </Col>
      
          </Row>
          );
      }
  else{
    return(

      <div className="col-md-4 col-sm-12 grid-style" style={{ backgroundColor:"darkgray" }}>
       <img style={{ width: "100%", height: ""}} src={pakGroup} />
       <p>{item.id}</p>
       <p>{item.Clients}</p>
       <p>{item.Email}</p>
      </div>
    );
  }
  };
  return (
    <Container fluid className="Laa">
      <Row className="shadow p-3 mb-3 bg-white rounded mt-4 ">
        <Col lg={10} sm={10} xs={10} xl={10}>
          <h3 style={{ color: "#818181" }}>
            Test 
          </h3>
        </Col><Col
        lg={1} sm={1} xs={1} xl={1}
        > <button
              data-tip
              data-for="action"
              type="button"
              className="bg-transparent  button-focus"
              onClick={() => {
                setView(false);
                
              }}
            >
              <FontAwesomeIcon style={{ fontSize: 15 }} icon={faThList} />
            </button>
            </Col>
            <Col lg={1} sm={1} xs={1} xl={1}>
            <button
              data-tip
              data-for="action"
              type="button"
              className="bg-transparent  button-focus "
              onClick={() => {
                setView(true);
              }}
            >
              <FontAwesomeIcon style={{ fontSize: 15 }} icon={faThLarge} />
            </button>
            </Col>
      </Row>

      <Row>
        <div className="col-lg-12 shadow p-3  bg-white rounded ">
          <div className="">
              
                 {data?.map((item, index) => {
                  return <Data index={index} item={item} />;
                })}
                
           
           
          </div>
        </div>
      </Row>
     
    </Container>
  );
}
