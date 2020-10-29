import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. My phone number is ${data.phone}. My email id is ${data.email}. Here is what I want to say, ${data.message}.`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              <div class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
