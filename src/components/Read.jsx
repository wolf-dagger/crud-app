import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://64a11d8f0079ce56e2dacee2.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://64a11d8f0079ce56e2dacee2.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12 mt-3">
          <div className="table table-responsive">
            <table className="table table-dark table-striped table-hover table-responsive ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_email}</td>
                        <td>
                          <Link to={"/update"}>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                setDataToStorage(
                                  item.id,
                                  item.e_name,
                                  item.e_age,
                                  item.e_email
                                );
                              }}
                            >
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              if (window.confirm("Are You Sure?")) {
                                handleDelete(item.id);
                              }
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-2 mt-2">
          <Link to={"/create"}>
            <div className="d-grid">
              <button className="btn btn-success">Create New Data</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Read;
