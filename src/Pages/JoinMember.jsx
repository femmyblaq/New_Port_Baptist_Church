import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import FormComponent from '../components/FormComponent';
import gathering from '../assets/gathering.jpg'; // Assuming you have an image to display

export default function JoinMember() {
  return (
    // <Container className="mt-5">
      <div className="row p-5">
        <div className="col-lg-6 ">
          <img className='border-2' width={500} src={gathering} alt="" />
        </div>
        <div className="col-lg-6 px-5">
          {/* <FormComponent /> */}
          <div className="container my-4">
  <div className="border rounded overflow-auto" style={{ height: "500px" }}>
    
          <iframe width="100%"
      height="100%" 
      src="https://docs.google.com/forms/d/e/1FAIpQLSeRugpqkorXNUlqeUQI0JFFm0bYzDCUYeux00fTnbvsToiDnw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    {/* https://docs.google.com/forms/d/e/1FAIpQLSeRugpqkorXNUlqeUQI0JFFm0bYzDCUYeux00fTnbvsToiDnw/viewform
      https://docs.google.com/forms/d/e/1FAIpQLSe3tb5cg9vi08OC2AMepEDFD_hQNzd78ed8y0FM-vph3mIxKQ/viewform?usp=sharing&ouid=108989367468174075769 */}
  </div>
</div>
        </div>
      </div>
    // </Container>
  );
};
