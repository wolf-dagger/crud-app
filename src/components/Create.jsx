import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://64a11d8f0079ce56e2dacee2.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4 ">
          <div className="bg-primary p4 text-center">
            <h1>Create Data</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Enter Age:</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Enter Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <br />
            <div className="d-grid">
              <button type="submit" value="Submit" className="btn btn-primary">
                Submit
              </button>
              <Link to={"/"}>
                <div className="d-grid mt-4 mb-2">
                  <button className="btn btn-success">Read Data</button>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
