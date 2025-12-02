import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";


const ModalForm = ({ setShowModal, showModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessIdea: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendDataPabbly = async (data) => {
    const username = 'acf0cb760b09d5c737c7';
    const password = '68f69867611bb536db3d5e3cc16be532';
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

    try {
      const response = await axios.post(
        'https://payments.pabbly.com/api/v1/customer',
        {
          first_name: data.name,
          last_name: data.name, // you can adjust if you want to split
          email_id: data.email,
          phone: data.phone,
          is_affiliate: true,
          // optional: you can pass `businessIdea` somewhere if your API accepts
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + token,
            Cookie: 'SameSite=None',
          },
        }
      );
      console.log('Response:', response.data);
      toast.success('ডাটা সফলভাবে পাঠানো হয়েছে!');
      Cookies.set("showModal", "false",); 
      setShowModal(false); // close modal after success
    } catch (error) {
      console.error('Error sending data:', error);
      toast.error('ডাটা পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload
    if (!formData.name || !formData.email || !formData.phone) {
      alert('দয়া করে সব তথ্য পূরণ করুন।');
      return;
    }
    sendDataPabbly(formData);
  };

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header
        closeButton
        style={{
          background: "linear-gradient(90deg, #6B2CD1, #9b5de5)",
          color: "#fff",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <Modal.Title style={{ fontSize: "20px", fontWeight: "bold" }}>
          ব্যবসার আইডিয়া ও সাপোর্ট পেতে নিচের ফর্মটি পূরণ করুন
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          backgroundColor: "#f9f9f9",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          padding: "25px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder="আপনার নাম"
              value={formData.name}
              onChange={handleChange}
              style={{
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="আপনার ইমেইল"
              value={formData.email}
              onChange={handleChange}
              style={{
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Control
              type="tel"
              placeholder="আপনার মোবাইল নাম্বার"
              value={formData.phone}
              onChange={handleChange}
              style={{
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            />
          </Form.Group>

          <Form.Group controlId="businessIdea">
            <Form.Control
              type="text"
              placeholder="আপনি কোন ধরনের ব্যবসা করতে চান?"
              value={formData.businessIdea}
              onChange={handleChange}
              style={{
                borderRadius: "12px",
                marginBottom: "20px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                padding: "12px",
                border: "1px solid #ddd",
              }}
            />
          </Form.Group>

          <Button
            type="submit"
            style={{
              width: "100%",
              borderRadius: "30px",
              padding: "12px",
              background: "linear-gradient(90deg, #6B2CD1, #9b5de5)",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #9b5de5, #6B2CD1)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #6B2CD1, #9b5de5)")
            }
          >
            জমা দিন
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
