import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import FormComponent from '../components/FormComponent';
import gathering from '../assets/gathering.jpg'; // Assuming you have an image to display

export default function JoinMember() {
  return (
    // <Container className="mt-5">
      <div className="row p-5 ">
        <div className="col-lg-6 ">
          <img className='border-2' width={500} src={gathering} alt="" />
        </div>
        <div className="col-lg-6">
          <FormComponent />
        </div>
      </div>
    // </Container>
  );
};
