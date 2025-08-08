import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function FormComponent(props) {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        dob: '',
        jobTitle: '',
        role: 'Member',
        joinDate: '',
        profileImage: null,
    });
    const [message, setMessage] = useState({err: false, msg: ''});
    const [image, setImage] = useState(null);
    const roles = ['Member', 'Admin', 'Moderator'];
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleFileChange = (e) => {
      
    }
    const addMember = (e) => {
        e.preventDefault();

        // Here you would typically call a service to add the member
        console.log('Member added:', formData);
        // Reset form a fter submission
        setFormData({
            fName: '',
            lName: '',
            dob: '',
            jobTitle: '',
            role: 'Member',
            joinDate: '',
            profileImage: null,
        });
    }
    return (
        <div>
            <h3>Add New Member</h3>
      <Form onSubmit={addMember}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control name="fName" value={formData.fName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lName" value={formData.lName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select name="role" value={formData.role} onChange={handleChange}>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Join Date</Form.Label>
          <Form.Control type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
        </Form.Group>

        <Button type="submit">Add Member</Button>
      </Form>
        </div>
    );
}

export default FormComponent;