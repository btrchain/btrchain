import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./MeanStack.css";
import { MdEmail, MdPhone } from "react-icons/md";

export default function MeanStack() {
  return (
    <div>
      <div className="contactbg">
        <p className="h2 text-center py-5">MEAN Stack Development</p>
      </div>
      <Container className="pb-5 pt-3">
        <div className="i-container">
          <p>
            A collection of JavaScript technologies used to create online apps
            is referred to as the "Mean Stack." As a result, JavaScript is used
            throughout the entire system, from the client to the server and from
            the server to the database. A full-stack development toolkit called
            MEAN is used to create web apps that are quick and reliable.
          </p>
        </div>
      </Container>
    </div>
  );
}
