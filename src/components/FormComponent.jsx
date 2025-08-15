import React from 'react';
// import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from '../firebase';
import { Form, Button, Container, Spinner } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';



const roles = ["Pastor", "Elder", "Usher", "Choir", "Technical", "Member"];
function FormComponent(props) {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    dob: '',
    jobTitle: '',
    role: 'Member',
    joinDate: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload a profile image.");
      return;
    }

    setLoading(true);

    try {
      const imageRef = ref(storage, `members/${uuidv4()}-${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "members"), {
        ...formData,
        imageUrl,
      });

      alert("Member added successfully!");
      setFormData({
        fName: '',
        lName: '',
        dob: '',
        jobTitle: '',
        role: 'Member',
        joinDate: ''
      });
      setImage(null);
    } catch (error) {
      console.error("Error adding member:", error);
      alert("Failed to add member.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <h3>Add New Member</h3>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="fName" value={formData.fName} onChange={handleChange} required />
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lName" value={formData.lName} onChange={handleChange} required />
            </Form.Group>
          </div>
          <div className="col-lg-12">
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group className="mb-3">
              <Form.Label>Role In Church</Form.Label>
              <Form.Select name="role" value={formData.role} onChange={handleChange}>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group className="mb-3">
              <Form.Label>Join Date</Form.Label>
              <Form.Control type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} required />
            </Form.Group>
          </div>

        </div>










        <Form.Group className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
        </Form.Group>

        <Button type="submit" className="btn btn-block w-100">{loading ? <Spinner animation='border' size='sm'/> : 'Add Member'}</Button>
      </Form>
    </div>
  );
}

export default FormComponent;