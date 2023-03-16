import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact({ heading }) {


  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submited')


    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }

    toast.success('🦄 sent successfully !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const frm = document.getElementsByName('contact-form')[0];

    setTimeout(() => { console.log("success!"); }, 5000);
    frm.submit();
    frm.reset();

    return false;


  }



  return (

    <Container className="p-5 " id="contact">
      <h2 className="display-4 pb-5 text-center">
        {heading}
      </h2>
      <p>I am interested in opportunities-especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me using the below form either.</p>
      <div className="container mt-5">
        <form onSubmit={onSubmit} name="contact-form">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Subject
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <div>
            <div>
              <button className="btn btn-danger" type="submit">
                {formStatus}
              </button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </Container>


  );
}

export default Contact;


